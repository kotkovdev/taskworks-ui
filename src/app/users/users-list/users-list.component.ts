import { Component, OnInit, Inject } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: any[] = [];

  constructor(@Inject(UsersService) private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getAll().subscribe(users => {
      this.users  = users;
    });
  }

}
