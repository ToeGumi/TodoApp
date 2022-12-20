import {Component, OnInit, ElementRef} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router, NavigationStart, Event} from '@angular/router';

import {Todo} from 'src/app/todo';
import {TodoService} from 'src/app/services/todo.service';
import {UpdateService} from "../../services/update.service";
import {UpdateGuardService} from "../../guard/update-guard.service";
// Validators
import {noDuplicated} from 'src/app/validators/no-duplicated.validator';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  todos!: Todo[];
  todo: Todo = {
    id: "",
    title: "",
    completed: false
  };
  id: string = "";
  updateForm: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _route: Router,
    private todoService$: TodoService,
    private elementRef: ElementRef,
    private updateService$: UpdateService,
    private updateGuard$: UpdateGuardService
  ) {
  }

  ngOnInit(): void {
    this.updateService$.currentTodos.subscribe(todo => {
      this.todos = todo;
    })
    this.id = this._activatedRoute.snapshot.params['id?'];
    // @ts-ignore
    this.todo = this.todos.find(todo => todo.id == this.id);
    if (!this.todo) this._route.navigate(['/']).then();

    this.updateForm = new FormGroup({
      title: new FormControl(this.todo?.title, [
        Validators.pattern(/^[^-\s\d].*/),
        noDuplicated(this.todos.filter(todo => todo != this.todo))
      ])
    });
    this.elementRef.nativeElement.querySelector('input').focus();

    this._route.events
      .subscribe({
        next: event => {
          if (event instanceof NavigationStart) {
            this.updateGuard$.updateId("");
          }
        }
      })
  }

  get title() {
    return this.updateForm.get('title')
  }

  updateTitle() {
    if (this.title.valid) {
      this.todoService$.putTodo(this.id, this.todo).subscribe({
        next: value => this.updateService$.updateSuccessMessage(value.title + " updated!"),
        error: err => console.log(err),
        complete: () => this._route.navigate(['/']).then()
      })
    } else {
      console.log("Invalid!");
    }
  }
}
