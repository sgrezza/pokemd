import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryItem } from './categories'
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient) {}
  API = `http://${environment.api}:3000`
  getPage(path: string){
    return this.http.get(`${this.API}/${path}`)
  }
  getDirectory(): Observable<any> {
   return this.http.get(`${this.API}`);
  }
}
