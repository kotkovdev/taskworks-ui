import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Report } from 'src/app/interfaces/Report';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.scss']
})
export class NewReportComponent implements OnInit {

  constructor(
    @Inject(ReportsService) private reportsService: ReportsService,
    private formBuilder:FormBuilder
  ) { }

  reportForm: FormGroup;

  ngOnInit() {
    this.reportForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.reportForm.valid) {
      let controls = this.reportForm.controls;
      let report = new Report(
        null,
        controls['title'].value,
        controls['description'].value,
        null
      );
      this.reportsService.create(report).subscribe(response => {
        console.log(response);
      });
    }
  }

}
