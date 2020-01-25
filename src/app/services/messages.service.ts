import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHelperService } from './http-helper.service';
import { Observable } from 'rxjs';
import { Message }  from '../interfaces/Message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService extends HttpHelperService {

  constructor(private http: HttpClient) { super() }

  getAll(task_id: number) {
    return <Observable<Message[]>> this.http.get(this.url('/messages/' + task_id));
  }

  send(message: Message) {
    return <Observable<Message[]>> this.http.post(this.url('/messages/new'), message);
  }
}
