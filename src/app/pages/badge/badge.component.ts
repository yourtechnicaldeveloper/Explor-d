import { Component } from '@angular/core';

@Component({
  selector: 'ngx-badge',
  styleUrls: ['badge.component.scss'],
  template: `


<div class="container">
  
  <div class="card">
    <div class="card-body">
      <router-outlet></router-outlet>
    </div>
  </div>
</div>`,
})
export class BadgeComponent {
    
}
