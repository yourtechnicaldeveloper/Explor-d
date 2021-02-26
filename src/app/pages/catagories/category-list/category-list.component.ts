import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { RestService } from 'app/core_auth/services/rest.service';
import { Location } from '@angular/common';
@Component({
  selector: 'ngx-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  category: any;
    
  constructor(private restService: RestService) { }

  categories: any [];

  ngOnInit() {

    
    this.reloadData();
  }
  reloadData() {
    this.restService.get("/category/categoryList").subscribe((data) => {
      this.categories = data.data;
    }, (error) => {
      alert(error['error']['meta']['msg']);
    });
  }
  deleteCategory(id: string) {
    const tour = this.category.find(x => x.id === id);
    return this.category.delete(id)
        .pipe(first())
        .subscribe(() => this.categories = this.categories.filter(x => x.id !== id));
  }
  
  
}
