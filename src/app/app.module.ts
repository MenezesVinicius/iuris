import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { TipousuarioPage } from '../pages/tipousuario/tipousuario';
import { LogingrupoPage } from '../pages/logingrupo/logingrupo';
import { CadastrogrupoPage } from '../pages/cadastrogrupo/cadastrogrupo';
import { PerfiladvogadoPage } from '../pages/perfiladvogado/perfiladvogado';
import { AdvogadoProvider } from '../providers/advogado/advogado';
import { AssociadosProvider } from '../providers/associados/associados';
import { PerfilgrupoPage } from '../pages/perfilgrupo/perfilgrupo';
import { TabsAdvogadoPage } from '../pages/tabs-advogado/tabs-advogado';
import { AreaAssPage } from '../pages/area-ass/area-ass';
import { ProcurarAssPage } from '../pages/procurar-ass/procurar-ass';
import { ListarAssPage } from '../pages/listar-ass/listar-ass';
import { SelecionadoAssPage } from '../pages/selecionado-ass/selecionado-ass';
import { ResultadoAssPage } from '../pages/resultado-ass/resultado-ass';
import { ConexoesPage } from '../pages/conexoes/conexoes';
import { GpsProvider } from '../providers/gps/gps';
import { ListarAdvPage } from '../pages/listar-adv/listar-adv';
import { SelecionadoAdvPage } from '../pages/selecionado-adv/selecionado-adv';
import { ProcurarAdvPage } from '../pages/procurar-adv/procurar-adv';
import { ResultadoAdvPage } from '../pages/resultado-adv/resultado-adv';
import { AreaAdvPage } from '../pages/area-adv/area-adv';
import { TabsAssociadosPage } from '../pages/tabs-associados/tabs-associados';
import { ConexoesAssPage } from '../pages/conexoes-ass/conexoes-ass';
import { ChatAssPage } from '../pages/chat-ass/chat-ass';
import { ChatAdvPage } from '../pages/chat-adv/chat-adv';
import { TinderAssPage } from '../pages/tinder-ass/tinder-ass';
import { TinderAdvPage } from '../pages/tinder-adv/tinder-adv';

@NgModule({
  declarations: [
    MyApp,
    TipousuarioPage,
    LoginPage,
    LogingrupoPage,
    CadastroPage,
    CadastrogrupoPage,
    PerfiladvogadoPage,
    PerfilgrupoPage,
    TabsAdvogadoPage,
    AreaAssPage,
    ProcurarAssPage,
    ListarAssPage,
    SelecionadoAssPage,
    ResultadoAssPage,
    ConexoesPage,
    ListarAdvPage,
    ProcurarAdvPage,
    SelecionadoAdvPage,
    TabsAssociadosPage,
    AreaAdvPage,
    ResultadoAdvPage,
    ConexoesAssPage,
    ChatAssPage,
    ChatAdvPage,
    TinderAssPage,
    TinderAdvPage
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
    LoginPage,
    LogingrupoPage,
    CadastroPage,
    CadastrogrupoPage,
    PerfiladvogadoPage,
    PerfilgrupoPage,
    TabsAdvogadoPage,
    AreaAssPage,
    ProcurarAssPage,
    ListarAssPage,
    SelecionadoAssPage,
    ResultadoAssPage,
    ConexoesPage,
    ListarAdvPage,
    ProcurarAdvPage,
    SelecionadoAdvPage,
    TabsAssociadosPage,
    AreaAdvPage,
    ResultadoAdvPage,
    ConexoesAssPage,
    ChatAssPage,
    ChatAdvPage,
    TinderAssPage,
    TinderAdvPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AdvogadoProvider,
    AssociadosProvider,
    GpsProvider
  ]
})
export class AppModule {}
