import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators  } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { RestService } from 'app/core_auth/services/rest.service';



@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  detail: any = [];

  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.restService.get("/admin/admin-dashboard").subscribe((data) => {
      this.detail = data.data;
    }, (error) => {
      console.log(error)
    });
  }
}
