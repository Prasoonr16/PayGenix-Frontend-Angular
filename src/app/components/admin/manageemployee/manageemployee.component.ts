import { CommonModule } from '@angular/common';
import { Component, OnInit, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeserviceService } from '../../../services/employeeservice.service';

@Component({
  selector: 'app-manageemployee',
  imports: [CommonModule,FormsModule],
  templateUrl: './manageemployee.component.html',
  styleUrl: './manageemployee.component.css'
})
export class ManageemployeeComponent implements OnInit {
  // employees = [
  //   { employeeID: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phoneNumber: '1234567890' },
  //   { employeeID: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', phoneNumber: '9876543210' }
  // ];

  // constructor() {}

  // ngOnInit(): void {}

  // editEmployee(employee: any) {
  //   alert(`Edit Employee: ${employee.firstName} ${employee.lastName}`);
  // }

  // deleteEmployee(employeeID: number) {
  //   this.employees = this.employees.filter(emp => emp.employeeID !== employeeID);
  //   alert(`Employee ${employeeID} deleted.`);
  // }
   constructor(private apiservice: EmployeeserviceService){
    this.data = this.apiservice.employees;
   }

   data: Signal<any[]>;

  employees: any[] = [];
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
  }

  // Simulating API calls with hardcoded data
  getEmployees(){
    this.apiservice.fetchAllEmployees();
    // this.employees = [
    //   {
    //     employeeID: 1,
    //     firstName: 'John',
    //     lastName: 'Doe',
    //     email: 'john.doe@example.com',
    //     phoneNumber: '1234567890',
    //     position: 'Software Engineer',
    //     department: 'IT',
    //     activeStatus: 'Active'
    //   },
    //   {
    //     employeeID: 2,
    //     firstName: 'Jane',
    //     lastName: 'Smith',
    //     email: 'jane.smith@example.com',
    //     phoneNumber: '9876543210',
    //     position: 'HR Manager',
    //     department: 'HR',
    //     activeStatus: 'Active'
    //   }
    // ];
  }

  // Add Employee
  addEmployee(): void {
    if (this.newEmployee.firstName && this.newEmployee.lastName) {
      this.newEmployee.employeeID = this.employees.length + 1;
      this.newEmployee.activeStatus = 'Active';
      this.employees.push({ ...this.newEmployee });
      alert('Employee added successfully!');
      this.resetForm();
    } else {
      alert('Please fill out all required fields!');
    }
  }

  // Edit Employee
  editEmployee(employee: any): void {
    this.newEmployee = { ...employee };
    this.editMode = true;
    this.selectedOption = 'edit';
  }

  updateEmployee(): void {
    const index = this.employees.findIndex(e => e.employeeID === this.newEmployee.employeeID);
    if (index !== -1) {
      this.employees[index] = { ...this.newEmployee };
      alert('Employee updated successfully!');
      this.resetForm();
    }
  }

  // Delete Employee
  deleteEmployee(employeeID: number): void {
    const index = this.employees.findIndex(e => e.employeeID === employeeID);
    if (index !== -1) {
      this.employees[index].activeStatus = 'Offboarded';
      alert(`Employee with ID ${employeeID} has been offboarded.`);
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
 
}
