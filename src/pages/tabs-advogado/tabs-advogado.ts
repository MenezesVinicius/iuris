import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ListarAssPage } from '../listar-ass/listar-ass';
import { AreaAssPage } from '../area-ass/area-ass';
import { ProcurarAssPage } from '../procurar-ass/procurar-ass';

@Component({
  selector: 'page-tabs-advogado',
  templateUrl: 'tabs-advogado.html'
})
export class TabsAdvogadoPage {

  listarAssRoot: any = ListarAssPage
  procurarAssRoot: any = ProcurarAssPage
  areaAssRoot: any = AreaAssPage

  constructor(public navCtrl: NavController) {}

}
