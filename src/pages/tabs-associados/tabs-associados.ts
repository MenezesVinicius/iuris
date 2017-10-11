import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultadoAdvPage } from '../resultado-adv/resultado-adv';
import { AreaAdvPage } from '../area-adv/area-adv';

@Component({
  selector: 'page-tabs-associados',
  templateUrl: 'tabs-associados.html'
})
export class TabsAssociadosPage {

  resultadoAdvRoot: any = ResultadoAdvPage;
  areaAdvRoot: any = AreaAdvPage;
  dados: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.dados = this.navParams.get('_dados');
      console.log(this.dados);
  }
}

