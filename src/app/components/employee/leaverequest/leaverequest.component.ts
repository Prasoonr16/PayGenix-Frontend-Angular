import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-leaverequest',
  imports: [CommonModule,FormsModule],
  templateUrl: './leaverequest.component.html',
  styleUrl: './leaverequest.component.css'
})
export class LeaverequestComponent {
  leaveRequest = {
    startDate: '',
    endDate: '',
    leaveType: ''
  };

  submitLeave() {
    alert('Leave request submitted successfully!');
  }

}
