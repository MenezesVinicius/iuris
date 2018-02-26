import { Component, ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Content } from 'ionic-angular/navigation/nav-interfaces';
import { AdvogadoProvider } from '../../providers/advogado/advogado';
import { Advogado } from '../../providers/advogado/adv';
import { Associados } from '../../providers/associados/grupo';

@Component({
  selector: 'page-chat-ass',
  templateUrl: 'chat-ass.html',
})
export class ChatAssPage {
  @ViewChild('content') content: any;
  advogado: Advogado;
  associado: Associados;
  newmessage;
  allmessages = [];
  photoURL = "assets/img/img-user.png";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private advProvider: AdvogadoProvider) {
    this.associado = this.navParams.get('assSelecionado');
    console.log(this.associado);
    this.advogado = advProvider.getAdvogadoLogado();
  }

  addmessage() {
    if (this.newmessage != null && this.newmessage != '') {
      this.allmessages.push({
        sentby: this.advogado.nome,
        message: this.newmessage
      });
      this.content.scrollToBottom(300);
      this.allmessages.push({
        sentby: this.associado.nome,
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