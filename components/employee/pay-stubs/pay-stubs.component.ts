import { Component, OnInit } from '@angular/core';
import { PayrollService } from '../../../services/employee/payroll.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../footer/footer.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthserviceService } from '../../../services/authservice.service';

@Component({
  selector: 'app-pay-stubs',
  imports: [CommonModule, RouterLink, RouterLinkActive, FooterComponent],
  templateUrl: './pay-stubs.component.html',
  styleUrl: './pay-stubs.component.css'
})
export class PayStubsComponent implements OnInit{
 
  employeeId: number = 0; // Replace with dynamic employee ID
  payStubs: any[] = [];
  selectedPayStub: any = null;
  isModalOpen: boolean = false;
  username: string = "";

  constructor(private payrollService: PayrollService, private authService: AuthserviceService, private router: Router) {}

  ngOnInit(): void {
    this.employeeId = 1; // Example employee ID
    this.loadPayStubs();
    this.username = this.authService.getUsername();
  }

  // Fetch pay stubs
  loadPayStubs(): void {
    this.payrollService.getPayStubs(this.employeeId).subscribe({
      next: (response: any[]) => {
        this.payStubs = response;
      },
      error: (error: any) => {
        console.error('Error fetching pay stubs:', error);
      }
  });
  }

  // Open modal
  openModal(stub: any): void {
    this.selectedPayStub = stub;
    this.isModalOpen = true;
  }

  // Close modal
  closeModal(): void {
    this.isModalOpen = false;
    this.selectedPayStub = null;
  }

  
  onLogout(): void {
    this.authService.logout();
  }
 onBack(): void{
  this.router.navigate(['/app-self-service-portal']);
 }
}
