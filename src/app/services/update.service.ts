import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import {Todo} from "../todo";

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  private todos:BehaviorSubject<any> = new BehaviorSubject([]);
  currentTodos = this.todos.asObservable();

  private successMessage = new BehaviorSubject("");
  currentSuccessMessage = this.successMessage.asObservable();

  constructor() { }

  updateTodos(todos: Todo[]) {
    this.todos.next(todos);
  }

  updateSuccessMessage(value: string) {
    this.successMessage.next(value);
  }
}
