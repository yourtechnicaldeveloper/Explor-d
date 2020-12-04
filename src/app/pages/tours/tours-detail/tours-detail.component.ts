///<reference types="@types/googlemaps" />;
import { Component, OnInit, ViewChild, ElementRef, NgZone  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'app/core_auth/services/rest.service';

@Component({
  selector: 'ngx-tours-detail',
  templateUrl: './tours-detail.component.html',
  styleUrls: ['./tours-detail.component.scss']
})
export class ToursDetailComponent implements OnInit {
  
  categories: any []= [];
  tours: any = [];
  message = '';
  private activeRoute: any;
  zoom: number;
  address: string;

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  latitude: any;
  longitude: any;
  
  constructor(private restService: RestService, private router: Router, private route: ActivatedRoute,private ngZone: NgZone,) { }

  ngAfterContentInit(lat, long) {
    let mapProp = {
      center: new google.maps.LatLng(lat, long),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    let location = new google.maps.LatLng(this.tours.lat, this.tours.long);
    let marker = new google.maps.Marker({
      position: location,
      map: this.map
    });

  }

  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId)
  }

  ngOnInit(): void {
    var id;
    this.activeRoute = this.route.params.subscribe(params => {
    id = { "_id" : params['id'] };
   });
    this.restService.post("/tours/view", id).subscribe((data) => {
      this.tours = data.data;
      this.ngAfterContentInit(this.tours.lat, this.tours.long);
    }, (error) => {
      console.log(error)
    });
    
    this.restService.get("/category/categoryList").subscribe((data) => {
      this.categories = data.data;
    }, (error) => {
      console.log(error)
    });
  };
  
  
  ngOnDestroy() {
    if (this.activeRoute) {
      this.activeRoute.unsubscribe();
    }
  }

}
