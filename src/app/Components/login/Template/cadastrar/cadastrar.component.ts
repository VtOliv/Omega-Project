import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Service/LoginService/login.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  constructor(private serv: LoginService) { }

  cadastro = {
    codigoUsuario: 2,
    nomeUsuario:"",
    email:"",
    senha:""
  }

  cadastrar(){
    this.serv.cadastrar(this.cadastro).subscribe(
      res => {
        alert("Cadastrado !!")
      },
      err => { alert(err.error) }
    )
  }

  ngOnInit(): void {
  }

}
