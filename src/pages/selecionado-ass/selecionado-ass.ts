import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Associados } from '../../providers/associados/grupo';
import { AssociadosProvider } from '../../providers/associados/associados';
import { Advogado } from '../../providers/advogado/adv';
import { AdvogadoProvider } from '../../providers/advogado/advogado';

@Component({
  selector: 'page-selecionado-ass',
  templateUrl: 'selecionado-ass.html',
})
export class SelecionadoAssPage {
  associado: Associados;
  advogado: Advogado;
  fromConexoes: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private assProvider: AssociadosProvider,
    private advProvider: AdvogadoProvider,
    private alertCtrl: AlertController) {

    this.associado = this.navParams.get('assSelecionado');
    this.fromConexoes = this.navParams.get('fromConexoes');
    console.log(this.fromConexoes);
    this.advogado = this.advProvider.getAdvogadoLogado();
  }

  semInteresseAss(){
    this.navCtrl.pop();
  }

  interesseAss() {
    this.advProvider.setInteresse(this.advogado.id, this.associado.id)
      .then(dados => {
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
      });
  }
}
