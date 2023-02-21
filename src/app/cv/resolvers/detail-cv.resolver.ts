import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Cv } from '../model/cv';
import { CvService } from './../services/cv.service';

@Injectable({
  providedIn: 'root',
})
export class DetailCvResolver implements Resolve<Observable<Cv>> {
  constructor(private cvService: CvService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Cv> {
    return this.cvService.getCvById(route.params['id']);
  }
}
