import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar } from 'ionic-angular';
import { GpsProvider } from '../../providers/gps/gps';
import { Associados } from '../../providers/associados/grupo';
import { AssociadosProvider } from '../../providers/associados/associados';

@Component({
  selector: 'page-area-ass',
  templateUrl: 'area-ass.html',
})
export class AreaAssPage {
  @ViewChild(Navbar) navBar: Navbar;
  dadosPesquisa: any;
  associados: Associados[];
  associadosPesquisa: Associados[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private gpsProvider: GpsProvider,
    private assProvider: AssociadosProvider) {
    this.dadosPesquisa = navParams.data;
    this.assProvider.getAssociados()
      .then(dados => {
        this.associados = dados;

        if (this.dadosPesquisa.distancia != undefined) {
          this.associadosPesquisa = this.associados.filter(
            ass => {
              // endereco do associado
              let endereco = ass.rua + ',' + ass.numero + ',' + ass.bairro;
              // deveria pegar o endereco do advogado
              return (this.gpsProvider.getDistance('', endereco) < this.dadosPesquisa.distancia);
            }
          );
        }
      });
  }

  ionViewDidLoad() {
    this.navBar.backButtonClick = (e: UIEvent) => {
      this.navCtrl.parent.viewCtrl.dismiss();
    };
  }

}
