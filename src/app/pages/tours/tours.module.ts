import { NgModule } from '@angular/core';
import { ToursListComponent } from './tours-list/tours-list.component';
import { ToursCreateComponent } from './tours-create/tours-create.component';
import { ToursUpdateComponent } from './tours-update/tours-update.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule } from '@angular/forms';

import { ToursRoutingModule } from './tours-routing.module';
import { ToursComponent } from './tours.component';
import { from } from 'rxjs';
import { AgmCoreModule } from '@agm/core';
import { ToursDetailComponent } from './tours-detail/tours-detail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AngMusicPlayerModule } from  'ang-music-player';

import { NgSelectModule } from '@ng-select/ng-select';
import {  RxReactiveFormsModule } from "@rxweb/reactive-form-validators"


@NgModule({
  declarations: [ToursListComponent, ToursCreateComponent, ToursUpdateComponent, ToursComponent, ToursDetailComponent],
  imports: [
    RxReactiveFormsModule,
    NgSelectModule,
    AngMusicPlayerModule,
    Ng2SearchPipeModule,
    ToursRoutingModule,
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
export class ToursModule { }
