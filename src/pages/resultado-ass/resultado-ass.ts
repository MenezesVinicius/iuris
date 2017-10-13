import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar, App } from 'ionic-angular';
import { Associados } from '../../providers/associados/grupo';
import { AdvogadoProvider } from '../../providers/advogado/advogado';
import { AssociadosProvider } from '../../providers/associados/associados';
import { SelecionadoAssPage } from '../selecionado-ass/selecionado-ass';
import { ProcurarAssPage } from '../procurar-ass/procurar-ass';
import { GpsProvider } from '../../providers/gps/gps';

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
    private gpsProvider: GpsProvider,
    private app: App) {
    this.dadosPesquisa = navParams.data;
  }

  ionViewDidLoad() {
    this.navBar.backButtonClick = (e: UIEvent) => {
      console.log("Back button clicked");
      this.navCtrl.parent.viewCtrl.dismiss();
    };

    this.assProvider.getAssociados()
      .then(dados => {
        this.associados = dados;
        console.log(dados); 
        console.log(this.dadosPesquisa);         
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

        if (this.dadosPesquisa.numEquipe != undefined) {
          if (this.associadosPesquisa != undefined) {
            this.associadosPesquisa = this.associadosPesquisa.filter(ass => ass.numEquipe <= this.dadosPesquisa.numEquipe);
          }
          else {
            this.associadosPesquisa = this.associados.filter(ass => ass.numEquipe <= this.dadosPesquisa.numEquipe);
          }
        }

        if (this.dadosPesquisa.distancia != undefined) {
          if (this.associadosPesquisa != undefined) {
            let distancia = this.dadosPesquisa.distancia * 1000;
            let result = [];
            this.associadosPesquisa.forEach(ass => {
              let endereco = ass.rua + ',' + ass.numero + ',' + ass.bairro;
              // deveria pegar o endereco do advogado
              this.gpsProvider.getDistance('', endereco)
                .then(dist => {
                  if (dist < distancia) {
                    console.log(this.associadosPesquisa);
                    result.push(ass);
                  }
                })
            });
            this.associadosPesquisa = result;
            console.log(this.associadosPesquisa);
          }
          else {
            let distancia = this.dadosPesquisa.distancia * 1000;
            let result = [];
            this.associados.forEach(ass => {
              let endereco = ass.rua + ',' + ass.numero + ',' + ass.bairro;
              // deveria pegar o endereco do advogado
              this.gpsProvider.getDistance('', endereco)
                .then(dist => {
                  if (dist < distancia) {
                    console.log(this.associadosPesquisa);
                    result.push(ass);
                  }
                })
            });
            this.associadosPesquisa = result;
            console.log(this.associadosPesquisa);

          }
        }

        if (this.associadosPesquisa == undefined) {
          this.associadosPesquisa = this.associados;
        }
      });
  }

  selecionaAss(associado: Associados) {
    this.app.getRootNav().push(SelecionadoAssPage, { assSelecionado: associado });
  }
}
