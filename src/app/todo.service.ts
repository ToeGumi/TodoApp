import { Injectable } from '@angular/core';

import { Todo } from './todo';
import { TODOS } from './mock-todos';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(): Todo[] {
    return TODOS;
  }

  pushTodo(todo: Todo): void {
    TODOS.unshift(todo);
  }
  
}
