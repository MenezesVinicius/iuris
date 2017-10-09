import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CadastroPage } from '../cadastro/cadastro';
import { AdvogadoProvider } from '../../providers/advogado/advogado';
import { Advogado } from '../../providers/advogado/adv';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public advogado: Advogado;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public events: Events,
    private advProvider: AdvogadoProvider) {
      this.advogado = new Advogado();
      this.advogado.email = 'vicmen33@hotmail.com';
      this.advogado.senha = '36425652';
  }

  efetuaLogin() {
    this.advProvider.logarAdvogado(this.advogado);
    this.events.publish('tipoLogado', 'advogado'); 
    this.navCtrl.setRoot(HomePage);
  }

  gotoCadastro() {
    this.navCtrl.push(CadastroPage);
  }
}
