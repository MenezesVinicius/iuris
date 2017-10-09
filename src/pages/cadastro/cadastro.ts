import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { AdvogadoProvider } from '../../providers/advogado/advogado';
import { Advogado } from '../../providers/advogado/adv';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  public advogado: Advogado;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public events: Events,
    private advProvider: AdvogadoProvider) {
      this.advogado = new Advogado();
  }

  efetuaCadastro() {
    this.advProvider.cadastrarAdvogado(this.advogado);
    this.events.publish('tipoLogado', 'advogado'); 
    this.navCtrl.setRoot(HomePage);
  }

  gotoLogin(){
    this.navCtrl.pop();
  }
}
