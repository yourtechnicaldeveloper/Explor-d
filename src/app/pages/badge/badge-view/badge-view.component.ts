import { Component, OnInit, ViewChild, ElementRef, NgZone  } from '@angular/core';
import { FormBuilder, FormGroup, FormControl  } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MapsAPILoader  } from '@agm/core';
import { RestService } from 'app/core_auth/services/rest.service';

@Component({
  selector: 'ngx-badge-view',
  templateUrl: './badge-view.component.html',
  styleUrls: ['./badge-view.component.scss']
})
export class BadgeViewComponent implements OnInit {
  private activeRoute: any;
  showMyContainer: boolean = false;
  tours: string[] = [];
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
    private ngZone: NgZone, private restService: RestService, private route: ActivatedRoute) {

      this.form = this.fb.group({
        id:[''],
        badgeIcon: [null],
        latitude:[''],
        longitude:[''],
        name: [''],
        tours: [''],
        toggle:[Boolean],
      })

     }
     reloadData(){
      this.restService.get("/tours/list").subscribe((data) => {
        this.tours = data.data;
      }, (error) => {
        console.log(error)
      });
     }
  ngOnInit(): void {
    var id;
    this.activeRoute = this.route.params.subscribe(params => {
    id = { "_id" : params['id'] };
   });
    this.restService.post("/badge/view", id).subscribe((data) => {
      this.badges = data.data;
      //console.log(this.tours.lat); 
    }, (error) => {
      console.log(error)
    });

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
