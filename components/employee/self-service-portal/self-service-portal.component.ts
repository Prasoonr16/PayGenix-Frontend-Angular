import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';
import { AuthserviceService } from '../../../services/authservice.service';
declare var bootstrap: any; // Declare the global bootstrap object

@Component({
  selector: 'app-self-service-portal',
  imports: [CommonModule,RouterLink,FooterComponent,RouterLink,RouterLinkActive],
  standalone: true,
  templateUrl: './self-service-portal.component.html',
  styleUrl: './self-service-portal.component.css'
})
export class SelfServicePortalComponent {
  constructor(private authService:AuthserviceService, private router: Router) {
  }
  username: string = "";

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
