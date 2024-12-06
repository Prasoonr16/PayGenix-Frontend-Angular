import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  users = signal<any[]>([]);

  constructor(private http: HttpClient) {}

  // Fetch all users
  getAllUsers(){
    this.http.get<any[]>('https://localhost:7273/api/admin/user').subscribe(
      (data) => this.users.set(data)
    );
  }
  
  // updateUser(userId: number, userData: any): Observable<any> {
  //   return this.http.put(`${this.apiUrl}/${userId}`, userData);
  // }

  // // Delete user
  // deleteUser(userId: number): Observable<any> {
  //   return this.http.delete(`${this.apiUrl}/${userId}`);
  // }
}
