import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToursListComponent } from './tours-list/tours-list.component';
import { ToursCreateComponent } from './tours-create/tours-create.component';
import { ToursUpdateComponent } from './tours-update/tours-update.component';
import { ToursComponent } from './tours.component';
import { AuthGuard } from 'app/core_auth/auth/auth.guard';


const routes: Routes = [{
  path: '',
  component: ToursComponent,
  children: [
      { path: 'tours-list', component: ToursListComponent, canActivate: [AuthGuard]  },
      { path: 'add', component: ToursCreateComponent, canActivate: [AuthGuard]  },
      { path: 'update', component: ToursUpdateComponent, canActivate: [AuthGuard]  },   
  ],
  
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToursRoutingModule {
  
 }

export const routedComponents = [
   ToursComponent,
];
