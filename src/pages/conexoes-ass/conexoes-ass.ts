import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { Associados } from '../../providers/associados/grupo';
import { Advogado } from '../../providers/advogado/adv';
import { AssociadosProvider } from '../../providers/associados/associados';
import { SelecionadoAdvPage } from '../selecionado-adv/selecionado-adv';

@Component({
  selector: 'page-conexoes-ass',
  templateUrl: 'conexoes-ass.html',
})
export class ConexoesAssPage {
  associado: Associados;
  advogados: Advogado[];
  loading: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private assProvider: AssociadosProvider) {
    this.loading = this.loadingCtrl.create();
    this.loading.present();
    this.associado = this.assProvider.getGrupoLogado();
    this.assProvider.getConexoes(this.associado.id)
      .then(dados => {
        this.loading.dismiss().then(() => this.advogados = dados);
      }, err => this.loading.dismiss());
  }

  selecionaAdv(advogado: Advogado) {
    console.log(advogado);
    this.navCtrl.push(SelecionadoAdvPage, { advSelecionado: advogado, fromConexoes: 1 });
  }
}
