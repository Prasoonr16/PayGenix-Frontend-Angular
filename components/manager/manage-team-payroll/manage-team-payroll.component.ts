import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { CommonModule } from '@angular/common';
import { PayrollService } from '../../../services/employee/payroll.service';
import { TeampayrollService } from '../../../services/manager/teampayroll.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthserviceService } from '../../../services/authservice.service';

@Component({
  selector: 'app-manage-team-payroll',
  imports: [CommonModule, RouterLink, RouterLinkActive, FooterComponent],
  templateUrl: './manage-team-payroll.component.html',
  styleUrl: './manage-team-payroll.component.css'
})
export class ManageTeamPayrollComponent {

  teamPayrolls: any[] = []; // Define type for Payroll
  isLoading: boolean = false; // Loader for fetching data
  username: string = "";

  constructor(private payrollService: TeampayrollService, private authService: AuthserviceService, private router: Router) {
  }

  ngOnInit(): void {
    this.getTeamPayrolls();
    this.username = this.authService.getUsername();
  }

  // Method to fetch team payrolls
  getTeamPayrolls(): void {
    this.isLoading = true;
    this.payrollService.getTeamPayrolls().subscribe({
      next: (data) => {
        this.teamPayrolls = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching payrolls:', err);
        this.isLoading = false;
      }
    });
  }
  onLogout(): void {
    this.authService.logout();
  }
 onBack(): void{
  this.router.navigate(['/app-manager-dashboard']);
 }
}
