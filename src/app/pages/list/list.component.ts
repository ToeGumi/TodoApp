import { Component, OnInit } from '@angular/core';

// Services
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
  
  nothingIsComplete?: boolean;
  completedIsChecked: boolean = false;

  selectedTodo!: Todo;
  selectedIndex?: number;
  isSelected?: boolean;


  constructor(
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.getTodos();
    this.nothingIsComplete = !this.todos.some(todo => todo.completed);
  }

  getTodos(): void {
    this.todos = this.todoService.getTodos()
  }

  clearAll(): void {
    let filteredTodos = this.todos.filter(todo => !todo.completed);
    this.todoService.putTodos(filteredTodos);
    this.getTodos();
  }

  somethingIsCompleted = () => {
    this.nothingIsComplete = !this.todos.some(todo => todo.completed);
  }
}
