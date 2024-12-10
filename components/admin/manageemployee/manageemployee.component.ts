import { CommonModule } from '@angular/common';
import { Component, OnInit, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeserviceService } from '../../../services/admin/employeeservice.service';
import { FooterComponent } from '../../footer/footer.component';
import { AuthserviceService } from '../../../services/authservice.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-manageemployee',
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, FooterComponent],
  templateUrl: './manageemployee.component.html',
  styleUrl: './manageemployee.component.css'
})
export class ManageemployeeComponent implements OnInit {
 
   constructor(private apiservice: EmployeeserviceService, private authService: AuthserviceService, private router: Router){
    this.data = this.apiservice.employees;
   }

   data: Signal<any[]>;
   username: string = "";

employees: any[] = [];
selectedEmployee: any = null;

newEmployee: any = {
    employeeID: null,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    position: '',
    department: ''
  };
  selectedOption: string = ''; // Tracks the Admin's menu selection
  editMode: boolean = false;

  // constructor() {}

  ngOnInit(): void {
    this.getEmployees();
    this.username = this.authService.getUsername();
  }

  // Simulating API calls with hardcoded data
  getEmployees(){
    this.apiservice.fetchAllEmployees();
  }

  // Edit employee details
  selectEmployeeForEdit(employee: any): void {
    this.selectedEmployee = { ...employee }; // Clone the employee object to avoid modifying the original
    this.editMode = true;
  }

  // Update employee details
  updateEmployee(): void {
    if (this.selectedEmployee && this.selectedEmployee.employeeID) {
      this.apiservice.updateEmployee(this.selectedEmployee.employeeID, this.selectedEmployee).subscribe({
        next: (response: any) => {
          alert('Employee updated successfully!');
          this.editMode = false;
          this.selectedEmployee = null;
          this.getEmployees(); // Refresh the employee list
        },
        error: (error) => {
          console.error('Error updating employee:', error);
          alert('Failed to update employee. Please try again.');
        }
    });
    }
     else {
      alert('No employee selected for update.');
    }
  }

  // Cancel edit mode
  cancelEdit(): void {
    this.selectedEmployee = null;
    this.editMode = false;
  }

  

  // Edit Employee
  editEmployee(employee: any): void {
    this.newEmployee = { ...employee };
    this.editMode = true;
    this.selectedOption = 'edit';
  }



  // Delete Employee
  deleteEmployee(employeeID: number): void {
    if (confirm('Are you sure you want to offboard this employee?')) {
      this.apiservice.deleteEmployee(employeeID).subscribe({
        next: (response: any) => {
          alert("Employee deleted successfully!"); // Response from the API
          this.getEmployees(); // Refresh the employee list after deletion
        },
        error: (error) => {
          console.error('Error deleting employee:', error);
          alert('Failed to delete the employee. Please try again.');
        }
    });
  }
  }
  resetForm(): void {
    this.newEmployee = {
      employeeID: null,
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      position: '',
      department: ''
    };
    this.editMode = false;
  }
  onLogout(): void {
    this.authService.logout();
  }
 onBack(): void{
  this.router.navigate(['/app-admin-dashboard']);
 }
}
