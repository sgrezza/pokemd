import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Categories, CategoryItem } from './categories';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() showData: EventEmitter<string> = new EventEmitter<string>();

  constructor(private data: RestService) {}
  public categories: CategoryItem[];

  ngOnInit() {
    this.categories = Categories;
    console.log(this.categories);
  }

  getCategoryItem(event: MouseEvent) {
    let item = event.target['innerHTML'].toLowerCase()
    item = item.replace(/\s/g, '');
    this.data.getPage(`${item}`).subscribe(res => {
      console.log(res);
      return this.showData.emit(res.toString());
    });
  }
}
