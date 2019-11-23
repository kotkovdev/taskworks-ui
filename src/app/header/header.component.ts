import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalsService } from '../services/globals.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private globals:GlobalsService) { }

  ngOnInit() {
  }

  changeProject(projectName) {
    console.log(projectName);
    this.router.navigateByUrl('/' + projectName);
    this.globals.set('project-name', projectName);
  }

}
