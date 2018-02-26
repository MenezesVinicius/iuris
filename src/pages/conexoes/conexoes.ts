import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { AdvogadoProvider } from '../../providers/advogado/advogado';
import { Associados } from '../../providers/associados/grupo';
import { Advogado } from '../../providers/advogado/adv';
import { SelecionadoAssPage } from '../selecionado-ass/selecionado-ass';

@Component({
  selector: 'page-conexoes',
  templateUrl: 'conexoes.html',
})
export class ConexoesPage {
  associados: Associados[];
  advogado: Advogado;
  loading: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private advProvider: AdvogadoProvider) {
    this.loading = this.loadingCtrl.create();
    this.loading.present();
    this.advogado = this.advProvider.getAdvogadoLogado();
    this.advProvider.getConexoes(this.advogado.id)
      .then(dados => {
        this.loading.dismiss().then(() => this.associados = dados);
      }, err => this.loading.dismiss());
  }

  selecionaAss(associado: Associados) {
    console.log(associado);
    this.navCtrl.push(SelecionadoAssPage, { assSelecionado: associado, fromConexoes: 1 });
  }
}
