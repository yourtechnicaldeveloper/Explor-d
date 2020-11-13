import { Component, OnInit } from '@angular/core';

import { RestService } from 'app/core_auth/services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-tours-detail',
  templateUrl: './tours-detail.component.html',
  styleUrls: ['./tours-detail.component.scss']
})
export class ToursDetailComponent implements OnInit {

  currentTours = null;
  message = '';


  constructor(private restService: RestService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.message = '';
    this.getTours(this.route.snapshot.paramMap.get('id'));
  }
  getTours(id): void {
    this.restService.get(id)
      .subscribe(
        data => {
          this.currentTours = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status): void {
    const data = {
      title: this.currentTours.title,
      description: this.currentTours.description,
      published: status
    };

    this.restService.post(this.currentTours.id, data)
      .subscribe(
        response => {
          this.currentTours.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateTours(): void {
    this.restService.post(this.currentTours.id, this.currentTours)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The TOURS was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTours(): void {
    this.restService.delete(this.currentTours.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/tutorials']);
        },
        error => {
          console.log(error);
        });
  }

}
