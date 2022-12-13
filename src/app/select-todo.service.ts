import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class SelectTodoService {

  public selectedTodo: BehaviorSubject<Todo> = new BehaviorSubject<Todo>({
    title: '',
    completed: false
  });

  constructor() { }

}
