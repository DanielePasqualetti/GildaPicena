import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISocio } from '../interfacce/ISocio';

@Injectable({
  providedIn: 'root',
})
export class SociService {
  private apiUrl = 'http://localhost:8080/api';

  headers = new HttpHeaders();

  constructor(private Http: HttpClient) {}

  getSoci() {
    this.headers = this.headers.set(
      'Authorization',
      'Bearer ' + this.getToken()
    );
    return this.Http.get<Partial<ISocio[]>>(`${this.apiUrl}/soci/get`, {
      headers: this.headers,
    });
  }

  getToken() {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      return userData.accessToken;
    } else {
      return '';
    }
  }

  aggiungiSocio() {}
}
