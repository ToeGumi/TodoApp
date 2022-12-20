import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

// Services
import {TodoService} from 'src/app/services/todo.service';

// Interface
import {Todo} from 'src/app/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todos: Todo[] = [];
  cpTodos: Todo[] =[];
  loading: boolean = true;
  somethingIsCompleted: boolean = false;
  completedIsChecked: boolean = false;
  messages: string[] = [];
  listProps: object = {
    toggleCompletedTodo: (todo: Todo) => {
      todo.completed = !todo.completed;
      this.todoService.putTodo(todo.id, todo).subscribe(res => {
        console.log(res);
      });

      let todoIndex = this.todos.findIndex(to => to.id === todo.id);
      this.todos[todoIndex].completed = todo.completed;

      if (this.completedIsChecked) {
        this.cpTodos = this.todos.filter(todo => todo.completed);

        if (this.cpTodos.length === 0) {
          this.completedIsChecked = false;
          this.cpTodos = this.todos;
        }
      } else {
        this.somethingIsCompleted = this.todos.some(todo => todo.completed);

        if (!this.somethingIsCompleted) {
          this.completedIsChecked = false;
        }
      }
    },

    dblClickTitle: (todo: Todo) => {
      this._router
        .navigate([`/update/${todo.id}`])
        .then();
    },

    rmTodo: (todo: Todo) => {
      this.todoService.deleteTodo(todo.id).subscribe({
        next: (v) => console.log(v),
        error: (e) => console.log(e)
      })
      this.cpTodos = this.cpTodos.filter(tod => tod.id !== todo.id);
    }
  }

  constructor(
    private _router: Router,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService
      .getTodos()
      .subscribe({
        next: todos => {
          this.todos = todos;
          this.loading = false;
        },
        complete: () => {
          this.cpTodos = this.todos;
          this.somethingIsCompleted = this.todos.some(todo => todo.completed);
        }
      });
  }

  updateTitle(todo: Todo): void {
    this._router
      .navigateByUrl(`/update/${todo.id}`)
      .then(() => this.messages.push("title updated"))
  }

  clearAll(): void {
    this.todos
      .filter(todo => todo.completed)
      .forEach(todo => this.todoService.deleteTodo(todo.id).subscribe({
        next: value => console.log(value),
        error: err => console.log(err)
      }));

    this.todos = this.todos.filter(todo => !todo.completed);
    this.cpTodos = this.todos;
    if (this.completedIsChecked) {
      this.completedIsChecked = false;
      this.somethingIsCompleted = false;
    }
  }

  showCompletedTodos():void {
    if (!this.completedIsChecked) {
      this.cpTodos = this.todos;
    }
  }

}
