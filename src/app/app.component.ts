import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'TaskWorks';

  constructor(public route: ActivatedRoute) {}
  
  ngOnInit() {
    console.log(this.route.children);
  }
}
