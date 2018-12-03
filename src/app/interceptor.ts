// import { Injectable } from '@angular/core';
// import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { RestService } from './rest.service';
// import {environment} from '../environments/environment'
// @Injectable()
// export class Interceptor implements HttpInterceptor {
// constructor(private data: RestService) {}
// private API = environment.api
// intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//   console.log("Intercepted Request", req);
//   return this.data.getPage(`${this.API}`).subscribe();
// }
