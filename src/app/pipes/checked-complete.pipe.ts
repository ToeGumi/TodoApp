import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from 'src/app/todo';

@Pipe({
  name: 'checkedComplete'
})
export class CheckedCompletePipe implements PipeTransform {

  transform(todos: Todo[], filter: boolean): any {
    if (!todos || !filter) {
      return todos;
    }
    return todos.filter(todo => todo.completed);
  }

}
