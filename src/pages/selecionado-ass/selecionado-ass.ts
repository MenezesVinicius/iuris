import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Associados } from '../../providers/associados/grupo';

@Component({
  selector: 'page-selecionado-ass',
  templateUrl: 'selecionado-ass.html',
})
export class SelecionadoAssPage {
  associado: Associados;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.associado = this.navParams.get('assSelecionado');
  }

  interesseAss(){
    
  }
}
