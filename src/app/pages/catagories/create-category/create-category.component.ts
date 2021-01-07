import { Component, Inject, OnInit, ViewEncapsulation  } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'ngx-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateCategoryComponent implements OnInit {
  isFormSubmitted = false;
  massage: string;
  msg: string;
  form: FormGroup;
  category: any;
  constructor(private http: HttpClient, private router: Router,public fb: FormBuilder, private location: Location,  public dialog: MatDialog) { 
    
  }
  

  ngOnInit(): void{
    this.form = this.fb.group({
      name: ['', Validators.required],
      icon: [null, Validators.required]
    })
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
    this.isFormSubmitted = true;

    // Return if form is invalid
    if (this.form.invalid) {
      return;
    }
    var formData: any = new FormData();
    formData.append("name", this.form.get('name').value);
    formData.append("icon", this.form.get('icon').value);
    this.http.post('http://18.217.48.28:2000/category/create', formData, { headers: this.getHeader(FormData) }).subscribe(
      (response) => this.refresh(response),
      (error) => {
        alert("Something Went Wrong Please Check");
        console.log(error)
      }
    )
  }
  refresh(response){
    if(response['meta']['status'] == 201){
      this.router.navigate(['/pages/categories/category-list']);
      alert("Category added Successfully");

    this.openDialog();
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