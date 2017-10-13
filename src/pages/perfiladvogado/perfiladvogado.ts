import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdvogadoProvider } from '../../providers/advogado/advogado';
import { Advogado } from '../../providers/advogado/adv';
import { ListarAssPage } from '../listar-ass/listar-ass';

@Component({
  selector: 'page-perfiladvogado',
  templateUrl: 'perfiladvogado.html',
})
export class PerfiladvogadoPage {

  public advogado: Advogado;
  public idiomas = [
    { idioma: 'Inglês', checked: false },
    { idioma: 'Espanhol', checked: false },
    { idioma: 'Italiano', checked: false },
    { idioma: 'Francês', checked: false },
    { idioma: 'Alemão', checked: false }
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private advProvider: AdvogadoProvider) {
    this.advogado = this.advProvider.advogadoLogado;
    console.log(this.advogado);
  }

  efetuaAlteracao() {
    let idiomasSelecionados = this.idiomas.filter(idioma => idioma.checked == true);
    this.advogado.idiomas = idiomasSelecionados.map(function (obj) { return obj.idioma; }).join(', '); // returns the expected output.
    this.navCtrl.setRoot(ListarAssPage);
  }
}
