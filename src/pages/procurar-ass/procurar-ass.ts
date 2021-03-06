import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsAdvogadoPage } from '../tabs-advogado/tabs-advogado';

@Component({
  selector: 'page-procurar-ass',
  templateUrl: 'procurar-ass.html',
})
export class ProcurarAssPage {
  empresa: String;
  area: String;
  distancia: number;
  numEquipe: number

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  pesquisarAss() {
    let dados = {
      empresa: this.empresa,
      area: this.area,
      distancia: this.distancia,
      numEquipe: this.numEquipe
    };
    console.log(dados);
    this.navCtrl.push(TabsAdvogadoPage, { _dados: dados });
  }
}
