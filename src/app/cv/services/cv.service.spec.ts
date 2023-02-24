import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { CvService } from './cv.service';
import { Cv } from '../model/cv';
import { API } from '../../../config/api.config';
import { HttpErrorResponse } from '@angular/common/http';

fdescribe('CvService', () => {
  let service: CvService;
  let http: HttpTestingController;
  let cvs: Cv[] = [];
  let cv: Cv;
  let error: HttpErrorResponse;
  const status = 404;
  const statusText = 'Cv not found';
  const progressEvent = new ProgressEvent('Cv Not Found');
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
    expect(cvs[0].id).toBe(
      1
    ); /* 5 Vérifier que toutes les requêtes ont été générées */
  });
  it('shuould find cv by id', () => {
    service.getCvById(1).subscribe({
      next: (cvResponse: Cv) => {
        cv = cvResponse;
      },
      /* complete: () => fail(), */
      error: (e: HttpErrorResponse) => fail(),
    });
    const req = http.expectOne(API.cv + 1);
    req.flush(cvs.find((actualCv) => actualCv.id == 1) ?? null);
    expect(cv).toBeTruthy();
    expect(cv.id).toBe(1);
    expect(cv.name).toBe('sellaouti');
    expect(req.request.method).toBe('GET');
  });
  it('shuould return 404 when cv dosnt exist', () => {
    service.getCvById(3).subscribe({
      next: () => fail(),
      complete: () => fail(),
      error: (e: HttpErrorResponse) => {
        error = e;
      },
    });
    const req = http.expectOne(API.cv + 3);
    expect(req.request.method).toBe('GET');
    req.error(progressEvent, { status, statusText });
    expect(error.status).toBe(status);
    expect(error.statusText).toBe(statusText);
  });
  it('shuould delete cv by id', () => {
    let deleteResponse: { count: number } = { count: 0 };
    service.deleteCvById(1).subscribe((response) => {
      deleteResponse = response;
    });
    const req = http.expectOne(API.cv + 1);

    expect(req.request.method).toBe('DELETE');

    req.flush({
      count: cvs.length - cvs.filter((cv) => cv.id == 1).length,
    });
    expect(deleteResponse?.count).toBe(1);
  });
  // todo : A valider la bonne utilisation
  /* 5 Vérifier que toutes les requêtes ont été gérées */
  afterEach(() => http.verify());
});
