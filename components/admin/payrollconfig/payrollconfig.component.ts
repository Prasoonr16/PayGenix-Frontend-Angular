import { CommonModule } from '@angular/common';
import { Component, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PayrollserviceService } from '../../../services/admin/payrollservice.service';
import { FooterComponent } from '../../footer/footer.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthserviceService } from '../../../services/authservice.service';

@Component({
  selector: 'app-payrollconfig',
  imports: [CommonModule,FormsModule,RouterLink,RouterLinkActive,FooterComponent],
  templateUrl: './payrollconfig.component.html',
  styleUrl: './payrollconfig.component.css'
})
export class PayrollconfigComponent {
  payrolls: any[] = [];
  data: Signal<any[]>;
  username: string = "";

  constructor(private payrollService : PayrollserviceService, private authService : AuthserviceService, private router : Router ) {
    this.data = payrollService.payrolls;
  }

  ngOnInit(): void {
    this.getPayrolls();
    this.username = this.authService.getUsername();
  }

  getPayrolls(): void {
    this.payrollService.getAllPayrolls();
  
  }

  addPayroll(): void {
    alert('Add Payroll functionality coming soon!');
  }

  editPayroll(payroll: any): void {
    alert(`Edit Payroll functionality for Payroll ID: ${payroll.payrollID}`);
  }
  onLogout(): void {
    this.authService.logout();
  }
 onBack(): void{
  this.router.navigate(['/app-admin-dashboard']);
 }
}
