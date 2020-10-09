import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  gerarMenu(){
    return this.http.get(`http://localhost:8097/menu`)
  }
}
