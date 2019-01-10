import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Observable } from 'rxjs';
import { CategoryItem } from '../categories';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private data: RestService) {
    this.data.categories$.subscribe( resp => this.categories = resp);
  }
 // Need to make an array of all the subcategory names. Then filter them based on the search input
  public categories: CategoryItem[];
  doit(value) {
   let asdf = this.categories.filter((category:CategoryItem) => {
     console.log(category);
     category.name.includes(value);
   })
   console.log(asdf)
  };
  ngOnInit() {}
}
