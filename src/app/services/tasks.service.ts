import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHelperService } from './http-helper.service';
import { Task } from '../interfaces/Task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService extends HttpHelperService {

  constructor(private http: HttpClient) { super() }

  getAll() {
    return this.http.get(this.baseURL + '/user/all?api_token=' + this.token).subscribe(data => {
      console.log(data);
    })
  }

  create(task: Task) {
    return <Observable<Task>> this.http.post(this.url('/task/new'), task);
  }
}
