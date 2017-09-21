import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testing testing one two three!';
  currentFocus = "Hey there, Angular 2";
  currentTime = new Date();
  month: number = this.currentTime.getMonth()+1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course',3),
   new Task('Begin brainstorming possible JavaScript group projects',2),
   new Task('Add README file to last few Angular repos on GitHub',2)
  ]
  selectedTask: Task = this.tasks[0];

  editTask(clickedTask) {
      this.selectedTask = clickedTask;
    }

  isDone(thisTask: Task) {
    if(thisTask.done) {
      alert('This task is done!');
    } else {
      alert("This task is not done. Better get on it!");
    }
  }
  priorityColor(currentTask) {
    if (currentTask.priority === 3){
      return "bg-danger";
    } else if (currentTask.priority === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }

}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public priority: number) {}
}
