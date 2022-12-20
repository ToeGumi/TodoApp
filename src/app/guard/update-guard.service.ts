import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, UrlTree } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateGuardService implements CanActivate {

  private id = new BehaviorSubject('');
  currentId = this.id.asObservable();

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let id = route.params['id?'];

    if (id) {
      this.updateId(id);
      return true;
    } else {
      return false;
    }
  }

  updateId(value: string) {
    this.id.next(value);
  }
}
