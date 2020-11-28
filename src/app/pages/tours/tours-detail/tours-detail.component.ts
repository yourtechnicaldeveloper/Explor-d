import { RestService } from 'app/core_auth/services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef, NgZone  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MapsAPILoader} from '@agm/core';
import { Url } from 'url';

@Component({
  selector: 'ngx-tours-detail',
  templateUrl: './tours-detail.component.html',
  styleUrls: ['./tours-detail.component.scss']
})
export class ToursDetailComponent implements OnInit {
  
  
  tours: any;
  message = '';
  private activeRoute: any;
  categories: any [];
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;
  @ViewChild('search')
  public searchElementRef: ElementRef;
  constructor(private restService: RestService, private router: Router, private route: ActivatedRoute, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,) { }

  ngOnInit(): void {
    var id;
    this.activeRoute = this.route.params.subscribe(params => {
    id = { "_id" : params['id'] };
   });
    this.restService.post("/tours/view", id).subscribe((data) => {
      this.tours = data.data;
      console.log(this.tours.lat);
      this.mapload();
      //console.log(this.tours.lat); 
    }, (error) => {
      console.log(error)
    });
    
    this.restService.get("/category/categoryList").subscribe((data) => {
      this.categories = data.data;
    }, (error) => {
      console.log(error)
    });
  };

  private mapload(){
     //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
    });
  }
      // let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      // autocomplete.addListener("place_changed", () => {
      //   this.ngZone.run(() => {
      //     //get the place result
      //     let place: google.maps.places.PlaceResult = autocomplete.getPlace();

      //     //verify result
      //     if (place.geometry === undefined || place.geometry === null) {
      //       return;
      //     }

      //     //set latitude, longitude and zoom
      //     this.latitude = place.geometry.location.lat();
      //     this.longitude = place.geometry.location.lng();
      //     this.zoom = 12;
      //   });
      // });
    
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = this.tours.lat;
        this.longitude = this.tours.long;
        this.zoom = 15;
      });
    }
  }
  // markerDragEnd($event: google.maps.MouseEvent) {
  //   console.log($event);
  //   this.latitude = $event.latLng.lat();
  //   this.longitude = $event.latLng.lng();
  //   this.getAddress(this.latitude, this.longitude);
  // }


  // getAddress(latitude, longitude) {
  //   this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
  //     console.log(results);
  //     console.log(status);
  //     if (status === 'OK') {
  //       if (results[0]) {
  //         this.zoom = 12;
  //         this.address = results[0].formatted_address;
  //       } else {
  //         window.alert('No results found');
  //       }
  //     } else {
  //       window.alert('Geocoder failed due to: ' + status);
  //     }

  //   });
  // }
  
  ngOnDestroy() {
    if (this.activeRoute) {
      this.activeRoute.unsubscribe();
    }
  }

}
