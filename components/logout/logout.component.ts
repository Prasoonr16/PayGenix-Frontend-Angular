import { Component } from '@angular/core';
import { AuthserviceService } from '../../services/authservice.service';
import { RouterTestingHarness } from '@angular/router/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(private authService: AuthserviceService, private router: Router){}

  logout(): void{
    // Remove token and other session-related data
    this.authService.removeToken();
    this.authService.logout(); 

    // Redirect to the login page
    this.router.navigate(['/app-home']);
    alert('You have been successfully logged out.');
  }
}
