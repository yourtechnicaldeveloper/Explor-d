import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatagoriesComponent } from './catagories.component';
import { CategoryListComponent } from '../catagories/category-list/category-list.component';
import { CategoryDetailsComponent } from '../catagories/category-details/category-details.component';
import { UpdateCategoryComponent } from '../catagories/update-category/update-category.component';
import { CreateCategoryComponent } from '../catagories/create-category/create-category.component';
import { AuthGuard } from 'app/core_auth/auth/auth.guard';


const routes: Routes = [{
  path: '',
  component: CatagoriesComponent,
  children: [
      { path: 'category-list', component: CategoryListComponent},
      { path: 'add', component: CreateCategoryComponent},
      { path: 'update/:id', component: UpdateCategoryComponent},
      { path: 'details/:id', component: CategoryDetailsComponent},   
  ],
  
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatagoriesRoutingModule {
  
 }

export const routedComponents = [
   CatagoriesComponent,
];
