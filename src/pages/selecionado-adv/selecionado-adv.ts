import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Loading, LoadingController } from 'ionic-angular';
import { Advogado } from '../../providers/advogado/adv';
import { ListarAdvPage } from '../listar-adv/listar-adv';
import { Associados } from '../../providers/associados/grupo';
import { AdvogadoProvider } from '../../providers/advogado/advogado';
import { AssociadosProvider } from '../../providers/associados/associados';
import { ChatAdvPage } from '../chat-adv/chat-adv';

@Component({
  selector: 'page-selecionado-adv',
  templateUrl: 'selecionado-adv.html',
})
export class SelecionadoAdvPage {
  associado: Associados;
  advogado: Advogado;
  fromConexoes: number = 0;
  loading: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private assProvider: AssociadosProvider,
    private loadingCtrl: LoadingController,
    private advProvider: AdvogadoProvider,
    private alertCtrl: AlertController) {

    this.advogado = this.navParams.get('advSelecionado');
    this.fromConexoes = this.navParams.get('fromConexoes');
    this.associado = this.assProvider.getGrupoLogado();
  }

  showLoading() {
    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }

  semInteresseAdv() {
    this.navCtrl.pop();
  }

  interesseAdv() {
    this.showLoading();
    this.assProvider.setInteresse(this.advogado.id, this.associado.id)
      .then(dados => {
        this.loading.dismiss();
        if (dados == 1) {
          this.alertCtrl.create({
            title: 'Conexão',
            subTitle: 'Parabéns, você deu match com o advogado!',
            buttons: [{ text: 'OK' }]
          }).present();
        }
        else if (dados == 0) {
          this.alertCtrl.create({
            title: 'Interesse',
            subTitle: 'Interesse registrado com sucesso!',
            buttons: [{ text: 'OK' }]
          }).present();
        }
        if (dados == -1) {
          this.alertCtrl.create({
            title: 'Interesse',
            subTitle: 'Você já registrou interesse neste advogado!',
            buttons: [{ text: 'OK' }]
          }).present();
        }
      }, err => this.loading.dismiss());
  }

  deletarInteresse() {

  }

  comecarChat() {
    this.navCtrl.setRoot(ChatAdvPage, { advSelecionado: this.advogado, fromConexoes: 1 })
  }
}
