import { Component, OnInit } from '@angular/core';

// Services
import { TodoService } from 'src/app/todo.service';
import { SelectTodoService } from 'src/app/select-todo.service';

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
  isSelected: boolean = false;
  selectedIndex: number = -1;

  constructor(
    private todoService: TodoService,
    private selectTodoService: SelectTodoService
  ) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todos = this.todoService.getTodos()
  }

  clearAll(): void {
    let filteredTodos = this.todos.filter(todo => !todo.completed);
    this.todoService.putTodos(filteredTodos);
    this.getTodos();
  }

  selectTodo(todo: Todo, index: number) {
    let todoTitle = "";
    this.selectTodoService.todoTitle.subscribe(value => todoTitle = value );
    
    if (todoTitle === "") {
      this.selectTodoService.todoTitle.next(todo.title);
      this.isSelected = !this.isSelected;
      this.selectedIndex = index;
    } else if (index >= 0 && this.selectedIndex != index) {
      this.selectTodoService.todoTitle.next(todo.title);
      this.isSelected = !this.isSelected;
      this.selectedIndex = index;
    } else {
      this.selectTodoService.todoTitle.next("");
      this.isSelected = !this.isSelected;
      this.selectedIndex = -1;
    }
  }
}
