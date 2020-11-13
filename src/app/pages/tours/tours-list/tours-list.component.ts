import { Component, OnInit } from '@angular/core';
import { RestService } from 'app/core_auth/services/rest.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'ngx-tours-list',
  templateUrl: './tours-list.component.html',
  styleUrls: ['./tours-list.component.scss']
})
export class ToursListComponent implements OnInit {
  tours = null;
  email : string;
  constructor(private restService: RestService) { }

  ngOnInit(){
    this.reloadData();
  }
  
  reloadData() {
    this.restService.get("/tours/list").subscribe((data) => {
      this.tours = data.data;
    }, (error) => {
      console.log(error)
    });
  }

  deleteTour(id: string) {
    const tour = this.tours.find(x => x.id === id);
    return this.tours.delete(id)
        .pipe(first())
        .subscribe(() => this.tours = this.tours.filter(x => x.id !== id));
  }
  
}
