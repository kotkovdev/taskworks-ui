import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHelperService } from './http-helper.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService extends HttpHelperService {

  constructor(private http: HttpClient) { super() }

  getAll() {
    /*return this.http.get('/assets/config.json').subscribe(data => {
      console.log(data);
    });*/
    return this.http.get(this.baseURL + '/user/all').subscribe(data => {
      console.log(data);
    })
  }
}
