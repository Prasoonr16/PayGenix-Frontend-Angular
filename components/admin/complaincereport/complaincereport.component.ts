import { CommonModule } from '@angular/common';
import { Component, OnInit, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComplianceserviceService } from '../../../services/admin/complianceservice.service';
import { FooterComponent } from "../../footer/footer.component";
import { AuthserviceService } from '../../../services/authservice.service';
import { Route, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-complaincereport',
  imports: [CommonModule, FormsModule,RouterLink,RouterLinkActive,FooterComponent],
  templateUrl: './complaincereport.component.html',
  styleUrl: './complaincereport.component.css'
})
export class ComplaincereportComponent implements OnInit {
  
  complianceReports: Signal<any[]>; // List of compliance reports
  selectedReport: any = null; // The compliance report currently selected for editing
  username: string = "";
  constructor(private complianceService : ComplianceserviceService,private authService : AuthserviceService, private router: Router) {
    this.complianceReports = complianceService.reports;
  }

  ngOnInit(): void {
    this.getComplianceReports();
    this.username = this.authService.getUsername();
  }

  // Fetch all compliance reports
  getComplianceReports(){

    this.complianceService.getAllComplianceReports();
      
  }

  // Select a compliance report for editing
  selectReportForEdit(report: any): void {
    this.selectedReport = { ...report }; // Clone the report to avoid direct mutation
  }

  // Update the compliance report
  updateComplianceReport(): void {
    if (!this.selectedReport) {
      alert('No compliance report selected for updating.');
      return;
    }

    const updatedData = {
      complianceStatus: this.selectedReport.complianceStatus,
      resolvedStatus: this.selectedReport.resolvedStatus,
      issuesFound: this.selectedReport.issuesFound,
      comments: this.selectedReport.comments
    };

    this.complianceService.updateComplianceReport(this.selectedReport.employeeID, updatedData).subscribe({
      next: (response: any) => {
        alert(response);
        this.selectedReport = null;
        this.getComplianceReports();
      },
      error: (error) => {
        console.error('Error updating compliance report:', error);
        alert('Failed to update the compliance report. Please try again.');
      }
    });
  }
  
  onLogout(): void {
    this.authService.logout();
  }
 onBack(): void{
  this.router.navigate(['/app-admin-dashboard']);
 }
  // Cancel editing
  cancelEdit(): void {
    this.selectedReport = null;
  }
}
