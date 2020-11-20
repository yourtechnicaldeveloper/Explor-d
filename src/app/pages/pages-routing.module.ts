import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { UserListComponent } from './user-list/user-list.component';
import { AuthGuard } from 'app/core_auth/auth/auth.guard';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  canActivate:[AuthGuard],
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
        
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'categories',
      loadChildren: () => import('./catagories/catagories.module')
        .then(m => m.CatagoriesModule),
        canActivate:[AuthGuard]
    },
    {
      path: 'tours',
      loadChildren: () => import('./tours/tours.module')
        .then(m => m.ToursModule),
        canActivate:[AuthGuard]
    },
    {
      path: 'badge',
      loadChildren: () => import('./badge/badge.module')
        .then(m => m.BadgeModule),
        canActivate:[AuthGuard]
    },
    {
      path: 'user',
      component: UserListComponent,
      canActivate:[AuthGuard]
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
      canActivate:[AuthGuard]
    },
    {
      path: '**',
      component: NotFoundComponent,
      canActivate:[AuthGuard]
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
