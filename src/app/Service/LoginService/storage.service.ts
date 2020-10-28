import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  salvarUsuario(cliente: any) {
    localStorage.setItem('cliente', btoa(JSON.stringify(cliente)));
  }

}
