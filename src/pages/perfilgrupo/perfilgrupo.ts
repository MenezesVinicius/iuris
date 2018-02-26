import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Associados } from '../../providers/associados/grupo';
import { AssociadosProvider } from '../../providers/associados/associados';
import { ListarAdvPage } from '../listar-adv/listar-adv';

@Component({
  selector: 'page-perfilgrupo',
  templateUrl: 'perfilgrupo.html',
})
export class PerfilgrupoPage {
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
    private assProvider: AssociadosProvider) {
      this.grupo = this.assProvider.grupoLogado;
      this.areas.forEach(area => {
        if(this.grupo.areas.indexOf(area.area) > -1){
          area.checked = true;
        }
      });
  }

  efetuaAlteracao() {
    let areasSelecionadas = this.areas.filter(area => area.checked == true);
    this.grupo.areas =  areasSelecionadas.map(function(obj){return obj.area;}).join(', '); // returns the expected output.
    console.log(this.grupo);
    
    //this.navCtrl.setRoot(ListarAdvPage);
  }
}
