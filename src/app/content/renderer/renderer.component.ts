import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { RestService } from '../../rest.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.css']
})
export class RendererComponent implements OnInit {
  body: string;
  isLoading: boolean = false;
  // public body: string;
  constructor(private data: RestService) {
    this.data.newData$.subscribe(
      resp => {
        this.body = resp.toString();
      },
      err => {
        this.body = err;
      }
    );
    this.data.isLoading$.subscribe(bool => {
      this.isLoading = bool;
    })
  }
  ngOnInit() {
    this.data.getPage('home').subscribe(res => {
     this.data.emitPage(res.toString());
    })
  }
}
