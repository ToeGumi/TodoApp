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
  id!: string;
  updateForm: any;

    constructor(
      private _activatedRoute: ActivatedRoute,
      private _route: Router,
      private todoService$: TodoService,
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
    
    this.id = this._activatedRoute.snapshot.paramMap.get("id")!; // ! non-null assertion
  }

  get title() { return this.updateForm.get('title') }

  getTodo(): void {
    
    this.todoService$.getTodo(this.id).subscribe(todo => this.todo = todo);
  }

  updateTitle() {
    if (this.title.valid) {
      this.todoService$.putTodo(this.id, this.todo);
      this._route.navigateByUrl('/');
    } else {
      console.log("Invalid!");
    }
  }
}
