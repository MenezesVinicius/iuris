import { Component, ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Content } from 'ionic-angular/navigation/nav-interfaces';
import { Advogado } from '../../providers/advogado/adv';
import { Associados } from '../../providers/associados/grupo';
import { AssociadosProvider } from '../../providers/associados/associados';

@Component({
  selector: 'page-chat-adv',
  templateUrl: 'chat-adv.html',
})
export class ChatAdvPage {
  @ViewChild('content') content: any;
  advogado: Advogado;
  associado: Associados;
  newmessage;
  allmessages = [];
  photoURL = "assets/img/img-user.png";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private assProvider: AssociadosProvider) {
    this.advogado = this.navParams.get('advSelecionado');
    console.log(this.advogado);
    this.associado = assProvider.getGrupoLogado();
  }

  addmessage() {
    if (this.newmessage != null && this.newmessage != '') {
      this.allmessages.push({
        sentby: this.associado.nome,
        message: this.newmessage
      });
      this.content.scrollToBottom(300);
      this.allmessages.push({
        sentby: this.advogado.nome,
        message: this.newmessage
      });
      this.newmessage = '';
    }
  }

  ionViewDidEnter() {

  }

  scrollto() {

  }
}