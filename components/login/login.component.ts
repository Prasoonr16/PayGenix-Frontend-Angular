import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthserviceService } from '../../services/authservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule,FooterComponent,RouterLink,RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
onLogin // Store username
() {
throw new Error('Method not implemented.');
}
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
loginForm: any;

  
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

        // Decode the token and extract username
      const decodedToken = this.authService.decodeToken();
      if (decodedToken && decodedToken.username) {
        localStorage.setItem('username', decodedToken.username); // Store username
      }
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
            this.router.navigate(['/app-manager-dashboard']);
            break;
          case 'PayrollProcessor':
            
            this.router.navigate(['/app-payroll-dashboard']);
            break;
          default:
            alert('Invalid role!');
        }
      }
      else {
        console.error('Invalid response');
        alert("Invalid role. Please select correct role.");
      }
      },
      error: (error: any) => {
        alert('Invalid username, password, or role. Please try again.');
        console.error('Login failed:', error);
      }
    });
  }
}
