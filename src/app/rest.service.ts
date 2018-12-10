import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';
import { CategoryItem } from './content/sidebar/categories';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

import { Subject } from 'rxjs';
// import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient) {}
  public API = environment.api;
  // Subjects becuause a regular Observable can only have one listener at a time.
  subcategoryData = new Subject<string>();
  isLoading = new Subject<boolean>();
  
  isLoading$ = this.isLoading.asObservable();
  newData$ = this.subcategoryData.asObservable();

  private getEventMessage(event: HttpEvent<any>, file: File) {
    switch (event.type) {
      case HttpEventType.Sent:
        return `Uploading file "${file.name}" of size ${file.size}.`;

      case HttpEventType.UploadProgress:
        // Compute and show the % done:
        const percentDone = Math.round((100 * event.loaded) / event.total);
        return `File "${file.name}" is ${percentDone}% uploaded.`;

      case HttpEventType.Response:
        return `File "${file.name}" was completely uploaded!`;

      default:
        return `File "${file.name}" surprising upload event: ${event.type}.`;
    }
  }
  emitPage(pageData: string) {
    this.isLoading.next(false);
    this.subcategoryData.next(pageData);
  }

  getPage(path: string) {
    this.isLoading.next(true)
    return this.http.get(`${this.API}/${path}`)
  }

  getDirectory(): Observable<any> {
    return this.http.get(`${this.API}`);
  }
}
