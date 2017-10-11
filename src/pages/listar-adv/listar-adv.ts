import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Advogado } from '../../providers/advogado/adv';
import { AdvogadoProvider } from '../../providers/advogado/advogado';
import { ProcurarAdvPage } from '../procurar-adv/procurar-adv';
import { SelecionadoAdvPage } from '../selecionado-adv/selecionado-adv';

@Component({
  selector: 'page-listar-adv',
  templateUrl: 'listar-adv.html',
})
export class ListarAdvPage {
  public advogados: Advogado[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private advProvider: AdvogadoProvider) {
      this.advProvider.getAdvogados()
      .then(dados => {
        console.log(dados);
        this.advogados = dados;
      });
  }

  gotoSearch() {
    this.navCtrl.push(ProcurarAdvPage);
  }

  selecionaAdv(advogado: Advogado){
    console.log(advogado);
    this.navCtrl.push(SelecionadoAdvPage, { advSelecionado: advogado });
  }

}
