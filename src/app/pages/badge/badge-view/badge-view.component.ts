///<reference types="@types/googlemaps" />;
import { Component, OnInit, ViewChild, ElementRef, NgZone  } from '@angular/core';
import { FormBuilder, FormGroup, FormControl  } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'app/core_auth/services/rest.service';


@Component({
  selector: 'ngx-badge-view',
  templateUrl: './badge-view.component.html',
  styleUrls: ['./badge-view.component.scss']
})
export class BadgeViewComponent implements OnInit {
  showMyContainer: boolean = false;
  private activeRoute: any;
  tours: any[] = [];
  badges: any = [];
  submitted = false;
  zoom: number;
  address: string;

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  latitude: any;
  longitude: any;

  form: FormGroup;
  constructor(private restService: RestService, private router: Router, private route: ActivatedRoute,private ngZone: NgZone) { }
    
    isHidden = false;
    ngAfterContentInit(lat, long) {
      let mapProp = {
        center: new google.maps.LatLng(lat, long),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
      let location = new google.maps.LatLng(this.badges.lat, this.badges.long);
      console.log('aaa');
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
    this.restService.post("/badge/view", id).subscribe((data) => {
      this.badges = data.data;
      this.ngAfterContentInit(this.badges.lat, this.badges.long);
    }, (error) => {
      console.log(error)
    });
    
    this.restService.get("/tours/list").subscribe((data) => {
      this.tours = data.data;
    }, (error) => {
      console.log(error)
    });

  }
  
  
  ngOnDestroy() {
    if (this.activeRoute) {
      this.activeRoute.unsubscribe();
    }
  }
}
