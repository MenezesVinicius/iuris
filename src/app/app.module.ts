import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { TipousuarioPage } from '../pages/tipousuario/tipousuario';
import { LogingrupoPage } from '../pages/logingrupo/logingrupo';
import { CadastrogrupoPage } from '../pages/cadastrogrupo/cadastrogrupo';
import { PerfiladvogadoPage } from '../pages/perfiladvogado/perfiladvogado';
import { AdvogadoProvider } from '../providers/advogado/advogado';
import { AssociadosProvider } from '../providers/associados/associados';
import { PerfilgrupoPage } from '../pages/perfilgrupo/perfilgrupo';

@NgModule({
  declarations: [
    MyApp,
    TipousuarioPage,
    HomePage,
    LoginPage,
    LogingrupoPage,
    CadastroPage,
    CadastrogrupoPage,
    PerfiladvogadoPage,
    PerfilgrupoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TipousuarioPage,
    HomePage,
    LoginPage,
    LogingrupoPage,
    CadastroPage,
    CadastrogrupoPage,
    PerfiladvogadoPage,
    PerfilgrupoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AdvogadoProvider,
    AssociadosProvider
  ]
})
export class AppModule {}
