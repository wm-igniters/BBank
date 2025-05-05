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
  providedIn: 'root',
})
export class BeneficiaryService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  getBeneficiaries(): Observable<Beneficiary[]> {
    return this.http.get<Beneficiary[]>(`${this.apiUrl}/beneficiaries`);
  }

  addBeneficiary(beneficiary: Beneficiary): Observable<Beneficiary> {
    return this.http.post<Beneficiary>(
      `${this.apiUrl}/beneficiaries`,
      beneficiary,
    );
  }
}
