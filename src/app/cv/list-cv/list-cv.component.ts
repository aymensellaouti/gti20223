import { Component } from '@angular/core';
import { CvService } from './../services/cv.service';
import { Cv } from '../model/cv';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css'],
})
export class ListCvComponent {
  cvs: Cv[] = [];
  constructor(
    private cvService: CvService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    /* this.cvService.getCvs().subscribe((cvs) => {
      this.cvs = cvs;
    }); */
    this.cvs = this.activatedRoute.snapshot.data['cvs'];
    this.cvService.selectCv$.subscribe((cv) => {
      this.router.navigate([cv.id], { relativeTo: this.activatedRoute });
    });
  }
}
