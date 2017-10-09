import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarAssPage } from './listar-ass';

@NgModule({
  declarations: [
    ListarAssPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarAssPage),
  ],
})
export class ListarAssPageModule {}
