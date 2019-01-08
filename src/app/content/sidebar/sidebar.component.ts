import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoryItem } from './categories';
import { RestService } from '../../rest.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public categories: Observable<CategoryItem[]> = this.data.categories$;
  // private collapsed: boolean = false;
  // private selectedItem: string = null
  // private is_local: boolean = this.data.API === 'http://localhost:3001';

  constructor(private data: RestService) {
    this.categories.subscribe();
  }
  ngOnInit() {

  }

  getCategoryItem(categoryUrl: string) {
    this.selectedItem = categoryUrl;
    this.data.getPage(`${categoryUrl}`).subscribe(res => {
      this.data.emitPage(res.toString());
    });
  }
}
