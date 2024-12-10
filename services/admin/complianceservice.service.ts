import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Constant } from '../../components/Constant/constant';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplianceserviceService {

  reports = signal<any[]>([]);

  constructor(private http: HttpClient) {}

  // Fetch all users
  getAllComplianceReports(){
    this.http.get<any[]>(Constant.BASE_URI+Constant.COMPLIANCE_REPORT).subscribe(
      (data) => this.reports.set(data)
    );
  }

  // Update compliance report
  updateComplianceReport(employeeId: number, reportData: any): Observable<any> {
    const url = `${Constant.BASE_URI+Constant.COMPLIANCE_REPORT}/${employeeId}`;
    return this.http.put(url, reportData, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe(
      catchError((error: any) => {
        console.error('Error updating compliance report:', error);
        return of(error); // Handle errors gracefully
      })
    );
  }
}
