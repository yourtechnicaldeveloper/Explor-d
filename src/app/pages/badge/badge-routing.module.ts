import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BadgeUpdateComponent } from './badge-update/badge-update.component';
import { BadgeCreateComponent } from './badge-create/badge-create.component';
import { BadgeViewComponent } from './badge-view/badge-view.component';
import { BadgeListComponent } from './badge-list/badge-list.component';
import { BadgeComponent } from './badge.component';
import { AuthGuard } from 'app/core_auth/auth/auth.guard';


const routes: Routes = [{
  path: '',
  component: BadgeComponent,
  children: [
      { path: 'badge-list', component: BadgeListComponent, canActivate: [AuthGuard] },
      { path: 'add', component: BadgeCreateComponent, canActivate: [AuthGuard] },
      { path: 'update/:id', component: BadgeUpdateComponent, canActivate: [AuthGuard] },
      { path: 'details/:id', component: BadgeViewComponent, canActivate: [AuthGuard] },   
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
