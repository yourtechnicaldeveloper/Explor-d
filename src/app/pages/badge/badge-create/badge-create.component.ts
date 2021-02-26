import { Component, OnInit, ViewChild, ElementRef, NgZone, ViewEncapsulation, Inject  } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators  } from "@angular/forms";
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { RestService } from 'app/core_auth/services/rest.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'ngx-badge-create',
  templateUrl: './badge-create.component.html',
  styleUrls: ['./badge-create.component.scss'],
  encapsulation: ViewEncapsulation.None // Add this line
})
export class BadgeCreateComponent implements OnInit {
  percentDone : any;
  loading : boolean;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  massage: string;
  msg: string;
  isNotShowDiv = true;
  tours: any = [];
  submitted = false;
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  marker :any;
  private geoCoder;
  
  @ViewChild('search')
  public searchElementRef: ElementRef;

  form: FormGroup;
  constructor(private http: HttpClient, private router: Router,public fb: FormBuilder, 
    private ngZone: NgZone, private restService: RestService, public dialog: MatDialog) {

      this.form = this.fb.group({
        badgeIcon: [null],
        latitude:[''],
        longitude:[''],
        name: ['', Validators.required],
        tours: ['', Validators.required],
        toggle:[false],
        about:[''],
        benefits:[''],
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
     }

     initAutocomplete() {
       
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
  ngOnInit(): void {
    this.reloadData();
    this.initAutocomplete();
    let tmp = [];
      this.restService.get("/tours/list").subscribe(data => {
        //console.log(data.data[0]._id);
          for (let i = 0; i < data.data.length; i++) {
            tmp.push({ item_id: data.data[i]._id, item_text: data.data[i].name });
          }
          this.dropdownList = tmp;
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
        let val = [];
        var formData: any = new FormData();
        formData.append("badgeIcon", this.form.get('badgeIcon').value);
        //formData.append("lat", this.latitude);
        //formData.append("long", this.longitude);
        formData.append("name", this.form.value.name);
        for (let i = 0; i < this.form.get('tours').value.length; i++) {
          val.push(this.form.get('tours').value[i].item_id);
        }
        
        formData.append("tours", JSON.stringify(val));
        formData.append("toggle", this.form.value.toggle ? 1 : 0);
        //console.log(JSON.stringify(this.form.get('tours').value));
        formData.append("benefits", this.form.value.benefits);
        formData.append("about", this.form.value.about);
        if (this.form.value.toggle == true)
        {
          formData.append("lat", this.marker.getPosition().lat());
          formData.append("long", this.marker.getPosition().lng());
        }
        this.submitted = true;
        if (this.form.valid) {
          this.loading = true;
          this.http.post('http://13.58.33.101:2000/badge/create', formData, {reportProgress: true, observe: 'events', headers: this.getHeader(FormData) }).subscribe(
            (response) => {
              if (response.type === HttpEventType.UploadProgress) {
                this.percentDone = Math.round(100 * response.loaded / response.total);
                console.log('Progress ' + this.percentDone + '%');
            }
              if(response['body'] != undefined)
              {
                this.refresh(response);
              }
            },
            (error) => {
              alert(error['error']['meta']['msg']);
              //console.log(error);
              this.loading = !this.loading;
            }
          );
      }
    }
   
    refresh(response){
      if(response['body']['meta']['status'] == 201){
        this.loading = !this.loading;
        this.router.navigate(['/pages/badge/badge-list']);
        //alert("Badge Updated Successfully")
        this.openDialog()
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
