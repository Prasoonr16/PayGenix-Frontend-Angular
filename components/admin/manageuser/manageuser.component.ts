import { CommonModule } from '@angular/common';
import { Component, OnInit, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserserviceService } from '../../../services/admin/userservice.service';
import { FooterComponent } from '../../footer/footer.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthserviceService } from '../../../services/authservice.service';

@Component({
  selector: 'app-manageuser',
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, FooterComponent],
  templateUrl: './manageuser.component.html',
  styleUrl: './manageuser.component.css'
})
export class ManageuserComponent implements OnInit{
  
  selectedOption: string = ''; // Tracks the Admin's menu selection
  selectedUser: any = null; // Holds data for the user being updated or deleted
  users: any[] = [];
  username: string = "";

  constructor(private userService: UserserviceService,private authService: AuthserviceService,private router: Router) {
    this.data = userService.users;

  }

  data: Signal<any[]>;

  ngOnInit(): void {
    this.getUsers();
    this.username = this.authService.getUsername();
  }

  // Fetch all users
  getUsers(){
    this.userService.getAllUsers();
  }
  

  newUser: any = [
    {
      userID: null,
      username: '',
      roleID: ''
    }
  ]
 

  updateUser(): void {
    if (!this.selectedUser) {
      alert('No user selected for updating.');
      return;
    }
    // Ensure RoleID is part of the updated data
    const updatedUser = {
      userID: this.selectedUser.userID,
      username: this.selectedUser.username,
      roleID: this.selectedUser.role // Bind RoleID from the dropdown
    };

    // Call the UserService to update the user
    this.userService.updateUser(this.selectedUser.userID, updatedUser).subscribe({
      next: (response: any) => {
        alert('User updated successfully!');
        this.selectedUser = null; // Reset the selected user
        this.getUsers(); // Refresh the user list
      },
      error: (error) => {
        console.error('Error updating user:', error);
        alert('Failed to update user. Please try again.');
      }
     });
  }
  onLogout(): void {
    this.authService.logout();
  }
 onBack(): void{
  this.router.navigate(['/app-admin-dashboard']);
 }
  }

