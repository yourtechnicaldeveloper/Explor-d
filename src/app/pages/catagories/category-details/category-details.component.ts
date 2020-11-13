import { Component, OnInit } from '@angular/core';
import { RestService } from 'app/core_auth/services/rest.service';
import { CategoryListComponent } from '../category-list/category-list.component'; 
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'ngx-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {

  constructor(private restService: RestService, private router: Router) { }

  categories: any [];

  ngOnInit() {

    this.restService.get("/category/categoryList").subscribe((data) => {
      this.categories = data.data;
    }, (error) => {
      console.log(error)
    });

  }
  list(){
    this.router.navigate(['categories/category-list']);
  }

}
