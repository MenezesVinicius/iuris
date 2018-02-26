import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatAdvPage } from './chat-adv';

@NgModule({
  declarations: [
    ChatAdvPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatAdvPage),
  ],
})
export class ChatAdvPageModule {}
