import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core_auth/auth/auth.guard';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { FAQComponent } from './faq/faq.component';

export const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'login', component: LoginComponent,
  },
  { 
    path: 'privacy-policy', component: PrivacyPolicyComponent,
  },
  { 
    path: 'faq', component: FAQComponent,
  },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
