import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './../task.model';

@Component({
  selector: 'task-list-component',
  templateUrl: './task-list-component.component.html',
  styleUrls: ['./task-list-component.component.css']
})
export class TaskListComponent {
  @Input() childTaskList: Task[]; //childTaskList can be named
                                  //anything matching html
                                  //makes a local variable
  //this is the actions up portion of the model
  @Output() clickAndSendIt = new EventEmitter();

  filterByCompletenessOfTasks: string = "incompleteTasks";

  onChange(menuOption) {
    this.filterByCompletenessOfTasks = menuOption;
  }
  toggleDone(clickedTask: Task, setCompleteness: boolean) {
     clickedTask.done = setCompleteness;
   }

  isDone(thisTask){}

  editButtonHasBeenClicked(editThisTask: Task) {
    this.clickAndSendIt.emit(editThisTask);
  }

  // priorityColor(currentTask) {
  //   if (currentTask.priority === 3){
  //     return "bg-danger";
  //   } else if (currentTask.priority === 2) {
  //     return  "bg-warning";
  //   } else {
  //     return "bg-info";
  //   }
  // }
  constructor() { }


}
