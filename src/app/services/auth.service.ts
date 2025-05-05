
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Beneficiary {
  name: string;
  phone: string;
  email: string;
  defaultAcc: string;
  avatar: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post('/academy-custom/login', { username, password });
  }

  getBeneficiaries(): Observable<Beneficiary[]> {
    return this.http.get<Beneficiary[]>('/academy-custom/beneficiary');
  }

  addBeneficiary(beneficiary: Beneficiary): Observable<Beneficiary> {
    return this.http.post<Beneficiary>('/academy-custom/beneficiary', beneficiary);
  }
}
