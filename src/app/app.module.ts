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
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { ReportsComponent } from './reports/reports.component';
import { ProjectsListComponent } from './Projects/projects-list/projects-list.component';
import { NewProjectComponent } from './Projects/new-project/new-project.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserFormComponent } from './users/user-form/user-form.component';

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
    UserFormComponent,
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
