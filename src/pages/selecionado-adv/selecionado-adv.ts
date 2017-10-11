import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Advogado } from '../../providers/advogado/adv';
import { ListarAdvPage } from '../listar-adv/listar-adv';
import { Associados } from '../../providers/associados/grupo';
import { AdvogadoProvider } from '../../providers/advogado/advogado';
import { AssociadosProvider } from '../../providers/associados/associados';

@Component({
  selector: 'page-selecionado-adv',
  templateUrl: 'selecionado-adv.html',
})
export class SelecionadoAdvPage {
  associado: Associados;
  advogado: Advogado;
  fromConexoes: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private assProvider: AssociadosProvider,
    private advProvider: AdvogadoProvider) {
    this.advogado = this.navParams.get('advSelecionado');
    this.fromConexoes = this.navParams.get('fromConexoes');
    console.log(this.fromConexoes);
    this.associado = this.assProvider.getGrupoLogado();
  }

  interesseAdv() {
    console.log(this.associado);
    console.log(this.advogado);
    this.assProvider.setInteresse(this.advogado.id, this.associado.id);
  }
}
