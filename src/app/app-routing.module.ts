import { NgModule } from '@angular/core';
import { RouterModule, Route, PreloadAllModules } from '@angular/router';
import { TodoComponent } from './todo/todo/todo.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { ColorComponent } from './components/color/color.component';
import { FrontComponent } from './templates/front/front.component';
import { AdminComponent } from './templates/admin/admin.component';
import { LoginComponent } from './auth/login/login.component';
import { NF404Component } from './components/nf404/nf404.component';
import { CanLeaveTodoGuard } from './todo/guards/can-leave-todo.guard';

const routes: Route[] = [
  /* cv */
  /*   { path: '', redirectTo: 'cv', pathMatch: 'full' }, */
  { path: 'login', component: LoginComponent },
  { 
    path: 'cv',
    loadChildren: () => import('./cv/cv.module').then(m => m.CvModule)
  },
  {
    path: '',
    component: FrontComponent,
    children: [
      {
        path: 'todo',
        component: TodoComponent,
        canDeactivate: [CanLeaveTodoGuard],
      },
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
    RouterModule.forRoot(
      routes /* , {
      enableTracing: true,
    } */
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
