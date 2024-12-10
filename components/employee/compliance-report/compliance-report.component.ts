import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CompliancereportService } from '../../../services/employee/compliancereport.service';
import { FooterComponent } from '../../footer/footer.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthserviceService } from '../../../services/authservice.service';

@Component({
  selector: 'app-compliance-report',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink, RouterLinkActive, FooterComponent],
  templateUrl: './compliance-report.component.html',
  styleUrl: './compliance-report.component.css'
})
export class ComplianceReportComponent{
  
  complianceReportForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  username: string = "";

  constructor(
    private fb: FormBuilder,
    private complianceReportService: CompliancereportService,
    private authService: AuthserviceService,private router: Router
  ) {
    // Create the form
    this.complianceReportForm = this.fb.group({
      employeeID: ['', Validators.required],
      payrollPeriod: ['', Validators.required],
      issuesFound: [''],
      comments: [''],
      complianceStatus: ['Pending', Validators.required], // Add ComplianceStatus field
      resolvedStatus: ['Pending', Validators.required]    // Add ResolvedStatus field
    });
  }
  // Submit the form
  submitComplianceReport(): void {
    if (this.complianceReportForm.valid) {
      const reportData = this.complianceReportForm.value;

      this.complianceReportService.generateComplianceReport(reportData).subscribe({
        next: (response) => {
          this.successMessage = 'Compliance report submitted successfully!';
          alert(this.successMessage);
          this.errorMessage = null;
          this.complianceReportForm.reset();
        },
        error: (error) => {
          console.error('Error generating compliance report:', error);
          this.errorMessage = 'Failed to submit compliance report. Please try again.';
          this.successMessage = null;
          alert(this.errorMessage);
        }
    });
    } else {
      this.errorMessage = 'Please fill in all required fields.';
      this.successMessage = null;
    }
  }

  ngOnInit(): void {
    this.username = this.authService.getUsername();
  }
  
  onLogout(): void {
    this.authService.logout();
  }
 onBack(): void{
  this.router.navigate(['/app-self-service-portal']);
 }
}
