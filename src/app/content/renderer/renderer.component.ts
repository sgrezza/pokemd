import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { RestService } from '../../rest.service';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.css']
})
export class RendererComponent implements OnInit {
  body: Observable<string> = this.data.newData$;
  isLoading: boolean = false;
  // public body: string;
  constructor(private data: RestService) {
    this.data.newData$.subscribe();
    this.data.isLoading$.subscribe(bool => {
      this.isLoading = bool;
    })
  }
  ngOnInit() {
    this.data.getPage('home').subscribe(res => {
     this.data.emitPage(res);
    })
  }
}
