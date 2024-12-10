import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterserviceService } from '../../services/registerservice.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,CommonModule,FooterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  roles = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Employee' },
    { id: 3, name: 'Manager' },
    { id: 4, name: 'PayrollProcessor' }
  ];

  constructor(private fb: FormBuilder, private registerService: RegisterserviceService){
    this.registerForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',[Validators.required, Validators.minLength(8)]],
      roleID: ['',Validators.required],
      employeeDetails: this.fb.group({
        firstName: [''],
        lastName: [''],
        email: ['',Validators.email],
        phoneNumber: ['',Validators.pattern('^[0-9]{10}$')],
      }),
    });
  }
  onSubmit(): void {
    if (this.registerForm.valid) {
      const formValue = this.registerForm.value;

      // If the role is not Employee, remove employeeDetails from the payload
      if (formValue.roleID !== 2) {
        delete formValue.employeeDetails;
      }
      // Make API call through the service
      this.registerService.registerUser(formValue).subscribe({
        next: (response: any) => {
          alert('User registered successfully! UserID: ' + response.userID);
          this.registerForm.reset();
        },
        error: (error) => {
          console.error('Registration failed:', error);
          alert('An error occurred during registration. Please try again.');
        }
      });
    }
     else {
      console.error('Form Invalid!');
      alert('Please fill in all required fields correctly.');
    }
  } 
}
