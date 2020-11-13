import { Component, OnInit } from '@angular/core';
import { RestService } from 'app/core_auth/services/rest.service';

@Component({
  selector: 'ngx-badge-list',
  templateUrl: './badge-list.component.html',
  styleUrls: ['./badge-list.component.scss']
})
export class BadgeListComponent implements OnInit {

  badge: any;
    
  constructor(private restService: RestService) { }

  badges: any [];

  ngOnInit(){
    this.reloadData();
  }

  reloadData() {
    this.restService.post("/badge/listing").subscribe((data) => {
      this.badges = data.data;
    }, (error) => {
      console.log(error)
    });
  }
  

  deleteBadge (id: string) {
    const badge = this.badges.find(x => x.i === id);
    badge.isDeleting = true;
    this.restService.delete(id)
        .subscribe(() => {
            this.badges = this.badges.filter(x => x.i !== id) 
        });
  }

}
