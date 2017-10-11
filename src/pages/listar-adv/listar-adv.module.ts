import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarAdvPage } from './listar-adv';

@NgModule({
  declarations: [
    ListarAdvPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarAdvPage),
  ],
})
export class ListarAdvPageModule {}
