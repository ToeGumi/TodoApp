import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../todo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo?: Todo;

  @Output() onSuggest: EventEmitter<any> = new EventEmitter();

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
  }

  updateTodo(todo: Todo): void {
    console.log("update")
  }

  deleteTodo(todo: Todo): void {
    let todos: Todo[] = this.todoService.getTodos();
    todos = todos.filter(t => t.title != todo.title);
    this.todoService.putTodos(todos);
    this.onSuggest.emit();
  }
}
