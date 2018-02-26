import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar, App, LoadingController, Loading } from 'ionic-angular';
import { Advogado } from '../../providers/advogado/adv';
import { AdvogadoProvider } from '../../providers/advogado/advogado';
import { GpsProvider } from '../../providers/gps/gps';
import { SelecionadoAdvPage } from '../selecionado-adv/selecionado-adv';

@Component({
  selector: 'page-resultado-adv',
  templateUrl: 'resultado-adv.html',
})
export class ResultadoAdvPage {
  @ViewChild(Navbar) navBar: Navbar;
  dadosPesquisa: any;
  advogados: Advogado[];
  advogadosPesquisa: Advogado[];
  loading: Loading;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private advProvider: AdvogadoProvider,
    private gpsProvider: GpsProvider,
    private app: App) {
    this.dadosPesquisa = navParams.data;
  }

  showLoading() {
    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }

  ionViewDidLoad() {
    this.navBar.backButtonClick = (e: UIEvent) => {
      console.log("Back button clicked");
      this.navCtrl.parent.viewCtrl.dismiss();
    };

    this.showLoading();

    this.advProvider.getAdvogados()
      .then(dados => {
        this.advogados = dados;
        if (this.dadosPesquisa.area != undefined) {
          this.advogadosPesquisa = this.advogados.filter(adv => adv.area != null);
          if (this.advogadosPesquisa != undefined) {
            this.advogadosPesquisa = this.advogadosPesquisa.filter(adv => adv.area.toLowerCase().indexOf(this.dadosPesquisa.area.toLowerCase()) > -1);
          }
          else {
            this.advogadosPesquisa = this.advogados.filter(adv => adv.area.toLowerCase().indexOf(this.dadosPesquisa.area.toLowerCase()) > -1);
          }
        }

        if (this.dadosPesquisa.nivel != undefined) {
          if (this.advogadosPesquisa != undefined) {
            this.advogadosPesquisa = this.advogadosPesquisa.filter(adv => adv.nivel.toLowerCase().indexOf(this.dadosPesquisa.nivel.toLowerCase()) > -1);
          }
          else {
            this.advogadosPesquisa = this.advogados.filter(adv => adv.nivel.toLowerCase().indexOf(this.dadosPesquisa.nivel.toLowerCase()) > -1);
          }
        }

        if (this.dadosPesquisa.idioma != undefined) {
          if (this.advogadosPesquisa != undefined) {
            this.advogadosPesquisa = this.advogadosPesquisa.filter(adv => adv.idiomas != null);
            this.advogadosPesquisa = this.advogadosPesquisa.filter(adv => adv.idiomas.toLowerCase().indexOf(this.dadosPesquisa.idioma.toLowerCase()) > -1);
          }
          else {
            this.advogadosPesquisa = this.advogados.filter(adv => adv.idiomas != null);
            if (this.advogadosPesquisa != undefined) {
              this.advogadosPesquisa = this.advogadosPesquisa.filter(adv => adv.idiomas.toLowerCase().indexOf(this.dadosPesquisa.idioma.toLowerCase()) > -1);
            }
          }
          console.log(this.advogadosPesquisa);
        }

        if (this.dadosPesquisa.distancia != undefined) {
          if (this.advogadosPesquisa != undefined) {
            let distancia = this.dadosPesquisa.distancia * 1000;
            let result = [];
            this.advogadosPesquisa.forEach(ass => {
              console.log(ass.rua, ass.numero);
              if (ass.rua != null && ass.numero != null) {
                let endereco = ass.rua + ',' + ass.numero + ',' + ass.bairro;
                // deveria pegar o endereco do advogado
                this.gpsProvider.getDistance('', endereco)
                  .then(dist => {
                    if (dist < distancia) {
                      console.log(this.advogadosPesquisa);
                      result.push(ass);
                    }
                  })
              }
            });

            this.advogadosPesquisa = result;
            console.log(this.advogadosPesquisa);

          }
          else {
            let distancia = this.dadosPesquisa.distancia * 1000;
            let result = [];
            this.advogados.forEach(ass => {
              console.log(ass.rua, ass.numero);
              if (ass.rua != null && ass.numero != null) {
                let endereco = ass.rua + ',' + ass.numero + ',' + ass.bairro;
                // deveria pegar o endereco do advogado
                this.gpsProvider.getDistance('', endereco)
                  .then(dist => {
                    if (dist < distancia) {
                      console.log(this.advogadosPesquisa);
                      result.push(ass);
                    }
                  })
              }
            });
            this.advogadosPesquisa = result;
            console.log(this.advogadosPesquisa);

          }
          console.log(this.advogadosPesquisa);
        }

        if (this.advogadosPesquisa == undefined) {
          this.advogadosPesquisa = this.advogados;
        }

        this.loading.dismiss();
      }, err => this.loading.dismiss());
  }

  selecionaAdv(advogado: Advogado) {
    this.app.getRootNav().push(SelecionadoAdvPage, { advSelecionado: advogado });
  }
}
