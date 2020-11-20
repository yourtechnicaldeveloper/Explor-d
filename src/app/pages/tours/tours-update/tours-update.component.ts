import { Component, OnInit, ViewChild, ElementRef, NgZone  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MapsAPILoader} from '@agm/core';


import { RestService } from 'app/core_auth/services/rest.service';
import { Tour } from 'app/_model/tour';
@Component({
  selector: 'ngx-tours-update',
  templateUrl: './tours-update.component.html',
  styleUrls: ['./tours-update.component.scss']
})

export class ToursUpdateComponent implements OnInit {
  categories: any[] = [];
  tour: Tour;
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
    private ngZone: NgZone, private restService: RestService) {

      this.form = this.fb.group({
        picture: [null],
        lat:[''],
        long:[''],
        name: [''],
        description:[''],
        categoryName: [''],
        audio: [null],
        transcript:[''],
        
      })

     }
     reloadData(){
      this.restService.get("/category/categoryList").subscribe((data) => {
        this.categories = data.data;
      }, (error) => {
        console.log(error)
      });
     }

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
          this.zoom = 12;
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
          this.zoom = 12;
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
    const userProfile = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      picture: userProfile
    });
    this.form.get('picture').updateValueAndValidity();
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
    formData.append("picture", this.form.get('picture').value);
    formData.append("lat", this.latitude);
    formData.append("long", this.longitude);
    formData.append("name", this.form.value.name)
    formData.append("description", this.form.get('description').value);
    formData.append("categoryName", this.form.get('categoryName').value);
    formData.append("audio", this.form.get('audio').value);
    formData.append("transcript", this.form.value.transcript);
    
    
    this.submitted = true;
    if (this.form.valid) {

      this.http.post('http://18.217.48.28:2000/tours/update/{{tour._id}}', formData, { headers: this.getHeader(FormData) }).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
      
    );
    
      // alert('Form Submitted succesfully!!!');
      this.router.navigate(['/pages/tours/tours-list']);
      console.table(this.form.value);
    }
    // 
  
    }
  getHeader(isFormData?) {
    let headers: HttpHeaders = new HttpHeaders();
    
    if (!isFormData) {
      headers = headers.append('Content-Type', 'json');
    }
    headers = headers.append('Authorization', localStorage.getItem('access_token'));
    return headers;
  }

}
