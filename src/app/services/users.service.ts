import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpHelperService } from './http-helper.service';
import { User } from '../interfaces/User';


@Injectable({
  providedIn: 'root'
})
export class UsersService extends HttpHelperService {

  constructor(private http: HttpClient) { super() }

  getAll() : Observable<User[]> {
    return <Observable<User[]>> this.http.get(this.baseURL + '/user/all?api_token=' + this.token);
  }
}
