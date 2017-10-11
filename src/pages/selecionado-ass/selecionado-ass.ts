import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Associados } from '../../providers/associados/grupo';
import { AssociadosProvider } from '../../providers/associados/associados';
import { Advogado } from '../../providers/advogado/adv';
import { AdvogadoProvider } from '../../providers/advogado/advogado';

@Component({
  selector: 'page-selecionado-ass',
  templateUrl: 'selecionado-ass.html',
})
export class SelecionadoAssPage {
  associado: Associados;
  advogado: Advogado;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private assProvider: AssociadosProvider,
    private advProvider: AdvogadoProvider) {
      this.associado = this.navParams.get('assSelecionado');
      this.advogado = this.advProvider.getAdvogadoLogado();
  }

  interesseAss(){
    console.log(this.associado);
    console.log(this.advogado);
    this.advProvider.setInteresse(this.advogado.id, this.associado.id);
  }
}
