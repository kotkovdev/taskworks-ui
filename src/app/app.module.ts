import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TasksComponent } from './tasks/tasks.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { ReportsComponent } from './reports/reports.component';
import { NewReportComponent } from './reports/new-report/new-report.component';
import { ProjectsListComponent } from './Projects/projects-list/projects-list.component';
import { NewProjectComponent } from './Projects/new-project/new-project.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { EditReportComponent } from './reports/edit-report/edit-report.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesFormComponent } from './messages/messages-form/messages-form.component';

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
    NewReportComponent,
    EditReportComponent,
    DashboardComponent,
    MessagesFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
