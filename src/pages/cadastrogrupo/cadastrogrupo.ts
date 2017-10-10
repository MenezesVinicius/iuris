import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LogingrupoPage } from '../logingrupo/logingrupo';
import { Associados } from '../../providers/associados/grupo';
import { AssociadosProvider } from '../../providers/associados/associados';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    private assProvider: AssociadosProvider) {
    this.grupo = new Associados();
  }

  efetuaCadastro() {
    let areasSelecionadas = this.areas.filter(area => area.checked == true);
    this.grupo.areas =  areasSelecionadas.map(function(obj){return obj.area;}).join(', '); // returns the expected output.
    this.assProvider.cadastrarGrupo(this.grupo);
    this.events.publish('tipoLogado', 'grupo');
    this.navCtrl.setRoot(HomePage);
  }

  gotoLogin() {
    this.assProvider.logarGrupo(this.grupo);
    this.navCtrl.pop();
  }
}
