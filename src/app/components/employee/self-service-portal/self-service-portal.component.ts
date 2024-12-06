import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
declare var bootstrap: any; // Declare the global bootstrap object

@Component({
  selector: 'app-self-service-portal',
  imports: [CommonModule,RouterLink],
  standalone: true,
  templateUrl: './self-service-portal.component.html',
  styleUrl: './self-service-portal.component.css'
})
export class SelfServicePortalComponent {
  payStubs = [
    { startPeriod: '2024-11-01', endPeriod: '2024-11-30', netPay: 50000 },
    { startPeriod: '2024-10-01', endPeriod: '2024-10-31', netPay: 48000 }
  ];

  showPayStubs() {
    const modal = new bootstrap.Modal(document.getElementById('payStubsModal')!);
    modal.show();
  }

}
