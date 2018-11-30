import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient) {}
  API = 'http://localhost:3000';
  getPage(path: string){
    console.log(`${this.API}/${path}`)
    return this.http.get(`${this.API}/${path}`)
  }
}
