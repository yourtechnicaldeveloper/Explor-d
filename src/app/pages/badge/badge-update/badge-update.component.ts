import { Component, OnInit, ViewChild, ElementRef, NgZone, ViewEncapsulation, Inject  } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators  } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MapsAPILoader  } from '@agm/core';
import { RestService } from 'app/core_auth/services/rest.service';
import { FormDataService } from 'app/core_auth/services/formdata.service';
import { data } from 'jquery';

import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'ngx-badge-update',
  templateUrl: './badge-update.component.html',
  styleUrls: ['./badge-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BadgeUpdateComponent implements OnInit {
  isNotShowDiv = true;
  private activeRoute: any;
  massage: string;
  msg: string;
  _id: any;
  showMyContainer: boolean = false;
  tours: any = [];
  badges: any = [];
  submitted = false;
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  marker :any;
  private geoCoder;
  @ViewChild('search')
  public searchElementRef: ElementRef;
  form: FormGroup;
  constructor(private http: HttpClient, private router: Router,public fb: FormBuilder, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone, private restService: RestService, private route: ActivatedRoute, private formDataService: FormDataService,  public dialog: MatDialog) {

      this.form = this.fb.group({
        _id:[''],
        badgeIcon: [null],
        lat:[''],
        long:[''],
        name: [''],
        tours: [''],
        toggle:[],
        about:[''],
        benefits:[''],
      })

     }
     get f() { return this.form.controls; }
     toggleDisplayDiv(toggle) {
      //alert(toggle);
      this.isNotShowDiv = !this.isNotShowDiv;
      if(toggle == 1)
      {
        let myLatlng = {lat: parseFloat(this.badges.lat), lng: parseFloat(this.badges.long) }
        const map = new google.maps.Map(document.getElementById("map"), {
          
          center: myLatlng,
          zoom: 15,
          mapTypeId: "roadmap",
        });
        
        this.marker =
            new google.maps.Marker({
              map,
              title: "place.name",
              position: myLatlng,
              draggable:true
            })
            this.marker.setMap(map);
            //console.log("Marker Set");
          google.maps.event.addListener(this.marker, 'dragend', function() {
          google.maps.event.trigger(map, "resize");
          
          console.log(this.marker.getPosition().lat());
          console.log(this.marker.getPosition().lng());
         
       });
       
       map.addListener('dragend', ()=>{
        google.maps.event.trigger(map, "resize");
        console.log("get position on drag");
        console.log(this.marker.getPosition().lng());
      });
        // Create the search box and link it to the UI element.
        const input = <HTMLInputElement>document.getElementById("pac-input");
        const searchBox = new google.maps.places.SearchBox(input);
        //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        // Bias the SearchBox results towards current map's viewport.
        map.addListener("bounds_changed", () => {
          searchBox.setBounds(map.getBounds());
        });
        
        searchBox.addListener("places_changed", () => {
          const places = searchBox.getPlaces();
      
          if (places.length == 0) {
            return;
          }
  
          const bounds = new google.maps.LatLngBounds();
          places.forEach((place) => {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            const icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25),
            };
            
            this.marker.setPosition(place.geometry.location);
            console.log("place");
            console.log(place.geometry.location.lat());
            console.log(place.geometry.location.lng());
            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      }
      else if(this.isNotShowDiv == true){
        const map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: -33.8688, lng: 151.2195 },
            zoom: 13,
            mapTypeId: "roadmap",
          });
          this.marker =
              new google.maps.Marker({
                map,
                title: "place.name",
                position: { lat: -33.8688, lng: 151.2195 },
                draggable:true
              })
           google.maps.event.addListener(this.marker, 'dragend', function() {
            
            console.log(this.marker.getPosition().lat());
            console.log(this.marker.getPosition().lng());
           
         });
         map.addListener('dragend', ()=>{
          console.log("place gytgyty");
          console.log(this.marker.getPosition().lng());
        });
          // Create the search box and link it to the UI element.
          const input = <HTMLInputElement>document.getElementById("pac-input");
          const searchBox = new google.maps.places.SearchBox(input);
          //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
          // Bias the SearchBox results towards current map's viewport.
          map.addListener("bounds_changed", () => {
            searchBox.setBounds(map.getBounds());
          });
          
          searchBox.addListener("places_changed", () => {
            const places = searchBox.getPlaces();
        
            if (places.length == 0) {
              return;
            }
    
            const bounds = new google.maps.LatLngBounds();
            places.forEach((place) => {
              if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
              }
              const icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25),
              };
              
              this.marker.setPosition(place.geometry.location);
              console.log("place");
              console.log(place.geometry.location.lat());
              
              if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
              } else {
                bounds.extend(place.geometry.location);
              }
            });
            map.fitBounds(bounds);
          });
      }
    }

    
  ngOnInit(): void {
    //this.reloadData();
    //getData(): void {
      let tmp = [];
      this.restService.get("/tours/list").subscribe(data => {
          //console.log(data.data[0]._id);
          for (let i = 0; i < data.data.length; i++) {
            tmp.push({ item_id: data.data[i]._id, item_text: data.data[i].name });
          }
          this.dropdownList = tmp;
      });
      var id;
      this.activeRoute = this.route.params.subscribe(params => {
        id = { "_id" : params['id'] };
      });
      let sel = [];
      this.restService.post("/badge/view", id).subscribe((data) => {
        this.badges = data.data;
        console.log(this.badges.about)
        // console.log(this.badges.lat);
        // console.log(this.badges.name);
        this.toggleDisplayDiv(this.badges.toggle)
        
        for (let i = 0; i < this.badges.tours.length; i++) {
          sel.push({ item_id: this.badges.tours[i].toursId, item_text: this.badges.tours[i].tourName });
        }
        this.selectedItems = sel;
      }, (error) => {
        console.log(error)
      });

        this.dropdownSettings = {
          singleSelection: false,
          idField: "item_id",
          textField: "item_text",
          selectAllText: "Select All",
          unSelectAllText: "UnSelect All",
          itemsShowLimit: 6,
          allowSearchFilter: true
        };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
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
      let val = [];
      //console.log(this.form.get('badgeIcon').value);
      if(this.form.get('badgeIcon').value != null)
      {
        formData.append("badgeIcon", this.form.get('badgeIcon').value);
      }
      formData.append("name", this.form.value.name);

      for (let i = 0; i < this.form.get('tours').value.length; i++) {
        val.push(this.form.get('tours').value[i].item_id);
      }
      formData.append("tours", JSON.stringify(val));
      formData.append("toggle", this.form.value.toggle ? 1 : 0);
      if (this.form.value.toggle == true){
          formData.append("lat", this.marker.getPosition().lat());
          formData.append("long", this.marker.getPosition().lng());
      }
      formData.append("benefits", this.form.value.benefits);
      formData.append("about", this.form.value.about);
      formData.append("_id", this.badges._id);
      this.submitted = true;
      
      if (this.form.valid) {

        this.http.post('http://18.217.48.28:2000/badge/update', formData, { headers: this.getHeader(FormData) }).subscribe(
        (response) => this.refresh(response),
        (error) => {
          alert("Something Went Wrong Please Check");
          console.log(error)
        }
      );
    }
  }
  makeHttpCall() {
    this.http.get('https://jsonplaceholder.typicode.com/comments')
      .subscribe((r) => {
        console.log(r);
        this.openDialog();
      });
  }
    refresh(response){
      if(response['meta']['status'] == 200){
        this.router.navigate(['/pages/badge/badge-list']);
        //alert("Badge Updated Successfully")
        this.makeHttpCall()
        
      }    
    }
    openDialog(): void {
      let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        direction: "ltr",
        data: { massage: this.msg }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.msg = result;
      });
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
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
