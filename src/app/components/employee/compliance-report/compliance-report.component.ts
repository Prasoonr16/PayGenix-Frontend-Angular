import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compliance-report',
  imports: [CommonModule,FormsModule],
  templateUrl: './compliance-report.component.html',
  styleUrl: './compliance-report.component.css'
})
export class ComplianceReportComponent {
  reportDto = {
    employeeID: 1, // Hardcoded Employee ID
    issuesFound: '',
    comments: ''
  };

  generatedReport: any;

  generateReport() {
    // Simulate a generated report without API
    this.generatedReport = {
      reportID: 101,
      employeeID: this.reportDto.employeeID,
      complianceStatus: 'Pending',
      issuesFound: this.reportDto.issuesFound,
      resolvedStatus: 'Pending',
      comments: this.reportDto.comments
    };
    alert('Compliance Report Generated Successfully!');
  }

}
