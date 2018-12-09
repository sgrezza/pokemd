import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoryItem } from './categories';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  // Emits when api call returns. Content component is listening.
  @Output() showData: EventEmitter<string> = new EventEmitter<string>();
  @Output() startLoading: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private data: RestService) {}
  public categories: CategoryItem[];
  private collapsed: boolean = false;
  private selectedItem: Element = null
  private is_local: boolean = this.data.API === 'http://localhost:3001';

  ngOnInit() {
    this.data.getDirectory().subscribe(res => {
      if (this.is_local === true) {
        console.log(res)
      }
      this.categories = res
    });
  }

  trackById(id) {
    console.log(id);
  }
  selectSub(subcat: Element) {
    
  }
  getCategoryItem(event: MouseEvent, categoryIndex: number, index: number) {
    console.log(event, index)
    this.selectedItem = event.toElement;

    let item = event.target['innerHTML'].toLowerCase();
    item = item.replace(/\s/g, '');
    this.startLoading.emit(true);
    this.data.getPage(`${item}`).subscribe(res => {
      if (this.is_local === true) {
        console.log(res)
      }
      return this.showData.emit(res.toString());
    });
  }
}
