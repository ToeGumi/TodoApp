import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from 'src/app/todo.service';

// Interface
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todos: Todo[] = [];
  nothingIsCheck: boolean = this.todos.some(todo => todo.completed);
  completedIsChecked: boolean = false;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todos = this.todoService.getTodos()
  }

  clearAll(): void {
    let filteredTodos = this.todos.filter(todo => todo.completed);
    this.todoService.putTodos(filteredTodos);
  }
}
