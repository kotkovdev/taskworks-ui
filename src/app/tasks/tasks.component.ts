import { Component, OnInit } from '@angular/core';
import { TasksService } from './../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks = {};
  constructor(private tasksService : TasksService) { }

  ngOnInit() {
    this.tasks = this.tasksService.getAll();
    console.log(this);
  }

}
