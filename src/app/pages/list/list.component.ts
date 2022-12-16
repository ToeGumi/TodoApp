import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  listProps:object = {
    toggleCompletedTodo: (todo: Todo) => {
      todo.completed = !todo.completed;
      this.todoService.putTodo(todo.id, todo).subscribe(res => {
        console.log(res);
      });
    },

    dblClickTitle: (todo: Todo) => {
      this._router.navigate([`/update/${todo.id}`]);
    },

    rmTodo: (todo: Todo) => {
      this.todoService.deleteTodo(todo.id).subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        },
        () => {
          this.getTodos();
        }
      )
    }
  }

  constructor(
    private _router: Router,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.getTodos();

    this.nothingIsComplete = !this.todos.some(todo => todo.completed);
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  updateTitle(todo: Todo): void {
    this._router.navigateByUrl(`/update/${todo.id}`)
  }

  clearAll(): void {
    let filteredTodos = this.todos.filter(todo => !todo.completed);
    // this.todoService.postTodos(filteredTodos);
  }

  somethingIsCompleted = () => {
    this.nothingIsComplete = !this.todos.some(todo => todo.completed);
  }

}
