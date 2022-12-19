import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class HasRoleGuard implements CanActivate {
  constructor(private loginservice: LoginService) {}
  token:any;
  userData:any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.token = localStorage.getItem('isLoggedin');
    this.userData=jwt_decode(this.token);
    const isAuthorized = this.userData.Role.includes(route.data.role);

    if (!isAuthorized) {
      // redirect
      // display a message
      window.alert('you are not authorized');
    }

    return isAuthorized || false;
  }
}


