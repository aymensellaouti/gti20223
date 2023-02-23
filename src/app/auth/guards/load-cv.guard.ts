import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoadCvGuard implements CanLoad {
  constructor(
    private authService: AuthService
  ) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (segments.every(
      segment => segment.path != 'add'
    )) {
      return of(true);
    }
    return this.authService.isLoggedIn$;
  }
}
