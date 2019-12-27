import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, NgForm, Validators, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    @Inject(UsersService) private usersService: UsersService
  ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name:       ['', Validators.required],
      email:      ['', Validators.required],
      password:   ['', Validators.required],
      rPassword:  ['', Validators.required],
    });
  }

  /**
   * 
   * @param form 
   * 
   * Submition form event
   */
  onSubmit(form: NgForm) {
    let user:User = new User(
      null,
      this.userForm.controls['name'].value,
      this.userForm.controls['email'].value,
      this.userForm.controls['password'].value,
    );
    this.createUser(user);
  }

  /**
   * 
   * @param user 
   * 
   * Creating a new user
   */
  createUser(user: User) {
    this.usersService.create(user).subscribe();
    console.log(user);
  }

}
