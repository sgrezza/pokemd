import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../../rest.service';
// import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.css']
})
export class RendererComponent implements OnInit {
  @Input() body: string;
  @Input() isLoading: boolean = false;

  constructor(private data: RestService) { 
    // route.data.subscribe(data => this.body = data['body'])
  }

  ngOnInit() {
    this.data.getPage('home').subscribe(res => {
      this.body = res.toString();
    });
  }

}
