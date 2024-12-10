import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Constant } from '../../components/Constant/constant';

@Injectable({
  providedIn: 'root'
})
export class PayrollserviceService {
  
  payrolls = signal<any[]>([]);

  constructor(private http: HttpClient) { }
  
  getAllPayrolls(){
    this.http.get<any[]>(Constant.BASE_URI+Constant.VIEW_PAYROLL).subscribe(
      (data) => this.payrolls.set(data)
    );
}
}