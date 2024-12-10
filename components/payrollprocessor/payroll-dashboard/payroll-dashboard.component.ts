import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthserviceService } from '../../../services/authservice.service';

@Component({
  selector: 'app-payroll-dashboard',
  imports: [RouterLink, RouterLinkActive, FooterComponent],
  templateUrl: './payroll-dashboard.component.html',
  styleUrl: './payroll-dashboard.component.css'
})
export class PayrollDashboardComponent {
  
  constructor(private authService: AuthserviceService, private router: Router){}

  username: string="";
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
