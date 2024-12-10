import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthserviceService } from '../../../services/authservice.service';
import { ProcesspayrollService } from '../../../services/payroll/processpayroll.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payrollverification',
  imports: [RouterLink, RouterLinkActive, FooterComponent,FormsModule],
  templateUrl: './payrollverification.component.html',
  styleUrl: './payrollverification.component.css'
})
export class PayrollverificationComponent {
  constructor(private authService: AuthserviceService,private router: Router, private payrollService: ProcesspayrollService){}
  username: string = "";

  ngOnInit(): void {
    this.username = this.authService.getUsername();
  }

  payrollId = 0;

  onVerifyPayroll(): void {
    this.payrollService.verifyPayroll(this.payrollId).subscribe({
      next: (response) => {
        alert('Payroll verified successfully!');
      },
      error: (err) => {
        console.error('Error verifying payroll:', err);
        alert('Failed to verify payroll. Please try again.');
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
