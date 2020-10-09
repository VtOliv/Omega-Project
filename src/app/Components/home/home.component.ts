import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Service/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menus:any = []

  constructor(private serv: HttpService) { }

  ngOnInit(): void {
    this.serv.gerarMenu().subscribe(
      res => {
        this.menus = res
        console.log(res)
      }
    )
  }

}
