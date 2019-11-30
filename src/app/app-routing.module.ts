import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { ReportsComponent } from './reports/reports.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
