import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { CvService } from './cv.service';
import { Cv } from '../model/cv';
import { API } from '../../../config/api.config';

fdescribe('CvService', () => {
  let service: CvService;
  let http: HttpTestingController;
  let cvs: Cv[] = [];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CvService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return all cvs', () => {
    /* 1  Appelez la méthode testée qui envoie des requêtes HTTP. */
    service.getCvs().subscribe((listCvs) => (cvs = listCvs));
    /* 2 Récupérer les requêtes en attente  */
    const req = http.expectOne(API.cv);
    /* 3 Répondre à ces requêtes avec de fausses données. */
    req.flush(service.getFakeCvs());
    /* 4 Vérifier le résultat de l'appel de méthode */
    expect(cvs).toBeTruthy();
    expect(cvs.length).toBe(2);
    expect(cvs[0].id).toBe(1);    /* 5 Vérifier que toutes les requêtes ont été générées */
  });
  it('should return cv By Id', () => {
    /* 1  Appelez la méthode testée qui envoie des requêtes HTTP. */
    /* 2 Récupérer les requêtes en attente  */
    /* 3 Répondre à ces requêtes avec de fausses données. */
    /* 4 Vérifier le résultat de l'appel de méthode */
    /* 5 Vérifier que toutes les requêtes ont été générées */
  });
});
