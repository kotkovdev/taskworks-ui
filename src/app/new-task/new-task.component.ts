import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  users = Array();

  constructor(private usersService : UsersService) { }

  ngOnInit() {
    //this.users = this.usersService.getAll();
    console.log(this.users);
  }

}
