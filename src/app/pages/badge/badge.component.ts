import { Component } from '@angular/core';

@Component({
  selector: 'ngx-badge',
  styleUrls: ['badge.component.scss'],
  template: `


<div class="container">
  <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
  <!-- Links -->
  <ul class="navbar-nav">
    <li class="nav-item">
        <h2>Badge List</h2>
    </li>
    <li class="nav-item right-btn">
        <a routerLink="add" class="nav-link" routerLinkActive="active">Add Badge</a>
    </li>
  </ul>
  </nav>
  
  <div class="card">
    <div class="card-body">
      <router-outlet></router-outlet>
    </div>
  </div>
</div>`,
})
export class BadgeComponent {

    title = 'Angular 9 + Spring Boot 2 CRUD Tutorial';
}
