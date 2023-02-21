import { NgModule } from '@angular/core';
import { RouterModule, Route, PreloadAllModules } from '@angular/router';
import { TodoComponent } from './todo/todo/todo.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { ColorComponent } from './components/color/color.component';
import { FrontComponent } from './templates/front/front.component';
import { AdminComponent } from './templates/admin/admin.component';
import { LoginComponent } from './auth/login/login.component';
import { NF404Component } from './components/nf404/nf404.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { CvComponent } from './cv/cv/cv.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { ListCvComponent } from './cv/list-cv/list-cv.component';
import { ListResolver } from './cv/resolvers/list.resolver';
import { DetailCvResolver } from './cv/resolvers/detail-cv.resolver';

const routes: Route[] = [
  /* cv */
  /*   { path: '', redirectTo: 'cv', pathMatch: 'full' }, */
  { path: 'login', component: LoginComponent },
  {
    path: 'cv',
    component: CvComponent,
  },
  { path: 'cv/add', component: AddCvComponent, canActivate: [AuthGuard] },
  {
    path: 'cv/list',
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
  { path: 'cv/:id', component: DetailsCvComponent },
  {
    path: '',
    component: FrontComponent,
    children: [
      { path: 'todo', component: TodoComponent },
      { path: 'word', component: MiniWordComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [{ path: 'color/:defaultColor', component: ColorComponent }],
  },
  /*   { path: ':quelqueChose', component: SecondComponent }, */
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
