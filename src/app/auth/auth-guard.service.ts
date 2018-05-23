import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { AuthService } from './auth.service'

@Injectable()

export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService) { }

  /**
   * CanActivate methode guard
   * @param {ActivatedRouteSnapshot} route [description]
   * @param {RouterStateSnapshot}    state [description]
   */

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    return this.authService.isAuthenticated();
  }
}
