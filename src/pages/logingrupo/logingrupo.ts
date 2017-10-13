import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, AlertController, Loading, LoadingController } from 'ionic-angular';
import { CadastrogrupoPage } from '../cadastrogrupo/cadastrogrupo';
import { Associados } from '../../providers/associados/grupo';
import { AssociadosProvider } from '../../providers/associados/associados';
import { ListarAdvPage } from '../listar-adv/listar-adv';

@Component({
  selector: 'page-logingrupo',
  templateUrl: 'logingrupo.html',
})
export class LogingrupoPage {

  grupo: Associados;
  loading: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    private assProvider: AssociadosProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController) {
      
    this.grupo = new Associados();
    this.grupo.email = 'vicmen33@hotmail.com';
    this.grupo.senha = '36425652';
  }

  efetuaLogin() {
    this.showLoading();
    this.assProvider.logarGrupo(this.grupo)
      .then(data => {
        if (data == '[]') {
          this.showError();
        }
        else {
          this.events.publish('tipoLogado', 'grupo');
          this.navCtrl.setRoot(ListarAdvPage);
        }
      });
  }

  gotoCadastro() {
    this.navCtrl.push(CadastrogrupoPage);
  }

  showError() {
    this.loading.dismiss();
    this.alertCtrl.create({
      title: 'Login',
      subTitle: 'Falha ao logar, favor verificar credenciais.',
      buttons: [{ text: 'OK' }]
    }).present();
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Autenticando...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
}
