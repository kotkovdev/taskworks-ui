import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { ReportsComponent } from './reports/reports.component';
import { ProjectsListComponent } from './Projects/projects-list/projects-list.component';
import { NewProjectComponent } from './Projects/new-project/new-project.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserFormComponent } from './users/user-form/user-form.component';

const routes: Routes = [
  {
    path: 'task/:id',
    component: TaskComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'tasks/new',
    component: NewTaskComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'projects',
    component: ProjectsListComponent
  },
  {
    path: 'projects/new',
    component: NewProjectComponent
  },
  {
    path: 'users',
    component: UsersListComponent
  },
  {
    path: 'users/new',
    component: UserFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
