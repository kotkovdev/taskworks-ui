import { Component, OnInit, Inject } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/interfaces/Task';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  task: Task;
  taskId:number;

  constructor(
    private route: ActivatedRoute,
    @Inject(TasksService) private tasksService: TasksService,
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.taskId = Number(params.get('id'));
      this.getTask(this.taskId);
    });
  }

  getTask(taskId: number) {
    return this.tasksService.getById(taskId).subscribe(task => {
      this.task = task;
      console.log(this.task);
    });
  }
}
