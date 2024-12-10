import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LeaveRequestService } from '../../../services/employee/leave-request.service';
import { FooterComponent } from '../../footer/footer.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthserviceService } from '../../../services/authservice.service';

@Component({
  selector: 'app-leaverequest',
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, FooterComponent],
  templateUrl: './leaverequest.component.html',
  styleUrl: './leaverequest.component.css'
})
export class LeaverequestComponent {
  leaveRequest = {
    employeeID: 1,
    startDate: '',
    endDate: '',
    leaveType: '',
    status: 'Pending',
    requestDate: new Date().toISOString(), // Automatically set current date
    approvalDate: null // Leave it null as it's not required for submission
  };
  
  successMessage: string | null = null;
  errorMessage: string | null = null;
  username: string = "";
  
  constructor(private leaveRequestService: LeaveRequestService,private authService: AuthserviceService,private router: Router) {}

  submitLeave(): void {
    if (!this.leaveRequest.startDate || !this.leaveRequest.endDate || !this.leaveRequest.leaveType) {
      this.errorMessage = 'All fields are required!';
      return;
    }
    this.leaveRequestService.submitLeaveRequest(this.leaveRequest).subscribe({
      next: (response: any) => {
        console.log('Leave request response:', response);
        this.successMessage = 'Leave request submitted successfully!';
        this.errorMessage = null;
         // Reset the form
        this.leaveRequest.startDate = '';
        this.leaveRequest.endDate = '';
        this.leaveRequest.leaveType = '';
      },
      error: (error) => {
        console.error('Error submitting leave request:', error);
        this.errorMessage = 'Failed to submit leave request. Please try again.';
        this.successMessage = null;
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
  this.router.navigate(['/app-self-service-portal']);
 }

}
