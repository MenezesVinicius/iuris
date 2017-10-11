import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdvogadoProvider } from '../../providers/advogado/advogado';
import { Associados } from '../../providers/associados/grupo';
import { Advogado } from '../../providers/advogado/adv';

@Component({
  selector: 'page-conexoes',
  templateUrl: 'conexoes.html',
})
export class ConexoesPage {
  associados: Associados[];
  advogado: Advogado;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private advProvider: AdvogadoProvider) {
      this.advogado = this.advProvider.getAdvogadoLogado();
      this.advProvider.getConexoes(this.advogado.id)
      .then(dados => {
        console.log(dados);
        this.associados = dados;
      });
  }

}
