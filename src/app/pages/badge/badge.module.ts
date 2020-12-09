import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BadgeComponent } from '../badge/badge.component';
import { BadgeUpdateComponent } from './badge-update/badge-update.component';
import { BadgeCreateComponent } from './badge-create/badge-create.component';
import { BadgeViewComponent } from './badge-view/badge-view.component';
import { BadgeListComponent } from './badge-list/badge-list.component';
import { AgmCoreModule } from '@agm/core';
import {NbToggleModule} from '@nebular/theme';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,  NbListModule,
  NbIconModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule } from '@angular/forms';

import { BadgeRoutingModule } from './badge-routing.module';
import { from } from 'rxjs';


@NgModule({
 
  declarations: [BadgeUpdateComponent, BadgeCreateComponent, BadgeViewComponent, BadgeListComponent, BadgeComponent],
  imports: [
    NgMultiSelectDropDownModule,
    NbToggleModule,
    BadgeRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    ThemeModule,
    FormsModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NgxEchartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA8kDy8esoKflngRMg5xF1iytwF_ad1YM0',
      libraries: ['places']
    })
  ]
})
export class BadgeModule { }
