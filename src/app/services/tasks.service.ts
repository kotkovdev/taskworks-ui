import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('/assets/config.json').subscribe(data => {
      console.log(data);
    });
  }
}
