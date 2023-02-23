import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AddCvComponent } from './add-cv/add-cv.component';
import { CvComponent } from './cv/cv.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';
import { ListCvComponent } from './list-cv/list-cv.component';
import { DetailCvResolver } from './resolvers/detail-cv.resolver';
import { ListResolver } from './resolvers/list.resolver';

const routes: Routes = [
  {
    path: '',
    component: CvComponent,
  },
  { path: 'add', component: AddCvComponent, canActivate: [AuthGuard] },
  {
    path: 'list',
    component: ListCvComponent,
    resolve: {
      cvs: ListResolver,
    },
    children: [
      {
        path: ':id',
        component: DetailsCvComponent,
        resolve: {
          cv: DetailCvResolver,
        },
      },
    ],
  },
  { path: ':id', component: DetailsCvComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvRoutingModule {}
