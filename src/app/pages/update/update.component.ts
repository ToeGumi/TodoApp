import { Component, OnInit, ElementRef } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/todo';

import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  todos!: Todo[];
  todo!: Todo;

    constructor(
      private _activatedRoute: ActivatedRoute,
      private _route: Router,
      private $todoService: TodoService,
      private elementRef: ElementRef
    ) { }

  ngOnInit(): void {
    this.getTodo();
    this.elementRef.nativeElement.querySelector('input').focus();
  }

  getTodo(): void {
    let title = this._activatedRoute.snapshot.paramMap.get("title")!.split("-").join(" ");
    this.todos = this.$todoService.getTodos();
    this.todo = this.todos.find(todo => todo.title = title)!;
  }

  updateTitle() {
    if (this.todo.title !== "") {
      this.$todoService.putTodos(this.todos);
      this._route.navigateByUrl('/');
    } else { // Delete todo if it's empty
      this.$todoService.putTodos(
        this.todos
          .filter(todo => todo.title !== "")
      );
      this._route.navigateByUrl('/');
    }
  }
}
