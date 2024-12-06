import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payrollconfig',
  imports: [CommonModule,FormsModule],
  templateUrl: './payrollconfig.component.html',
  styleUrl: './payrollconfig.component.css'
})
export class PayrollconfigComponent {
  payrolls: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getPayrolls();
  }

  getPayrolls(): void {
    // Hardcoded payroll data
    this.payrolls = [
      {
        payrollID: 1,
        employeeID: 101,
        basicSalary: 50000,
        hra: 10000,
        lta: 5000,
        grossPay: 65000,
        deductions: 8000,
        netPay: 57000
      },
      {
        payrollID: 2,
        employeeID: 102,
        basicSalary: 60000,
        hra: 12000,
        lta: 7000,
        grossPay: 79000,
        deductions: 10000,
        netPay: 69000
      },
      {
        payrollID: 3,
        employeeID: 103,
        basicSalary: 45000,
        hra: 9000,
        lta: 4000,
        grossPay: 58000,
        deductions: 6000,
        netPay: 52000
      }
    ];
  }

  addPayroll(): void {
    alert('Add Payroll functionality coming soon!');
  }

  editPayroll(payroll: any): void {
    alert(`Edit Payroll functionality for Payroll ID: ${payroll.payrollID}`);
  }

}
