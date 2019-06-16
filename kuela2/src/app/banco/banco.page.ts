import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.page.html',
  styleUrls: ['./banco.page.scss'],
})
export class BancoComponent implements OnInit {
  nome:string
  email:string
  senha:number

  constructor() { }

  ngOnInit() {
  }

}
