import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CanLeaveTodoGuard } from './guards/can-leave-todo.guard';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: TodoComponent,
        canDeactivate: [CanLeaveTodoGuard],
      },
    ]),
  ],
  declarations: [TodoComponent],
  exports: [],
})
export class TodoModule {}
