import { Injectable } from '@angular/core';
import { BloodDonor } from './blood-donor';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BloodBankApiService {
  baseURL='http://localhost:3000/donors';
  constructor(private http:HttpClient) {}
  findAllDonors():Observable<BloodDonor[]>{
      return this.http.get<BloodDonor[]>(this.baseURL);
  }
  addDonor(donor:BloodDonor):Observable<HttpResponse<{}>>{
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post<HttpResponse<{}>>(this.baseURL, donor, {headers});
  }
  removeDonor(donor:BloodDonor):Observable<BloodDonor>{
    return this.http.delete<BloodDonor>(this.baseURL + '/' + donor.id);
  }

  updateDonor(donor){
    return this.http.put<BloodDonor>(this.baseURL + '/' + donor.id, donor);
  }
}
