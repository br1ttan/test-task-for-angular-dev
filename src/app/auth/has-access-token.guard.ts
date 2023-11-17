import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Logger } from '@core';

const log = new Logger('HasAccessTokenGuard');

@Injectable({
  providedIn: 'root',
})
export class HasAccessTokenGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const credentials = localStorage?.getItem('credentials');

    if (credentials) {
      return true;
    } else {
      log.debug('There is no token, redirecting and adding redirect url...');
      this.router.navigate(['/login'], { queryParams: { redirect: state.url }, replaceUrl: true });
      return false;
    }
  }
}
