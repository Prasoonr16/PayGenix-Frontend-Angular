import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LeaverequestService } from '../../../services/manager/leaverequest.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthserviceService } from '../../../services/authservice.service';

@Component({
  selector: 'app-update-leaverequest',
  imports: [FormsModule, CommonModule, RouterLink, RouterLinkActive, FooterComponent],
  templateUrl: './update-leaverequest.component.html',
  styleUrl: './update-leaverequest.component.css'
})
export class UpdateLeaverequestComponent {
  leaveRequestId!: number; // Holds the Leave Request ID
  status!: string; // Holds the selected status (Approved/Rejected)
  message: string = ''; // Message to display success or error
  isSuccess: boolean = false; // Boolean to toggle message type
  username: string = "";

  constructor(private leaveRequestService: LeaverequestService,private authService: AuthserviceService, private router: Router) {}

  // Method to update leave request
  updateLeaveRequest(): void {
    if (!this.leaveRequestId || !this.status) {
      this.message = 'Please fill in all fields.';
      this.isSuccess = false;
      return;
    }

    this.leaveRequestService
      .updateLeaveRequestStatus(this.leaveRequestId, this.status)
      .subscribe({
        next: (response) => {
          this.message = response; // Success message from API
          this.isSuccess = true;
        },
        error: (err) => {
          this.message = `Error: ${err.error}` || 'An error occurred.';
          this.isSuccess = false;
        }
      });
  }

  ngOnInit(): void {
     this.username = this.authService.getUsername();
  }
  onLogout(): void {
    this.authService.logout();
  }
 onBack(): void{
  this.router.navigate(['/app-manager-dashboard']);
 }

}
