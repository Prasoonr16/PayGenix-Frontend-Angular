import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  // private apiUrl: string = 'https://localhost:7273/api/admin/employees';

  employees = signal<any[]>([]);
  
  constructor(private http: HttpClient) {}
    // Fetch all employees and update the signal
  fetchAllEmployees(): void {
    this.http.get<any[]>('https://localhost:7273/api/admin/employees').subscribe(
      (data) => this.employees.set(data)
    );     
  }
}
