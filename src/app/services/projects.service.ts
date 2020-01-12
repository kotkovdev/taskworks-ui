import { Injectable } from '@angular/core';
import { HttpHelperService } from './http-helper.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../interfaces/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService extends HttpHelperService {

  constructor(private http: HttpClient) { super() }

  getAll() {
    return <Observable<Project[]>> this.http.get(this.url('/project/all'));
  }
}
