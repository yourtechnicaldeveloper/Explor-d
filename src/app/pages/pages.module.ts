import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { ThemeModule } from '../@theme/theme.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DashboardComponent } from './dashboard/dashboard.component';




@NgModule({
  imports: [
    Ng2SearchPipeModule,
    FormsModule , 
    ReactiveFormsModule,
    NbChatModule,
    NbDatepickerModule,
    NbDialogModule,
    NbMenuModule,
    NbSidebarModule,
    NbToastrModule,
    NbWindowModule,
    ThemeModule,
    PagesRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    PagesComponent,
    UserListComponent,
    DashboardComponent,
  ],
 
})
export class PagesModule {

}
