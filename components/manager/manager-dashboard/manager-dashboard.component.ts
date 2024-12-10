import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthserviceService } from '../../../services/authservice.service';

@Component({
  selector: 'app-manager-dashboard',
  imports: [RouterLink, RouterLinkActive, FooterComponent],
  templateUrl: './manager-dashboard.component.html',
  styleUrl: './manager-dashboard.component.css'
})
export class ManagerDashboardComponent {
  constructor(private router: Router, private authService: AuthserviceService) {}
username: string = "";

  // Navigate to Manage Payroll Page
  navigateToPayroll() {
    this.router.navigate(['/app-manage-team-payroll']);
  }

  // Navigate to Update Leave Requests Page
  navigateToLeaveRequests() {
    this.router.navigate(['/app-update-leaverequest']);
  }
  ngOnInit(): void {
    this.username = this.authService.getUsername();
  }
  
  onLogout(): void {
    this.authService.logout();
  }
 onBack(): void{
  this.router.navigate(['/app-login']);
 }
}
