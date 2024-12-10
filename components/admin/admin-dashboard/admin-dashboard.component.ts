import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../footer/footer.component";
import { HeaderComponent } from "../../header/header.component";
import { AuthserviceService } from '../../../services/authservice.service';

@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule, RouterLink, FooterComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit{
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


