import { Injectable } from '@angular/core';
import { BloodDonor } from './blood-donor';
import {Observable} from 'rxjs';
import { HttpClient } from '../../node_modules/@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BloodBankApiService {
  baseURL='http://localhost:3000/donors';
  constructor(private http:HttpClient) {}
  findAllDonors():Observable<BloodDonor[]>{
      return this.http.get<BloodDonor[]>(this.baseURL);
  }
}
