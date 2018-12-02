import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoryItem } from '../../categories';
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

  ngOnInit() {
    this.data.getDirectory().subscribe(res => {
      this.categories = res
    });
  }

  getCategoryItem(event: MouseEvent) {
    let item = event.target['innerHTML'].toLowerCase();
    item = item.replace(/\s/g, '');
    this.startLoading.emit(true);
    this.data.getPage(`${item}`).subscribe(res => {
      return this.showData.emit(res.toString());
    });
  }
}
