import { CommonModule } from '@angular/common';
import { Component, OnInit, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserserviceService } from '../../../services/admin/userservice.service';

@Component({
  selector: 'app-manageuser',
  imports: [CommonModule,FormsModule],
  templateUrl: './manageuser.component.html',
  styleUrl: './manageuser.component.css'
})
export class ManageuserComponent implements OnInit{
  
  selectedOption: string = ''; // Tracks the Admin's menu selection
  selectedUser: any = null; // Holds data for the user being updated or deleted

  constructor(private userService: UserserviceService) {
    this.data = userService.users;

  }

  data: Signal<any[]>;

  ngOnInit(): void {
    this.getUsers();
  }

  // Fetch all users
  getUsers(){
    this.userService.getAllUsers();
  }
  users: any[] = [];

  newUser: any = [
    {
      userID: null,
      username: '',
      roleID: ''
    }
  ]
  // newUser: any  = [
  //   { userID: 1, username: 'admin1', roleID: 1 },
  //   { userID: 2, username: 'employee1', roleID: 2 },
  //   { userID: 3, username: 'manager1', roleID: 3}
  // ];



  // updateUser(user: any) {
  //   alert(`Edit User: ${user.username}`);
  // }

  updateUser(): void {
    const index = this.users.findIndex(u => u.userID === this.newUser.userID);
    if (index !== -1) {
      this.users[index] = { ...this.newUser };
      alert('User updated successfully!');
      // this.resetForm();
    }
  }

  deleteUser(userID: number) {
    this.users = this.users.filter(user => user.userID !== userID);
    alert(`User ${userID} deleted.`);
  }

}
