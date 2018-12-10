import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RestService } from './rest.service';
// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import { first, subscribeOn } from 'rxjs/operators'
@Injectable()
export class catResolver implements Resolve<Observable<any>> {
  constructor(
    private data: RestService
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let subcategory = route.paramMap.get('subcategory');
    if (subcategory === null) {
      return this.data.getPage('home').subscribe(res => {
        this.data.emitPage(res.toString());
      })
    }
    return this.data.getPage(subcategory).pipe(first())
  }
}
