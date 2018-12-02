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
  htmlData: string;
  ngOnInit() {
    // this.data.getPage('actionpoints').subscribe(res => {
    //   return this.htmlData = res.toString();
    // });
  }
  onNewData(data:string){
    this.htmlData = data;
  }
}
