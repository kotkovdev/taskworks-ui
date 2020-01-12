import { Component, OnInit, Inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/User';
import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from 'src/app/interfaces/Project';
import { ReportsService } from 'src/app/services/reports.service';
import { Report } from 'src/app/interfaces/Report';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/interfaces/Task';
import { TasksService } from 'src/app/services/tasks.service';
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  taskId: number;
  taskForm: FormGroup;
  task: Task;

  users: any[] = [];
  projects: Project[];
  reports: Report[];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    @Inject(UsersService) private usersService : UsersService,
    @Inject(ProjectsService) private projectsService: ProjectsService,
    @Inject(ReportsService) private reportsService: ReportsService,
    @Inject(TasksService) private tasksService: TasksService
  ) { }

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      project_id: ['', null],
      report_id: ['', null],
      user_id: ['', null],
      status_id: ['', null],
      description: ['', Validators.required]
    });

    this.usersService.getAll().subscribe(users => {
      this.users  = users;
    });

    this.projectsService.getAll().subscribe(projects => {
      this.projects = projects;
    });

    this.reportsService.getAll().subscribe(reports => {
      this.reports = reports;
    });

  }

  onSubmit() {
    if (this.taskForm.valid) {
      let controls = this.taskForm.controls;
      let task = new Task(
        null,
        controls['title'].value,
        controls['status_id'].value,
        controls['user_id'].value,
        controls['report_id'].value,
        controls['project_id'].value,
        controls['description'].value,
      );
      this.task = task;
      if (this.taskId == null) {
        this.tasksService.create(this.task).subscribe(task => {
          this.task = task;
        });
      } else {
        /* here is saving exist task */
      }
    }
  }

}
