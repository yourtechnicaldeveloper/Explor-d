import { Component, OnInit } from '@angular/core';
import { RestService } from 'app/core_auth/services/rest.service';

@Component({
  selector: 'ngx-badge-list',
  templateUrl: './badge-list.component.html',
  styleUrls: ['./badge-list.component.scss']
})
export class BadgeListComponent implements OnInit {

  badges: any = [];
    
  constructor(private restService: RestService) { }

  ngOnInit(){
    this.reloadData();
  }
  
  reloadData() {
    this.restService.post("/badge/listing").subscribe((data) => {
      this.badges = data.data;
    }, (error) => {
      alert(error['error']['meta']['msg']);
    });
  }
}
