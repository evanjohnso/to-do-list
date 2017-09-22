import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from "./../task.model";

@Component({
  selector: 'edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {
  @Input() childSelectedTask = Task;
  @Output() doneEditingThanks = new EventEmitter();

  finishedEditing() {
    this.doneEditingThanks.emit();
  }
}
