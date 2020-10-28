import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  cadastrar(form) {
    return this.http.post(`http://localhost:8097/user/cadastrar`,form)
  }

  logar(form) {
    return this.http.post(`http://localhost:8097/user/logar`,form)
  }
}
