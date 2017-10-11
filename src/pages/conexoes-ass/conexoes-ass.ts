import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Associados } from '../../providers/associados/grupo';
import { Advogado } from '../../providers/advogado/adv';
import { AssociadosProvider } from '../../providers/associados/associados';
import { SelecionadoAdvPage } from '../selecionado-adv/selecionado-adv';

@Component({
  selector: 'page-conexoes-ass',
  templateUrl: 'conexoes-ass.html',
})
export class ConexoesAssPage {
  associado: Associados;
  advogados: Advogado[];
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private assProvider: AssociadosProvider) {
      this.associado = this.assProvider.getGrupoLogado();
      this.assProvider.getConexoes(this.associado.id)
      .then(dados => {
        console.log(dados);
        this.advogados = dados;
      });
  }

  selecionaAdv(advogado: Advogado){
    console.log(advogado);
    this.navCtrl.push(SelecionadoAdvPage, { advSelecionado: advogado, fromConexoes: 1 });
  }
}
