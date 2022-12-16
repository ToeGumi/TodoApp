import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  _todo!: Todo;
  @Input()
  set todo(todo: Todo) {
    this._todo = todo;
  }
  get todo(): Todo { return this._todo };
  @Input() props: any;
  
  // somethingIsCompleted!:Function;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  // updateCompleted() {
  //   this.todo.completed = !this.todo.completed;
  //   this.todoService$.putTodos(this.todo);
  //   this.somethingIsCompleted();
  // }

  

  // deleteTodo(): void {
  //   this.todos = this.todos.filter(t => t.title != this.todo.title);
  //   this.todoService$.putTodos(this.todos);
  //   this.callback.emit();
  //   this.somethingIsCompleted();
  // }
}
