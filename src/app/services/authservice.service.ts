import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { catchError, Observable, of } from 'rxjs';
import { Constant } from '../components/Constant/constant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http:HttpClient) { 
   
  }
  // Constant.BASE_URI+Constant.LOGIN

  login(loginData: any): Observable<any> {
    return this.http.post(Constant.BASE_URI+Constant.LOGIN, loginData,{
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
  getToken(): string | null  {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }
  // New method to decode the token and another method to extract tokens exp
  decodeToken(): any | null {
    const token = this.getToken();
    if (token) {
      try {
        return jwtDecode(token); // Decode the token and return its payload
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    }
    return null;
  }
  getTokenExpiry(): Date | null {
    const decodedToken = this.decodeToken();
    if (decodedToken && decodedToken.exp) {
      // Convert the exp value from Unix timestamp to a Date object
      const expiryDate = new Date(decodedToken.exp * 1000); // Multiply by 1000 to convert seconds to milliseconds
      return expiryDate;
    }
    return null;
  }
}
