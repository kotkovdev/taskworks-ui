import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { Report } from '../interfaces/Report';
import { ReportsService } from '../services/reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  constructor(@Inject(ReportsService) private reportsService:ReportsService) { }

  reports: Report[];

  ngOnInit() {
    this.reportsService.getAll().subscribe((reports) => {
      this.reports = reports;
    });
  }
}
