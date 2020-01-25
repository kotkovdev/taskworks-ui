import { Component, OnInit, Inject } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ReportsService } from '../services/reports.service';
import { ReportStatistic } from '../interfaces/ReportStatistic';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Count of troubles' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#f5365c',
      backgroundColor: '#f5365c',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  reportsStatistic: ReportStatistic;

  constructor(@Inject(ReportsService) private reportsService:ReportsService) { }

  ngOnInit() {
    this.reportsService.getStatistic().subscribe(statistic => {
      this.reportsStatistic = statistic;
      this.lineChartLabels = this.reportsStatistic.dates;
      this.lineChartData = [
        { data: this.reportsStatistic.throubles, label: 'Count of troubles' },
      ];
    });
  }
 
}
