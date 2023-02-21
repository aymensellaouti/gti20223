import { Component } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from '../../services/logger.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { CONSTANTES } from '../../../config/const.config';
import { FakeCvService } from '../services/fake-cv.service';
import { Title } from '@angular/platform-browser';
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
    this.logger.logger('je suis le cvComponent');
    this.toastr.info('Bienvenu dans notre CvTech');
    this.cvService.selectCv$.subscribe(() => this.nbClickItem++);
  }
  add() {
    let id = this.cvs.length;
    this.cvs = [
      ...this.cvs.map((actualCv) => ({ ...actualCv })),
      new Cv(id++, 'aymen', 'sellaouti', 'teacher', 'as.jpg', '1234', 40),
    ];
  }
  refresh() {
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
  }
}
