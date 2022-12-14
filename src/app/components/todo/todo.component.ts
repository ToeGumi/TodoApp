import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../todo';

// Services
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()
  get todo(): Todo { return this._todo };
  set todo(todo: Todo) {
    this._todo = todo;
  }
  private _todo!: Todo;
  toggleCompletedTodo?: ()=>void;
  dblClickTitle?: ()=>void;
  deleteTodo?: (todo: Todo)=>void;
  // somethingIsCompleted!:Function;

  constructor(
    private todoService$: TodoService
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
