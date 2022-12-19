import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  LoginAuth(data: any) {
    const headers = new HttpHeaders();
    return this.http.post('http://127.0.0.1:3000/LoginAuth', data, {
      headers: headers,
    });
  }
}
