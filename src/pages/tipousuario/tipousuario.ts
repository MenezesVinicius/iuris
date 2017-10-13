import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { LogingrupoPage } from '../logingrupo/logingrupo';

@Component({
  selector: 'page-tipousuario',
  templateUrl: 'tipousuario.html',
})
export class TipousuarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    this.menuCtrl.enable(false, 'menu');
  }

  gotoLoginAdvogado() {
    this.navCtrl.push(LoginPage);
  }

  gotoLoginGrupo(){
    this.navCtrl.push(LogingrupoPage);
  }
}
