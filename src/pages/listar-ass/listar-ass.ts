import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Loading, LoadingController } from 'ionic-angular';
import { Associados } from '../../providers/associados/grupo';
import { AssociadosProvider } from '../../providers/associados/associados';
import { ProcurarAssPage } from '../procurar-ass/procurar-ass';
import { SelecionadoAssPage } from '../selecionado-ass/selecionado-ass';

@Component({
  selector: 'page-listar-ass',
  templateUrl: 'listar-ass.html',
})
export class ListarAssPage {
  public associados: Associados[];
  public loading: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private assProvider: AssociadosProvider) {
    this.menuCtrl.enable(true, 'menu');
    this.loading = this.loadingCtrl.create();
    this.loading.present();
    this.assProvider.getAssociados()
      .then(dados => {
        this.loading.dismiss().then(() => this.associados = dados);
      }, err => this.loading.dismiss());
  }

  gotoSearch() {
    this.navCtrl.push(ProcurarAssPage);
  }

  selecionaAss(associado: Associados) {
    console.log(associado);
    this.navCtrl.push(SelecionadoAssPage, { assSelecionado: associado });
  }
}
