import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsAssociadosPage } from '../tabs-associados/tabs-associados';

@Component({
  selector: 'page-procurar-adv',
  templateUrl: 'procurar-adv.html',
})
export class ProcurarAdvPage {
  area: String;
  nivel: String;
  idioma: String;
  distancia: number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  pesquisarAdv() {
    let dados = { 
      area: this.area,
      nivel: this.nivel,
      idioma: this.idioma,
      distancia: this.distancia
    };
    console.log(dados);
    this.navCtrl.push(TabsAssociadosPage, { _dados: dados });
  }
}
