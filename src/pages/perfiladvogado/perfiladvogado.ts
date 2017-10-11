import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdvogadoProvider } from '../../providers/advogado/advogado';
import { Advogado } from '../../providers/advogado/adv';
import { ListarAssPage } from '../listar-ass/listar-ass';

@Component({
  selector: 'page-perfiladvogado',
  templateUrl: 'perfiladvogado.html',
})
export class PerfiladvogadoPage {
  
  public advogado: Advogado;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private advProvider: AdvogadoProvider){
      this.advogado = this.advProvider.advogadoLogado;
      console.log(this.advogado);
  }

  efetuaAlteracao() {
    this.navCtrl.setRoot(ListarAssPage);
  }
}
