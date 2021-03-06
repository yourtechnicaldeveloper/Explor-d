import { Component, Inject, OnInit, ViewEncapsulation  } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEventType, HttpHeaders } from '@angular/common/http';
import { RestService } from 'app/core_auth/services/rest.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { ActivatedRoute} from "@angular/router"; // ActivatedRoue is used to get the current associated components information.
import { Category } from 'app/_model/category';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'ngx-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class UpdateCategoryComponent implements OnInit {
  loading : boolean;
  percentDone: any;
  isNotShowDiv = true
  isShowDiv = false;
  massage: string;
  msg: string;
  category: Category;
  private activeRoute: any;
  submitted = false;
  form: FormGroup;
  categories: any [];
  
  constructor(private restService: RestService, private http: HttpClient, private router: Router, private route: ActivatedRoute, public fb: FormBuilder, private location: Location , private actRoute: ActivatedRoute,  public dialog: MatDialog) { 
    this.form = this.fb.group({
      name: ['', Validators.required ],
      icon: [null]
    })
  }
  get f() { return this.form.controls; }
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
      this.loading = true;
      this.http.post('http://13.58.33.101:2000/category/categoryUpdate/' + id, formData, {reportProgress: true, observe: 'events', headers: this.getHeader(FormData) }).subscribe(
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
          this.loading = !this.loading;
        }
      );
    }
  }
  refresh(response){
    if(response['body']['meta']['status'] == 200){
      //alert("Category Updated successfully");
      this.router.navigate(['/pages/categories/category-list']);
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
