import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthserviceService } from '../../../services/authservice.service';
import { PayrollService } from '../../../services/employee/payroll.service';
import { ProcesspayrollService } from '../../../services/payroll/processpayroll.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payrollprocessing',
  imports: [RouterLink, RouterLinkActive, FooterComponent,CommonModule,FormsModule],
  templateUrl: './payrollprocessing.component.html',
  styleUrl: './payrollprocessing.component.css'
})
export class PayrollprocessingComponent {
  constructor(private authService: AuthserviceService,private router: Router,private payrollService: ProcesspayrollService){}

  username: string = "";
  ngOnInit(): void {
    this.username = this.authService.getUsername();
  }

  payrollData = {
    employeeId: 0,
    basicSalary: 0,
    hra: 0,
    lta: 0,
    travellingAllowance: 0,
    pf: 0,
    tds: 0,
    startPeriod: '',
    endPeriod: '',
  };

  onProcessPayroll(): void {
    this.payrollService.processPayroll(this.payrollData).subscribe({
      next: (response) => {
        alert('Payroll processed successfully!');
      },
      error: (err) => {
        console.error('Error processing payroll:', err);
        alert('Failed to process payroll. Please try again.');
      },
    });
  }
  
  onLogout(): void {
    this.authService.logout();
  }
 onBack(): void{
  this.router.navigate(['/app-payroll-dashboard']);
 }
}
