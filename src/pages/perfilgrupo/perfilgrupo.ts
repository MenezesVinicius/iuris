import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Associados } from '../../providers/associados/grupo';
import { AssociadosProvider } from '../../providers/associados/associados';
import { ListarAdvPage } from '../listar-adv/listar-adv';

@Component({
  selector: 'page-perfilgrupo',
  templateUrl: 'perfilgrupo.html',
})
export class PerfilgrupoPage {
  public grupo: Associados;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private assProvider: AssociadosProvider) {
      this.grupo = this.assProvider.grupoLogado;
      console.log(this.grupo);
  }

  efetuaAlteracao() {
    this.navCtrl.setRoot(ListarAdvPage);
  }
}
