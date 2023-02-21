import { Component, Inject, inject } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../service/todo.service';
import { UUID_PROVIDER } from '../../providerTokens/uuid.provider-token';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [],
})
export class TodoComponent {
  todos: Todo[] = [];
  todo: Todo;
  uuid: () => string = inject<() => string>(UUID_PROVIDER);
  constructor(
    private todoService: TodoService,
   /*  @Inject(UUID_PROVIDER) private uuid: () => string */
  ) {
    this.todos = this.todoService.getTodos();
    this.todo = new Todo();
    this.todo.id = this.uuid();
  }
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
    this.todo.id = this.uuid();
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
