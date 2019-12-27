import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TasksComponent } from './tasks/tasks.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { ReportsComponent } from './reports/reports.component';
import { ProjectsListComponent } from './Projects/projects-list/projects-list.component';
import { NewProjectComponent } from './Projects/new-project/new-project.component';
import { UsersListComponent } from './users/users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TasksComponent,
    SearchComponent,
    HeaderComponent,
    TaskComponent,
    NewTaskComponent,
    ReportsComponent,
    ProjectsListComponent,
    NewProjectComponent,
    UsersListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
