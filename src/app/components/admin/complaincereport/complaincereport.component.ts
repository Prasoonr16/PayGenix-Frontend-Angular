import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-complaincereport',
  imports: [CommonModule,FormsModule],
  templateUrl: './complaincereport.component.html',
  styleUrl: './complaincereport.component.css'
})
export class ComplaincereportComponent {
  complianceReports = [
    {
      reportID: 1,
      employeeID: 101,
      complianceStatus: 'Pending',
      issuesFound: 'Issue with tax filing',
      comments: 'Please resolve by next week',
      resolvedStatus: 'Pending'
    },
    {
      reportID: 2,
      employeeID: 102,
      complianceStatus: 'Resolved',
      issuesFound: 'Salary deduction error',
      comments: 'Resolved on 2024-11-25',
      resolvedStatus: 'Resolved'
    },
    {
      reportID: 3,
      employeeID: 103,
      complianceStatus: 'Pending',
      issuesFound: 'Insurance data mismatch',
      comments: 'Under review',
      resolvedStatus: 'Pending'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  editReport(report: any): void {
    alert(`
      Edit Report
      Report ID: ${report.reportID}
      Employee ID: ${report.employeeID}
      Status: ${report.complianceStatus}
      Issues Found: ${report.issuesFound}
      Comments: ${report.comments}
      Resolved Status: ${report.resolvedStatus}
    `);
  }
    
}
