import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CadastrogrupoPage } from '../cadastrogrupo/cadastrogrupo';

@Component({
  selector: 'page-logingrupo',
  templateUrl: 'logingrupo.html',
})
export class LogingrupoPage {

  public email: string = 'vicmen33@hotmal.com';
  public senha: string = '36425652';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  efetuaLogin() {
    this.navCtrl.setRoot(HomePage);
  }

  gotoCadastro() {
    this.navCtrl.push(CadastrogrupoPage);
  }

}
