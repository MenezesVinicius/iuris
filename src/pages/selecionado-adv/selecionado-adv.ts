import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Advogado } from '../../providers/advogado/adv';
import { ListarAdvPage } from '../listar-adv/listar-adv';

@Component({
  selector: 'page-selecionado-adv',
  templateUrl: 'selecionado-adv.html',
})
export class SelecionadoAdvPage {
  advogado: Advogado;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.advogado = this.navParams.get('advSelecionado');
  }

  interesseAdv(){
    this.navCtrl.setRoot(ListarAdvPage);
  }
}
