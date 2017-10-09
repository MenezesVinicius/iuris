import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LogingrupoPage } from '../logingrupo/logingrupo';
import { Associados } from '../../providers/associados/grupo';
import { AssociadosProvider } from '../../providers/associados/associados';

@Component({
  selector: 'page-cadastrogrupo',
  templateUrl: 'cadastrogrupo.html',
})
export class CadastrogrupoPage {

  public grupo : Associados;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public events: Events,
    private assProvider: AssociadosProvider) {
      this.grupo = new Associados();
  }

  efetuaCadastro() {
    this.assProvider.cadastrarGrupo(this.grupo);
    this.events.publish('tipoLogado', 'grupo');    
    this.navCtrl.setRoot(HomePage);
  }

  gotoLogin(){
    this.assProvider.logarGrupo(this.grupo);
    this.navCtrl.pop();
  }
}
