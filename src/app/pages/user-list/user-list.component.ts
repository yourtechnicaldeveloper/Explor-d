import { Component, OnInit } from '@angular/core';
import { RestService } from 'app/core_auth/services/rest.service';
import { Category } from 'app/_model/category';
import { User } from 'app/_model/user';
import { data } from 'jquery';


@Component({
  selector: 'ngx-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private restService: RestService) { }
  
  users: any[] = [];

  user:any;
  currentUser = null;
  currentIndex = -1;
  email : string;
  

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.restService.get("/admin/userList").subscribe((data) => {
      this.users = data.data;
    }, (error) => {
      console.log(error)
    });
  }
  // delete(id: number) {
  //   this.restService.delete(id).subscribe((data) => {
  //         console.log(id);
  //         this.reloadData();
  //       },
  //       error => console.log(error));
  // }

  // searchField(): void{
  //   this.restService.searchField(this.search)
  //   .subscribe((data) => {
  //     this.user = this.search;
  //   }, (error) => {
  //     console.log(error)
  //   });
  // }
  
  
}
