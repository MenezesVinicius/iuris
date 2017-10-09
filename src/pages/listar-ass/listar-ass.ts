import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Associados } from '../../providers/associados/grupo';
import { AssociadosProvider } from '../../providers/associados/associados';

@Component({
  selector: 'page-listar-ass',
  templateUrl: 'listar-ass.html',
})
export class ListarAssPage {
  public associados: Associados[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private assProvider: AssociadosProvider) {
      this.assProvider.getAssociados()
      .then(dados => {
        console.log(dados);
        this.associados = dados;
      });
  }


}
