import { Component, OnInit, ViewChild, ElementRef, NgZone  } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators  } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MapsAPILoader  } from '@agm/core';
import { RestService } from 'app/core_auth/services/rest.service';
import { FormDataService } from 'app/core_auth/services/formdata.service';

@Component({
  selector: 'ngx-badge-update',
  templateUrl: './badge-update.component.html',
  styleUrls: ['./badge-update.component.scss']
})
export class BadgeUpdateComponent implements OnInit {
  isNotShowDiv = true
  private activeRoute: any;
  _id: any;
  showMyContainer: boolean = false;
  tours: any = [];
  badges: any = [];
  submitted = false;
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;
  @ViewChild('search')
  public searchElementRef: ElementRef;

  form: FormGroup;
  constructor(private http: HttpClient, private router: Router,public fb: FormBuilder, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone, private restService: RestService, private route: ActivatedRoute, private formDataService: FormDataService,) {

      this.form = this.fb.group({
        _id:[''],
        badgeIcon: [null],
        latitude:[''],
        longitude:[''],
        name: ['', Validators.required],
        tours: ['', Validators.required],
        toggle:[],
      })

     }
     get f() { return this.form.controls; }
     toggleDisplayDiv() {
      this.isNotShowDiv = !this.isNotShowDiv;
    }
    reloadData(){
      this.restService.get("/tours/list").subscribe((data) => {
        this.tours = data.data;
          }, (error) => {
            console.log(error)
        });
        var id;
        this.activeRoute = this.route.params.subscribe(params => {
        id = { "_id" : params['id'] };
      });
      
      this.restService.post("/badge/view", id).subscribe((data) => {
        this.badges = data.data;
        console.log(data);
      }, (error) => {
        console.log(error)
      });
    };
  ngOnInit(): void {
    this.reloadData();
    
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 22;
        });
      });
    });
  
  }
  markerDragEnd($event: google.maps.MouseEvent) {
    console.log($event);
    this.latitude = $event.latLng.lat();
    this.longitude = $event.latLng.lng();
    this.getAddress(this.latitude, this.longitude);
  }


  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 22;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }
  get registerFormControl() {
    return this.form.controls;
  }
  
  uploadProfile(event) {
    const badgeIcon = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      badgeIcon: badgeIcon
    });
    this.form.get('badgeIcon').updateValueAndValidity();
  }

  uploadAudio(event) {
    const audioFile = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      audio: audioFile
    });
    this.form.get('audio').updateValueAndValidity();
  }
  
  submitForm() {
      var formData: any = new FormData();
      if(this.form.get('badgeIcon').value != null)
      {
        formData.append("badgeIcon", this.form.get('badgeIcon').value);
      }
      formData.append("name", this.form.value.name);
      formData.append("tours", JSON.stringify(this.form.get('tours').value));
      formData.append("toggle", this.form.value.toggle ? 1 : 0);
      if (this.form.value.toggle == true){
          formData.append("lat", this.latitude);
          formData.append("long", this.longitude);
      }
      formData.append("_id", this.badges._id);
      this.submitted = true;
      
      if (this.form.valid) {

        this.http.post('http://18.217.48.28:2000/badge/update', formData, { headers: this.getHeader(FormData) }).subscribe(
        (response) => this.refresh(response),
        (error) => console.log(error)
        
      );
    }
  }
    refresh(response){
      if(response['meta']['status'] == 200){
        this.router.navigate(['/pages/badge/badge-list']);
      }    
    }
  getHeader(isFormData?) {
    let headers: HttpHeaders = new HttpHeaders();
    
    if (!isFormData) {
      headers = headers.append('Content-Type', 'json');
    }
    headers = headers.append('Authorization', localStorage.getItem('access_token'));
    return headers;
  }

  ngOnDestroy() {
    if (this.activeRoute) {
      this.activeRoute.unsubscribe();
    }
  }

}
