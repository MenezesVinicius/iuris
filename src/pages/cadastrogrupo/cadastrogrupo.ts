import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LogingrupoPage } from '../logingrupo/logingrupo';

@Component({
  selector: 'page-cadastrogrupo',
  templateUrl: 'cadastrogrupo.html',
})
export class CadastrogrupoPage {

  public nome: string;
  public email: string;
  public senha: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  efetuaCadastro() {
    this.navCtrl.setRoot(HomePage);
  }

  gotoLogin(){
    this.navCtrl.pop();
  }
}
