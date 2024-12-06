import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../../services/authservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData = {
    username: '',
    password: '',
    roleID: ''
  };
  roles = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Employee' },
    { id: 3, name: 'Manager' },
    { id: 4, name: 'PayrollProcessor' }
  ];

  
  constructor(private authService: AuthserviceService, private router: Router) {}

  login(): void {
    if (!this.loginData.username || !this.loginData.password || !this.loginData.roleID) {
      alert('Please fill in all fields');
      return;
    }
    
    this.authService.login(this.loginData).subscribe({
      next: (response: any) => {
        if (response && response.token) {
        alert('Login successful!');
        const token = response.token;
        this.authService.setToken(token);
        localStorage.setItem('role', response.role);

        // Redirect based on role
        switch (response.role) {
          case 'Admin':
            this.router.navigate(['/app-admin-dashboard']);
            break;
          case 'Employee':
            this.router.navigate(['/app-self-service-portal']);
            break;
          case 'Manager':
            this.router.navigate(['/manager-dashboard']);
            break;
          case 'PayrollProcessor':
            
            this.router.navigate(['/payroll-processor-dashboard']);
            break;
          default:
            alert('Invalid role!');
        }
      }
      else {
        console.error('Invalid response');
      }
      },
      error: (error: any) => {
        alert('Invalid username, password, or role. Please try again.');
        console.error('Login failed:', error);
      }
    });
  }
}
