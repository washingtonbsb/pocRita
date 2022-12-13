import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UserServicesService {
  private apiUrl = 'https://6397796577359127a0388e21.mockapi.io/api/v1/users';

  constructor(private http: HttpClient) {}

  postUser(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }
}
