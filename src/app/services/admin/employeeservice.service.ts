import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

import { Constant } from '../../components/Constant/constant';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  // private apiUrl: string = 'https://localhost:7273/api/admin/employees';

  employees = signal<any[]>([]);
  
  constructor(private http: HttpClient) {}
    // Fetch all employees and update the signal
  fetchAllEmployees(){
    this.http.get<any[]>(Constant.BASE_URI+Constant.VIEW_EMP).subscribe(
      (data) => this.employees.set(data)
    );     
  }
}
