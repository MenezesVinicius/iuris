import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdvogadoProvider } from '../../providers/advogado/advogado';
import { Advogado } from '../../providers/advogado/adv';

@Component({
  selector: 'page-perfiladvogado',
  templateUrl: 'perfiladvogado.html',
})
export class PerfiladvogadoPage {
  
  public advogado: any;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private advProvider: AdvogadoProvider){
      this.advogado = this.advProvider.advogadoLogado;
      console.log(this.advogado);
  }

  efetuaAlteracao() {

  }
}
