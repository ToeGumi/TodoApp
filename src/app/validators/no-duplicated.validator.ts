import { AbstractControl, ValidatorFn } from "@angular/forms";
import { Todo } from "../todo";

export function noDuplicated(todos: Todo[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let isDuplicated = todos.find(todo => todo.title === control.value);
    return !isDuplicated ? null : { noDuplicated: control.value };
  }
}