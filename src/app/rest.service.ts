import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';
import { CategoryItem } from './categories';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient) {}
  API = environment.api;

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
  getPage(path: string) {

      return this.http.get(`${this.API}/${path}`)

    // const req = new HttpRequest('GET', `${this.API}/${path}`, {
    //   reportProgress: true
    // });
    // return this.http.request(req).pipe(map(event => this.getEventMessage(event, file)));
  }
  getDirectory(): Observable<any> {
    return this.http.get(`${this.API}`);
  }
}
