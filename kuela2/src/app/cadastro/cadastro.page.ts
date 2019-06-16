import { Component, OnInit } from '@angular/core';
import { BancoComponent } from '../banco/banco.page';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroComponent implements OnInit {

cadastro: BancoComponent = new BancoComponent();
  constructor(private banco: AngularFireDatabase) { }

  ngOnInit() {
  }
salvar(){
  this.banco.list('cadastro').push(this.cadastro);
  this.cadastro = new BancoComponent();

}
}
