import { Injectable } from '@angular/core';
import { HttpHelperService } from './http-helper.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Report } from '../interfaces/Report';

@Injectable({
  providedIn: 'root'
})
export class ReportsService extends HttpHelperService {
  constructor(private http: HttpClient) { super() }

  getAll() : Observable<Report[]> {
    return <Observable<Report[]>> this.http.get(this.url('/report/all'));
  }

  create(report: Report) : Observable<Report> {
    return <Observable<Report>> this.http.post(this.url('/report/new'), report);
  }

  getById(reportId : number) {
    return <Observable<Report>> this.http.get(this.url('/report/' + reportId));
  }

  update(reportId: number, report: Report) {
    return <Observable<Report>> this.http.post(this.url('/report/' + reportId), report);
  }
}