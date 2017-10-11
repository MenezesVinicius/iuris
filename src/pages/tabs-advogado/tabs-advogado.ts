import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AreaAssPage } from '../area-ass/area-ass';
import { ResultadoAssPage } from '../resultado-ass/resultado-ass';

@Component({
  selector: 'page-tabs-advogado',
  templateUrl: 'tabs-advogado.html'
})
export class TabsAdvogadoPage {

  resultadoAssRoot: any = ResultadoAssPage
  areaAssRoot: any = AreaAssPage
  dados: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.dados = this.navParams.get('_dados');
      console.log(this.dados);
  }

}
