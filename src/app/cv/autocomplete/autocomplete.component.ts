import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Observable, debounceTime, fromEvent, switchMap, tap } from 'rxjs';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
})
export class AutocompleteComponent implements OnInit {
  search = '';
  cvs$!: Observable<Cv[]>;
  @ViewChild('searchInput', { static: true }) input!: ElementRef;
  constructor(
    private cvService: CvService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    /* this.cvService.selectCv$.subscribe((cv) => {
      this.router.navigate([cv.id], { relativeTo: this.activatedRoute });
    }); */
    this.cvs$ = fromEvent(this.input.nativeElement, 'keyup').pipe(
      tap(() => console.log(this.search)),
      switchMap(() => this.cvService.getCvsByName(this.search))
    );
  }
  navigate(cv: Cv) {
    this.router.navigate([cv.id], { relativeTo: this.activatedRoute });
  }
}
