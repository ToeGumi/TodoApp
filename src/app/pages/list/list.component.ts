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
  
  nothingIsCheck?: boolean;
  completedIsChecked: boolean = false;

  selectedTodo!: Todo;
  selectedIndex?: number;
  isSelected?: boolean;


  constructor(
    private todoService: TodoService,
    private selectTodoService: SelectTodoService
  ) {}

  ngOnInit(): void {
    this.getTodos();
    this.selectTodoService.selectedTodo.subscribe(todo => {
      this.selectedTodo = todo;
      this.selectedIndex = this.todos.findIndex(todo => todo.title == this.selectedTodo.title);
    });
    this.nothingIsCheck = this.todos.some(todo => !todo.completed); 
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
    if (this.selectedTodo.title === "") {
      this.selectTodoService.selectedTodo.next(todo);
      this.isSelected = !this.isSelected;
      this.selectedIndex = index;
    } else if (index >= 0 && this.selectedIndex != index) {
      this.selectTodoService.selectedTodo.next(todo);
      this.isSelected = !this.isSelected;
      this.selectedIndex = index;
    } else {
      this.selectTodoService.selectedTodo.next({
        title: '',
        completed: false
      });
      this.isSelected = !this.isSelected;
    }
  }
}
