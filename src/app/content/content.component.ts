import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(
    private data: RestService
  ) { }

  public htmlData: string;
  public isLoading: boolean = false;
  ngOnInit() {
    // this.data.getPage('actionpoints').subscribe(res => {
    //   return this.htmlData = res.toString();
    // });
  }
  // Listens for 
  startLoading(bool: boolean) {
    this.isLoading = bool
  }
  onNewData(data:string) {
    this.isLoading = false;
    this.htmlData = data;
  }
}
