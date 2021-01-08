import { Component, OnInit, ViewChild, ElementRef, NgZone, ViewEncapsulation, Inject  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MapsAPILoader} from '@agm/core';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { RestService } from 'app/core_auth/services/rest.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'ngx-tours-create',
  templateUrl: './tours-create.component.html',
  styleUrls: ['./tours-create.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToursCreateComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  massage: string;
  msg: string;
  categories: any[] = [];
  myFiles:string [] = [];
  submitted = false;
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  marker:any;
  declare audioDuration:any;
  private geoCoder;
  @ViewChild('search')
  public searchElementRef: ElementRef;

  form: FormGroup;
  constructor(private http: HttpClient, private router: Router,public fb: FormBuilder, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone, private restService: RestService, public dialog: MatDialog) {}
     
     reloadData(){
      this.restService.get("/category/categoryList").subscribe((data) => {
        this.categories = data.data;
      }, (error) => {
        console.log(error)
      });
     }
// convenience getter for easy access to form fields
get f() { return this.form.controls; }
  ngOnInit(): void {
    this.form = this.fb.group({
      picture: [null, [RxwebValidators.image({maxHeight:100,maxWidth:100 }), RxwebValidators.extension({extensions:["jpeg", "png"]})]],
      lat:[''],
      long:[''],
      name: ['', Validators.required],
      description:['', Validators.required],
      categoryName: ['', Validators.required],
      audio: [null],
      transcript:['', Validators.required],
      audioDuration:[''],
    });


    this.initAutocomplete();
    this.reloadData();
    let tmp = [];
      this.restService.get("/category/categoryList").subscribe(data => {
        //console.log(data.data[0]._id);
          for (let i = 0; i < data.data.length; i++) {
            tmp.push({ item_id: data.data[i]._id, item_text: data.data[i].name });
          }
          this.dropdownList = tmp;
      });

        this.dropdownSettings = {
          singleSelection: true,
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
  
  get registerFormControl() {
    return this.form.controls;
  }
  
  uploadProfile(event) {
    // const userProfile = (event.target as HTMLInputElement).files[0];
    // this.form.patchValue({
    //   picture: userProfile
    // });
    // this.form.get('picture').updateValueAndValidity();
    for (var i = 0; i < event.target.files.length; i++) { 
      this.myFiles.push(event.target.files[i]);
    }
  }

  uploadAudio(event) {
    const audioFile = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      audio: audioFile
    });
    this.form.get('audio').updateValueAndValidity();
    //here you can check the file type for attachedFile either video or audio
  
    var audio = document.createElement('audio');
    audio.preload = 'metadata';
    audio.src = URL.createObjectURL(audioFile);
    audio.onloadedmetadata = function() {
      window.URL.revokeObjectURL(audio.src);
      globalThis.audioDuration = Math.round(audio.duration*Math.pow(10,0))/Math.pow(10,0); // here you could get the duration
    }
    
  }
 
  submitForm() {
    
    this.submitted = true;
    if (this.form.invalid) {
      return;
  }

    var formData: any = new FormData();

    let val = [];
    
    for (var i = 0; i < this.myFiles.length; i++) { 
      formData.append("picture", this.myFiles[i]);
    }
    formData.append("lat", this.marker.getPosition().lat());
    formData.append("long", this.marker.getPosition().lng());
    formData.append("name", this.form.value.name)
    formData.append("description", this.form.get('description').value);
    for (let i = 0; i < this.form.get('categoryName').value.length; i++) {
      val.push(this.form.get('categoryName').value[i].item_id);
    }
    formData.append("categoryName", (val));
    //formData.append("categoryName", this.form.get('categoryName').value);
    formData.append("audio", this.form.get('audio').value);
    formData.append("audioDuration", globalThis.audioDuration);
    formData.append("transcript", this.form.value.transcript);
    
    this.submitted = true;
    if (this.form.valid) {

      this.http.post('http://18.217.48.28:2000/tours/create', formData, { headers: this.getHeader(FormData) }).subscribe(
      (response) => this.refresh(response),
      (error) => {
        alert ("Something Went Wrong");
        console.log(error)
      }
      
    );
     // console.table(this.form.value);
    }
  }
    refresh(response){
      if(response['meta']['status'] == 201){
        this.router.navigate(['/pages/tours/tours-list']);
        //alert("Tours added Successfully")
        this.makeHttpCall()
      }    
    }
    makeHttpCall() {
      this.http.get('https://jsonplaceholder.typicode.com/comments')
        .subscribe((r) => {
          console.log(r);
          this.openDialog();
        });
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