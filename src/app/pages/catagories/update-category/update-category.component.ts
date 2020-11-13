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
  
  
  ngOnInit(): void{
  
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
    formData.append("icon", this.form.get('icon').value);
    formData.append("name", this.form.get('name').value);
    var id;
    this.activeRoute = this.route.params.subscribe(params => {
    id = params['id'];
   });
    this.submitted = true;
    if (this.form.valid) {
      this.http.post('http://18.224.173.145:2000/category/categoryUpdate/{{id}}', formData, { headers: this.getHeader(FormData) }).subscribe(
      (response) => console.log(response),
    );
    
      // alert('Form Submitted succesfully!!!');
      this.router.navigate(['../category-list']);
      console.table(this.form.value);
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
    debugger
    if (this.activeRoute) {
      this.activeRoute.unsubscribe();
    }
  }
}
