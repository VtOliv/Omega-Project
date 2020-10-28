import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Service/LoginService/login.service';
import { StorageService } from 'src/app/Service/LoginService/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router,
    private serv: LoginService,
    private storage: StorageService) { }


  form = {
    email: "",
    senha: ""
  }

  test() {
    console.log(this.form)
  }

  logar() {
    this.serv.logar(this.form).subscribe(
      res => {
        this.storage.salvarUsuario(res)
        this.route.navigate(['/home'])
        console.log("Logado")
      }
    )
  }

  ngOnInit(): void {
  }

}
