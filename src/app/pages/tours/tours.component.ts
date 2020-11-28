import { Component } from '@angular/core';

@Component({
  selector: 'ngx-tours',
  styleUrls: ['tours.component.scss'],
  template: `


<div class="container">
  <div class="card">
    <div class="card-body">
      <router-outlet></router-outlet>
    </div>
  </div>
</div>`,
})
export class ToursComponent {

    title = 'Angular 9 + Spring Boot 2 CRUD Tutorial';
}
