import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './../task.model';

@Component({
  selector: 'new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  @Output() sendNewTaskToSpace = new EventEmitter();

  submitForm(description: string, priority: number) {
    let newTaskToAdd: Task = new Task(description, priority);
    this.sendNewTaskToSpace.emit(newTaskToAdd);
  }

}
