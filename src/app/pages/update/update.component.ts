import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Todo } from 'src/app/todo';
import { TodoService } from 'src/app/todo.service';

// Validators
import { noDuplicated } from 'src/app/validators/no-duplicated.validator';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  todos!: Todo[];
  todo!: Todo;

  updateForm: any;

    constructor(
      private _activatedRoute: ActivatedRoute,
      private _route: Router,
      private $todoService: TodoService,
      private elementRef: ElementRef
    ) { }

  ngOnInit(): void {
    this.getTodo();
    this.elementRef.nativeElement.querySelector('input').focus();
    this.updateForm = new FormGroup({
      title: new FormControl(this.todo.title, [
        Validators.pattern(/^[^-\s][a-zA-Z0-9_\s-]+$/),
        noDuplicated(this.todos.filter(todo => todo != this.todo))
      ])
    });
  }

  get title() { return this.updateForm.get('title') }

  getTodo(): void {
    let title = this._activatedRoute.snapshot.paramMap.get("title")!.split("-").join(" ");
    this.todos = this.$todoService.getTodos();
    this.todo = this.todos.find(todo => todo.title === title)!;
  }

  updateTitle() {
    if (this.title.valid) {
      this.$todoService.putTodos(this.todos);
      this._route.navigateByUrl('/');
    } else {
      console.log("Invalid!");
    }
  }
}
