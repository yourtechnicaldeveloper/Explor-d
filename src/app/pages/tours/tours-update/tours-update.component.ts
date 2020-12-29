import { Component, OnInit, ViewChild, ElementRef, NgZone, ViewEncapsulation  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MapsAPILoader} from '@agm/core';
import { RestService } from 'app/core_auth/services/rest.service';

@Component({
  selector: 'ngx-tours-update',
  templateUrl: './tours-update.component.html',
  styleUrls: ['./tours-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ToursUpdateComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  private activeRoute: any;
  myFiles:string [] = [];
  categories: any[] = [];
  tour: any = [];
  submitted = false;
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;
  selectedCategory: any;
  declare audioDuration:any;
  prevcatid:any;
  marker:any;
  @ViewChild('search')
  public searchElementRef: ElementRef;
  
  form: FormGroup;
  constructor(private http: HttpClient, private router: Router,public fb: FormBuilder, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone, private restService: RestService, private route:ActivatedRoute) {

      this.form = this.fb.group({
        picture: [null],
        lat:[''],
        long:[''],
        name: ['', Validators.required],
        description:['', Validators.required],
        categoryName: [''],
        audio: [null],
        transcript:['', Validators.required],
        audioDuration:[''],
        // feedback:[''],
      })

     }
     get f() { return this.form.controls; }
    
     reloadData(){
      
      // var id;
      // this.activeRoute = this.route.params.subscribe(params => {
      // id = { "_id" : params['id'] };
      // });

      // this.restService.post("/tours/view/", id).subscribe((data) => {
      //   this.tour = data.data;
      // }, (error) => {
      //   console.log(error)
      // });
     }

     

  ngOnInit(): void {

    this.reloadData();
    this.initAutocomplete();

    let tmp = [];
      this.restService.get("/category/categoryList").subscribe(data => {
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

      this.restService.post("/tours/view", id).subscribe((data) => {
        this.tour = data.data;
        console.log(this.tour.categoryName);
        this.selectedItems = [
          { item_id: this.tour.cateId, item_text: this.tour.categoryName.name },
        ];
        
      }, (error) => {
        console.log(error)
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
    let val = [];
    var formData: any = new FormData();
    //console.log(this.form.value.categoryName);
    if(this.form.get('picture').value != null)
    {
      for (var i = 0; i < this.myFiles.length; i++) { 
        formData.append("picture", this.myFiles[i]);
      }
    }
    if(this.form.get('audio').value != null)
    {
      formData.append("audio", this.form.get('audio').value);
    }
    if(this.form.get('audioDuration').value != null)
    {
      formData.append("audioDuration", globalThis.audioDuration);
    }
    for (let i = 0; i < this.form.get('categoryName').value.length; i++) {
      val.push(this.form.get('categoryName').value[i].item_id);
    }
    formData.append("categoryName", (val));
    // if(this.form.get('categoryName').value)
    // {
    //   formData.append("categoryName", this.form.get('categoryName').value);
    // }else{
    //   console.log(this.prevcatid);
    // }
    formData.append("lat", this.marker.getPosition().lat());
    formData.append("long", this.marker.getPosition().lng());
    formData.append("name", this.form.value.name);
    formData.append("description", this.form.get('description').value);
    formData.append("transcript", this.form.value.transcript);

    // if(this.form.get('feedback').value != null)
    // {
    //   formData.append("feedback", this.form.value.feedback);
    // }
    
    
    var id;
    this.activeRoute = this.route.params.subscribe(params => {
    id = params['id'];
   });
   this.submitted = true;
    if (this.form.valid) {
      this.http.post('http://18.217.48.28:2000/tours/update/' + id, formData, { headers: this.getHeader(FormData) }).subscribe(
      (response) => this.refresh(response),
      (error) => console.log(error)
      
    );
      //console.table(this.form.value);
    }
  }
    refresh(response){
      if(response['meta']['status'] == 200){
        this.router.navigate(['/pages/tours/tours-list']);
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
