import { Component, OnInit } from '@angular/core';
import { RestService } from 'app/core_auth/services/rest.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-badge-view',
  templateUrl: './badge-view.component.html',
  styleUrls: ['./badge-view.component.scss']
})
export class BadgeViewComponent implements OnInit {

  constructor(private restService: RestService, private router: Router) { }

  badges: any [];

  ngOnInit() {

    this.restService.get("/category/categoryList").subscribe((data) => {
      this.badges = data.data;
    }, (error) => {
      console.log(error)
    });

  }
  list(){
    this.router.navigate(['/pages/badge/badge-list']);
  }
}
