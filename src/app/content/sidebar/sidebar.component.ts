import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoryItem } from './categories';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private data: RestService) {}
  public categories: CategoryItem[];
  private collapsed: boolean = false;
  private selectedItem: string = null
  private is_local: boolean = this.data.API === 'http://localhost:3001';

  ngOnInit() {
    this.data.getDirectory().subscribe(res => {
      if (this.is_local === true) {
        console.log(res)
      }
      this.categories = res.categories
    });
  }

  getCategoryItem(categoryUrl: string) {
    console.log(categoryUrl)
    this.selectedItem = categoryUrl;
    this.data.getPage(`${categoryUrl}`).subscribe(res => {
      this.data.emitPage(res.toString());
    });
  }
}
