import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Constant } from '../../components/Constant/constant';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  users = signal<any[]>([]);

  constructor(private http: HttpClient) {}

  // Fetch all users
  getAllUsers(){
    this.http.get<any[]>(Constant.BASE_URI+Constant.VIEW_USER).subscribe(
      (data) => this.users.set(data)
    );
  }
  
  // updateUser(userId: number, userData: any): Observable<any> {
  //   return this.http.put(`${this.apiUrl}/${userId}`, userData);
  // }
  //Update employee API
  updateUser(id: number, userData: any): Observable<any>{
    const url = `${Constant.BASE_URI+Constant.UPDATE_USER}/${id}`;
    return this.http.put(url, userData,{
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