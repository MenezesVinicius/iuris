import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, AlertController, Loading, LoadingController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { AdvogadoProvider } from '../../providers/advogado/advogado';
import { Advogado } from '../../providers/advogado/adv';
import { ListarAssPage } from '../listar-ass/listar-ass';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

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
    this.advogado.email = 'vicmen33@hotmail.com';
    this.advogado.senha = '36425652';
  }

  efetuaLogin() {
    this.showLoading();
    this.advProvider.logarAdvogado(this.advogado)
      .then(data => {
        this.loading.dismiss();
        if (data == '[]') {
          this.showError("Falha ao logar");
        }
        else {
          this.events.publish('tipoLogado', 'advogado');
          this.navCtrl.setRoot(ListarAssPage);
        }
      }, err => {
        this.loading.dismiss();        
        this.showError("Falha ao logar");
      });
  }

  gotoCadastro() {
    this.navCtrl.push(CadastroPage);
  }

  showError(msg) {
    this.alertCtrl.create({
      title: 'Login',
      subTitle: msg,
      buttons: [{ text: 'OK' }]
    }).present();
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Autenticando...'
    });
    this.loading.present();
  }
}
