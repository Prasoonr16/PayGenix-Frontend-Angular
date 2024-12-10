import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

import { Constant } from '../../components/Constant/constant';
import { catchError, Observable, of } from 'rxjs';

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
  
  //Update employee API
  updateEmployee(id: number, employeeData: any): Observable<any>{
    const url = `${Constant.BASE_URI+Constant.UPDATE_EMP}/${id}`;
    return this.http.put(url, employeeData,{
      headers: {
        'Content-Type': 'application/json' // Ensure the API understands it's JSON
      }
    }).pipe(
      catchError((error: any) => {
        console.error(error);
        return of(error); // Handle errors gracefully
      })
    );
  }

  // Get Employee By ID (optional, if needed for fetching details before updating)
  getEmployeeById(id: number): Observable<any> {
    const url = `${Constant.BASE_URI+Constant.GET_EMP_BY_ID}/${id}`;
    return this.http.get(url);
  }

 

  // Delete Employee API
  deleteEmployee(id: number): Observable<any> {
    const url = `${Constant.BASE_URI+Constant.GET_EMP_BY_ID}/${id}`;
    return this.http.delete(url,{
      headers: {
        'Content-Type': 'application/json' // Ensure the API understands it's JSON
      }
    }).pipe(
      catchError((error: any) => {
        console.error(error);
        return of(error); // Handle errors gracefully
      })
    );
  }
}
