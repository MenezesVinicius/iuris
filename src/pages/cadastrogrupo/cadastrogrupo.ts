import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Loading, LoadingController, AlertController } from 'ionic-angular';
import { LogingrupoPage } from '../logingrupo/logingrupo';
import { Associados } from '../../providers/associados/grupo';
import { AssociadosProvider } from '../../providers/associados/associados';
import { ListarAdvPage } from '../listar-adv/listar-adv';

@Component({
  selector: 'page-cadastrogrupo',
  templateUrl: 'cadastrogrupo.html',
})
export class CadastrogrupoPage {

  public grupo: Associados;
  public areas = [
    { area: 'Trabalhista', checked: false },
    { area: 'Trânsito', checked: false },
    { area: 'Consumidor', checked: false },
    { area: 'Família', checked: false },
    { area: 'Penal', checked: false },
    { area: 'Contratos', checked: false },
    { area: 'Empresarial', checked: false },
    { area: 'Ambiental', checked: false },
    { area: 'Tributário', checked: false },
    { area: 'Administrativo', checked: false },
    { area: 'Outro', checked: false }
  ];
  loading: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    private assProvider: AssociadosProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController) {

    this.grupo = new Associados();
  }

  efetuaCadastro() {
    let areasSelecionadas = this.areas.filter(area => area.checked == true);
    this.grupo.areas = areasSelecionadas.map(function (obj) { return obj.area; }).join(', '); // returns the expected output.
    this.showLoading();
    this.assProvider.cadastrarGrupo(this.grupo)
      .then(data => {
        if (data == '[]') {
          this.showError();
        }
        else {
          this.events.publish('tipoLogado', 'grupo');
          this.navCtrl.setRoot(ListarAdvPage);
        }
      });
  }

  gotoLogin() {
    this.assProvider.logarGrupo(this.grupo);
    this.navCtrl.pop();
  }

  showError() {
    this.loading.dismiss();
    this.alertCtrl.create({
      title: 'Cadastro',
      subTitle: 'Falha ao cadastrar, tente novamente.',
      buttons: [{ text: 'OK' }]
    }).present();
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Cadastrando...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
}
