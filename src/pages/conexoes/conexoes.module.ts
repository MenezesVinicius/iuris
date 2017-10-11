import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConexoesPage } from './conexoes';

@NgModule({
  declarations: [
    ConexoesPage,
  ],
  imports: [
    IonicPageModule.forChild(ConexoesPage),
  ],
})
export class ConexoesPageModule {}
