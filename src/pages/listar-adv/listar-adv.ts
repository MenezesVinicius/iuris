import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Loading, LoadingController } from 'ionic-angular';
import { Advogado } from '../../providers/advogado/adv';
import { AdvogadoProvider } from '../../providers/advogado/advogado';
import { ProcurarAdvPage } from '../procurar-adv/procurar-adv';
import { SelecionadoAdvPage } from '../selecionado-adv/selecionado-adv';

@Component({
  selector: 'page-listar-adv',
  templateUrl: 'listar-adv.html',
})
export class ListarAdvPage {
  public advogados: Advogado[];
  public loading: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private advProvider: AdvogadoProvider) {
    this.menuCtrl.enable(true, 'menu');
    this.loading = this.loadingCtrl.create();
    this.loading.present();
    this.advProvider.getAdvogados()
      .then(dados => {
        this.loading.dismiss().then(() => this.advogados = dados);
      }, err => this.loading.dismiss());
  }

  gotoSearch() {
    this.navCtrl.push(ProcurarAdvPage);
  }

  selecionaAdv(advogado: Advogado) {
    console.log(advogado);
    this.navCtrl.push(SelecionadoAdvPage, { advSelecionado: advogado });
  }

}
