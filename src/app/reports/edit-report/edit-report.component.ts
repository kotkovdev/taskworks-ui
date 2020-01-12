import { Component, OnInit, Inject } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Report } from 'src/app/interfaces/Report';

@Component({
  selector: 'app-edit-report',
  templateUrl: './edit-report.component.html',
  styleUrls: ['./edit-report.component.scss']
})
export class EditReportComponent implements OnInit {

  constructor(
    @Inject(ReportsService) private reportService: ReportsService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  reportForm: FormGroup;

  reportId: number;

  ngOnInit() {
    this.reportForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.route.paramMap.subscribe(params => {
      this.reportId = Number(params.get('id'));
      this.loadFormData(this.reportId);
    });
  }

  loadFormData(reportId) {
    this.reportService.getById(reportId).subscribe(report => {
      this.reportForm.get('title').setValue(report.title);
      this.reportForm.get('description').setValue(report.description);
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
      this.reportService.update(this.reportId, report).subscribe(response => {
        console.log(response);
      });
    }
  }

}
