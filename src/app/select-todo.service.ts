import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class SelectTodoService {

  public todoTitle: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor() { }

}
