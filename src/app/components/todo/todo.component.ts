import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../../todo';

// Services
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo!: Todo;
  @Input() todos!: Todo[];
  @Input() somethingIsCompleted!:Function;

  @Output() callback: EventEmitter<any> = new EventEmitter();

  constructor(
    private _router: Router,
    private $todoService: TodoService
  ) { }

  ngOnInit(): void {
  }

  updateCompleted() {
    this.todo.completed = !this.todo.completed;
    this.$todoService.putTodos(this.todos);
    this.somethingIsCompleted();
  }
  
  updateTitle(): void {
    let title = this.todo.title.split(" ").join("-");
    this._router.navigateByUrl(`/update/${title}`)
  }
  
  deleteTodo(): void {
    this.todos = this.todos.filter(t => t.title != this.todo.title);
    this.$todoService.putTodos(this.todos);
    this.callback.emit();
    this.somethingIsCompleted();
  }
}
