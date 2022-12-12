import { Injectable } from '@angular/core';

import { Todo } from './todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  STORAGE_ID = 'todos';

  constructor() { }

  getTodos(): Todo[] {
    return JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]');
  }

  putTodos(todos: Todo[]) {
    localStorage.setItem(this.STORAGE_ID, JSON.stringify(todos));
  }
  
}
