import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, MenuController, LoadingController, Slides, AlertController } from 'ionic-angular';
import { Associados } from '../../providers/associados/grupo';
import { AssociadosProvider } from '../../providers/associados/associados';
import { SelecionadoAssPage } from '../selecionado-ass/selecionado-ass';
import { Advogado } from '../../providers/advogado/adv';
import { AdvogadoProvider } from '../../providers/advogado/advogado';

@Component({
  selector: 'page-tinder-ass',
  templateUrl: 'tinder-ass.html',
})
export class TinderAssPage {
  @ViewChild(Slides) slides: Slides;
  associados: Associados[];
  advogado: Advogado;
  loading: Loading;
  image = "assets/img/img-user.png"

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private advProvider: AdvogadoProvider,
    private assProvider: AssociadosProvider) {
    this.advogado = this.advProvider.getAdvogadoLogado();
    this.loading = this.loadingCtrl.create();
    this.loading.present();
    this.assProvider.getAssociados()
      .then(dados => {
        this.loading.dismiss().then(() => {
          this.associados = dados;
          console.log(this.associados);
        });
      });
  }

  selecionaAss(associado: Associados) {
    console.log(associado);
    this.navCtrl.push(SelecionadoAssPage, { assSelecionado: associado });
  }

  interesseAss(associado) {
    this.showLoading();
    this.advProvider.setInteresse(this.advogado.id, associado.id)
      .then(dados => {
        this.loading.dismiss();
        if (dados == 1) {
          this.alertCtrl.create({
            title: 'Conexão',
            subTitle: 'Parabéns, você deu match com o associado!',
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
            subTitle: 'Você já registrou interesse neste grupo!',
            buttons: [{ text: 'OK' }]
          }).present();
        }
        this.semInteresseAss(associado);
      }, err => this.loading.dismiss());
  }

  semInteresseAss(associado) {
    console.log(associado);
    let currentIndex = this.slides.getActiveIndex();

    if (this.slides.isEnd()) {
      this.slides.slideTo(currentIndex - 2);
    }

    this.associados = this.associados.filter(item => item.id !== associado.id);

    console.log(this.associados);
  }

  showLoading() {
    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }
}
