import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AssociadosProvider } from '../../providers/associados/associados';
import { Associados } from '../../providers/associados/grupo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public associados: Associados[];

  constructor(
    public navCtrl: NavController,
    private assProvider: AssociadosProvider) {
      this.assProvider.getAssociados()
      .then(dados => {
        console.log(dados);
        this.associados = dados;
      });
  }  

}
