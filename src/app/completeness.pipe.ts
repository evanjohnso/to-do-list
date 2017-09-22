import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task.model';

@Pipe({
  name: 'isTheTaskDone',
  pure: false
})
export class CompletenessPipe implements PipeTransform {
  transform(input: Task[], desiredCompleteness) {
    if (desiredCompleteness==="incompleteTasks") {
      return input.filter( (e) => {
        return !e.done;
      });
    } else if (desiredCompleteness==="completedTasks") {
      return input.filter( (e) => {
        return e.done;
      });
    } else {
      return input;
    }

  }
}
