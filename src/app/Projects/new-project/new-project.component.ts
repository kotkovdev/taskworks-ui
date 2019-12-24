import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  projectForm: FormGroup;

  ngOnInit() {
    this.projectForm = this.formBuilder.group({
      name: ['', Validators.required],
      repository: ['', null],
      description: ['', null],
      rsa: ['', null]
    });
  }

  onSubmit(form: NgForm) {
    console.log(this.projectForm.valid);
    console.log(this.projectForm.controls['name'].value);
    return false;
  }

}
