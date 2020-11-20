import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
@Component({
  selector: 'ngx-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateCategoryComponent implements OnInit {
  form: FormGroup;
  category: any;
  constructor(private http: HttpClient, private router: Router,public fb: FormBuilder, private location: Location   ) { 
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
      name:'',
    });
    this.form.get('icon').updateValueAndValidity()
  }
  submitForm() {
    var formData: any = new FormData();
    formData.append("name", this.form.get('name').value);
    formData.append("icon", this.form.get('icon').value);
    this.http.post('http://18.217.48.28:2000/category/create', formData, { headers: this.getHeader(FormData) }).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  
    this.router.navigate(['/pages/categories/category-list']);
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
