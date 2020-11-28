import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { RestService } from 'app/core_auth/services/rest.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { ActivatedRoute} from "@angular/router"; // ActivatedRoue is used to get the current associated components information.
import { Category } from 'app/_model/category';

@Component({
  selector: 'ngx-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class UpdateCategoryComponent implements OnInit {
  isNotShowDiv = true
  isShowDiv = false;
  
  category: Category;
  private activeRoute: any;
  submitted = false;
  form: FormGroup;
  categories: any [];
  
  constructor(private restService: RestService, private http: HttpClient, private router: Router, private route: ActivatedRoute, public fb: FormBuilder, private location: Location , private actRoute: ActivatedRoute) { 
    this.form = this.fb.group({
      name: [''],
      icon: [null]
    })
  }
  
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
    this.isNotShowDiv = !this.isNotShowDiv;
  }
  ngOnInit(): void{
    var id;
    this.activeRoute = this.route.params.subscribe(params => {
    id = { "_id" : params['id'] };
   });
    this.restService.post("/category/view", id).subscribe((data) => {
      this.category = data.data;
    }, (error) => {
      console.log(error)
    });
  
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      icon: file,
    });
    this.form.get('icon').updateValueAndValidity()
  }
  submitForm() {
    
    var formData: any = new FormData();
    if(this.form.get('icon').value != null)
    {
      formData.append("icon", this.form.get('icon').value);
    }
    formData.append("name", this.form.get('name').value);
    var id;
    this.activeRoute = this.route.params.subscribe(params => {
    id = params['id'];
    });
    this.submitted = true;
    if (this.form.valid) {
      this.http.post('http://18.217.48.28:2000/category/categoryUpdate/' + id, formData, { headers: this.getHeader(FormData) }).subscribe(
      (response) => this.refresh(response),
    );
    }
  }
  refresh(response){
    if(response['meta']['status'] == 200){
      this.router.navigate(['/pages/categories/category-list']);
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
