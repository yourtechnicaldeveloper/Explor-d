import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { CatagoriesComponent } from '../catagories/catagories.component';
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
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { CatagoriesRoutingModule } from './catagories-routing.module';


@NgModule({
 
  declarations: [CreateCategoryComponent, CategoryDetailsComponent, CategoryListComponent, UpdateCategoryComponent, CatagoriesComponent],
  imports: [
    CatagoriesRoutingModule,
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
  ]
})
export class CatagoriesModule { }
