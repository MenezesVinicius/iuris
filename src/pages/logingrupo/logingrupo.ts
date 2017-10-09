import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CadastrogrupoPage } from '../cadastrogrupo/cadastrogrupo';
import { Associados } from '../../providers/associados/grupo';
import { AssociadosProvider } from '../../providers/associados/associados';

@Component({
  selector: 'page-logingrupo',
  templateUrl: 'logingrupo.html',
})
export class LogingrupoPage {

  public grupo: Associados;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public events: Events,
    private assProvider: AssociadosProvider) {
      this.grupo = new Associados();
      this.grupo.email = 'vicmen33@hotmail.com';
      this.grupo.senha = '36425652';
  }

  efetuaLogin() {
    this.assProvider.logarGrupo(this.grupo);
    this.events.publish('tipoLogado', 'grupo'); 
    this.navCtrl.setRoot(HomePage);
  }

  gotoCadastro() {
    this.navCtrl.push(CadastrogrupoPage);
  }
}
