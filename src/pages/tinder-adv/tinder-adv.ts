import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Loading, LoadingController, AlertController } from 'ionic-angular';
import { Associados } from '../../providers/associados/grupo';
import { Advogado } from '../../providers/advogado/adv';
import { AdvogadoProvider } from '../../providers/advogado/advogado';
import { AssociadosProvider } from '../../providers/associados/associados';
import { SelecionadoAdvPage } from '../selecionado-adv/selecionado-adv';

@Component({
  selector: 'page-tinder-adv',
  templateUrl: 'tinder-adv.html',
})
export class TinderAdvPage {
  @ViewChild(Slides) slides: Slides;
  associado: Associados;
  advogados: Advogado[];
  loading: Loading;
  image = "assets/img/img-user.png"

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private advProvider: AdvogadoProvider,
    private assProvider: AssociadosProvider) {
    this.associado = this.assProvider.getGrupoLogado();
    this.loading = this.loadingCtrl.create();
    this.loading.present();
    this.advProvider.getAdvogados()
      .then(dados => {
        this.loading.dismiss().then(() => {
          this.advogados = dados;
          console.log(this.advogados);
        });
      });
  }

  selecionaAdv(advogado: Advogado) {
    console.log(advogado);
    this.navCtrl.push(SelecionadoAdvPage, { advSelecionado: advogado });
  }

  semInteresseAdv(advogado: Advogado) {
    console.log(advogado);
    let currentIndex = this.slides.getActiveIndex();

    if (this.slides.isEnd()) {
      this.slides.slideTo(currentIndex - 2);
    }

    this.advogados = this.advogados.filter(item => item.id !== advogado.id);

    console.log(this.advogados);
  }

  interesseAdv(advogado: Advogado) {
    this.showLoading();
    this.assProvider.setInteresse(advogado.id, this.associado.id)
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
        this.semInteresseAdv(advogado);
      }, err => this.loading.dismiss());
  }

  showLoading() {
    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }
}
