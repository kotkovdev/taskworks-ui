import { Component, OnInit, Inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  users: any[] = [];

  constructor(@Inject(UsersService) private usersService : UsersService) { }

  ngOnInit() {
    this.usersService.getAll().subscribe(users => {
      this.users  = users;
    });
  }

}
