import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Loading, LoadingController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AdvogadoProvider } from '../../providers/advogado/advogado';
import { Advogado } from '../../providers/advogado/adv';
import { ListarAdvPage } from '../listar-adv/listar-adv';
import { ListarAssPage } from '../listar-ass/listar-ass';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  advogado: Advogado;
  loading: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    private advProvider: AdvogadoProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController) {

    this.advogado = new Advogado();
  }

  efetuaCadastro() {
    this.showLoading();
    this.advProvider.cadastrarAdvogado(this.advogado)
      .then(data => {
        if (data == '[]') {
          this.showError();
        }
        else {
          this.events.publish('tipoLogado', 'advogado');
          this.navCtrl.setRoot(ListarAssPage);
        }
      });
  }

  gotoLogin() {
    this.navCtrl.pop();
  }

  showError() {
    this.loading.dismiss();
    this.alertCtrl.create({
      title: 'Cadastro',
      subTitle: 'Falha ao cadastrar, tente novamente.',
      buttons: [{ text: 'OK' }]
    }).present();
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Cadastrando...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
}
