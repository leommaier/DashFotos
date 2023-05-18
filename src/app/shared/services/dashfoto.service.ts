import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Dashfoto } from '../models/Dashfoto.model';
import { Response } from '../models/Response.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashfotoService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/dashfotos`;

  constructor(private http: HttpClient) {}

  getDashfotos(): Observable<Response<Dashfoto[]>> {
    return this.http.get<Response<Dashfoto[]>>(this.apiUrl);
  }

  getDashfoto(id: number): Observable<Response<Dashfoto>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Dashfoto>>(url);
  }

  createDashfoto(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  removeDashfoto(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  updateDashfoto(id: number, formData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, formData);
  }
}
