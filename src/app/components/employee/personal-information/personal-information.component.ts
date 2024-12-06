import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  imports: [CommonModule,FormsModule],
  standalone: true,
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css'
})
export class PersonalInformationComponent {
  employee = {
    firstName: 'Prasoon',
    lastName: 'Rai',
    email: 'prasoon@gmail.com',
    phoneNumber: '9179898647'
  };

  save() {
    alert('Personal information saved successfully!');
  }
}
