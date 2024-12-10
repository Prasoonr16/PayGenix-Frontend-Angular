import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeserviceService } from '../../../services/admin/employeeservice.service';
import { PersonalInfoService } from '../../../services/employee/personal-info.service';
import { FooterComponent } from '../../footer/footer.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthserviceService } from '../../../services/authservice.service';

@Component({
  selector: 'app-personal-information',
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, FooterComponent],
  standalone: true,
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css'
})
export class PersonalInformationComponent {
  employeeId: number = 1; // Replace with a mechanism to fetch the logged-in employee's ID
  employeeDetails: any = null;
  errorMessage: string | null = null;
  username: string = "";

  constructor(private employeeService: PersonalInfoService,private authService: AuthserviceService,private router: Router) {}

  ngOnInit(): void {
    this.getEmployeeDetails();
    this.username = this.authService.getUsername();
  }

  // Fetch employee details
  getEmployeeDetails(): void {
    if (!this.employeeId) {
      this.errorMessage = 'Employee ID is missing.';
      return;
    }

    this.employeeService.getEmployeePersonalDetailsById(this.employeeId).subscribe({
      next: (response: any) => {
        this.employeeDetails = response;
        this.errorMessage = null;
      },
      error: (error: any) => {
        console.error('Error fetching employee details:', error);
        this.errorMessage = 'Failed to fetch employee details. Please try again.';
      }
  });
  }
  
  onLogout(): void {
    this.authService.logout();
  }
 onBack(): void{
  this.router.navigate(['/app-self-service-portal']);
 }

}
