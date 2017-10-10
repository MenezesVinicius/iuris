import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar, App } from 'ionic-angular';
import { Associados } from '../../providers/associados/grupo';
import { AdvogadoProvider } from '../../providers/advogado/advogado';
import { AssociadosProvider } from '../../providers/associados/associados';
import { SelecionadoAssPage } from '../selecionado-ass/selecionado-ass';
import { ProcurarAssPage } from '../procurar-ass/procurar-ass';

@Component({
  selector: 'page-resultado-ass',
  templateUrl: 'resultado-ass.html',
})
export class ResultadoAssPage {
  @ViewChild(Navbar) navBar: Navbar;
  dadosPesquisa: any;
  associados: Associados[];
  associadosPesquisa: Associados[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private assProvider: AssociadosProvider,
    private app: App) {
    this.dadosPesquisa = navParams.data;

    this.assProvider.getAssociados()
      .then(dados => {
        console.log(this.dadosPesquisa);
        this.associados = dados;
        if (this.dadosPesquisa.empresa != undefined) {
          this.associadosPesquisa = this.associados.filter(ass => ass.nome.toLowerCase().indexOf(this.dadosPesquisa.empresa.toLowerCase()) > -1);
        }
        if (this.dadosPesquisa.area != undefined) {
          if (this.associadosPesquisa != undefined) {
            this.associadosPesquisa = this.associadosPesquisa.filter(ass => ass.areas.toLowerCase().indexOf(this.dadosPesquisa.area.toLowerCase()) > -1);
          }
          else {
            this.associadosPesquisa = this.associados.filter(ass => ass.areas.toLowerCase().indexOf(this.dadosPesquisa.area.toLowerCase()) > -1);
          }
        }

        console.log(this.associadosPesquisa);
      });
  }

  ionViewDidLoad() {
    this.navBar.backButtonClick = (e: UIEvent) => {
      console.log("Back button clicked");
      this.navCtrl.parent.viewCtrl.dismiss();
    };
  }

  selecionadoAss(associado: Associados){
    this.app.getRootNav().push(SelecionadoAssPage, { assSelecionado: associado });   
  }
}
