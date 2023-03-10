import { Component } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from '../../services/logger.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { CONSTANTES } from '../../../config/const.config';
import { FakeCvService } from '../services/fake-cv.service';
import { Title } from '@angular/platform-browser';
import { catchError, of, Observable, filter, map, shareReplay } from 'rxjs';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  providers: [
    {
      provide: CvService,
      useClass: CONSTANTES.env === 'DEV' ? FakeCvService : CvService,
    },
  ],
})
export class CvComponent {
  cvs: Cv[] = [];
  cvs$: Observable<Cv[]>;
  juniors$: Observable<Cv[]>;
  seniors$: Observable<Cv[]>;
  nbClickItem = 0;
  /*   selectedCv: Cv | null = null; */
  date = new Date();

  constructor(
    private logger: LoggerService,
    private toastr: ToastrService,
    private cvService: CvService,
    private title: Title
  ) {
    console.log(this.title.getTitle());
    this.title.setTitle('Liste des cvs');

    this.cvs$ = this.cvService.getCvs().pipe(
      /*       shareReplay(), */
      catchError((e) => {
        this.toastr.error(`
          Attention!! Les données sont fictives, problème avec le serveur.
          Veuillez contacter l'admin.`);
        return of(this.cvService.getFakeCvs());
      })
    );
    this.juniors$ = this.cvs$.pipe(
      map((cvs) => cvs.filter((cv) => cv.age < 40))
    );
    this.seniors$ = this.cvs$.pipe(
      map((cvs) => cvs.filter((cv) => cv.age >= 40))
    );
    this.cvService.selectCv$.subscribe(() => this.nbClickItem++);
  }
  /*   add() {
    let id = this.cvs.length;
    this.cvs = [
      ...this.cvs.map((actualCv) => ({ ...actualCv })),
      new Cv(id++, 'aymen', 'sellaouti', 'teacher', 'as.jpg', '1234', 40),
    ];
  } */
  /* refresh() {
    this.cvService.getCvs().subscribe({
      next: (cvs) => {
        this.cvs = cvs;
      },
      error: () => {
        this.cvs = this.cvService.getFakeCvs();
        this.toastr.error(`
          Attention!! Les données sont fictives, problème avec le serveur.
          Veuillez contacter l'admin.`);
      },
    });
  } */
}
