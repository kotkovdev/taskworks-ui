import { Component, OnInit, Inject } from '@angular/core';
import { TasksService } from './../services/tasks.service';
import { Task } from '../interfaces/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[];

  constructor(@Inject(TasksService) private tasksService: TasksService) {
    
  }

  ngOnInit() {
    this.tasksService.getAll().subscribe(tasks => {
      this.tasks = tasks;
      console.log(this.tasks);
    });
  }

}
