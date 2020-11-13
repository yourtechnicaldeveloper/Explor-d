import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BadgeUpdateComponent } from './badge-update/badge-update.component';
import { BadgeCreateComponent } from './badge-create/badge-create.component';
import { BadgeViewComponent } from './badge-view/badge-view.component';
import { BadgeListComponent } from './badge-list/badge-list.component';
import { BadgeComponent } from './badge.component';


const routes: Routes = [{
  path: '',
  component: BadgeComponent,
  children: [
      { path: 'badge-list', component: BadgeListComponent },
      { path: 'add', component: BadgeCreateComponent },
      { path: 'update/:id', component: BadgeUpdateComponent },
      { path: 'details/:id', component: BadgeViewComponent },   
  ],
  
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadgeRoutingModule {
  
 }

export const routedComponents = [
   BadgeComponent,
];
