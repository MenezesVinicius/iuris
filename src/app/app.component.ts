import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TipousuarioPage } from '../pages/tipousuario/tipousuario';
import { PerfiladvogadoPage } from '../pages/perfiladvogado/perfiladvogado';
import { PerfilgrupoPage } from '../pages/perfilgrupo/perfilgrupo';
import { ConexoesPage } from '../pages/conexoes/conexoes';
import { ListarAssPage } from '../pages/listar-ass/listar-ass';
import { ListarAdvPage } from '../pages/listar-adv/listar-adv';
import { ConexoesAssPage } from '../pages/conexoes-ass/conexoes-ass';
import { ProcurarAssPage } from '../pages/procurar-ass/procurar-ass';
import { ProcurarAdvPage } from '../pages/procurar-adv/procurar-adv';
import { TinderAssPage } from '../pages/tinder-ass/tinder-ass';
import { TinderAdvPage } from '../pages/tinder-adv/tinder-adv';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TipousuarioPage;

  public paginas = [];

  @ViewChild(Nav) public nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, events: Events) {
    events.subscribe('tipoLogado', tipo => {
      if(tipo == 'grupo'){
        this.paginas = [];
        this.paginas.push({ titulo: 'Perfil', componente: PerfilgrupoPage });
        this.paginas.push({ titulo: 'Lista de Advogados', componente: ListarAdvPage }); 
        this.paginas.push({ titulo: 'Modo #descubra', componente: TinderAdvPage });         
        this.paginas.push({ titulo: 'Pesquisar', componente: ProcurarAdvPage }); 
        this.paginas.push({ titulo: 'Conexões', componente: ConexoesAssPage }); 
      }
      else if(tipo == 'advogado'){
        this.paginas = [];
        this.paginas.push({ titulo: 'Perfil', componente: PerfiladvogadoPage });
        this.paginas.push({ titulo: 'Lista de Associados', componente: ListarAssPage });   
        this.paginas.push({ titulo: 'Modo #descubra', componente: TinderAssPage });                 
        this.paginas.push({ titulo: 'Pesquisar', componente: ProcurarAssPage }); 
        this.paginas.push({ titulo: 'Conexões', componente: ConexoesPage });         
      }
   })

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  abrePagina(pagina) {
    this.nav.setRoot(pagina.componente);
  }

  sair() {
    this.nav.setRoot(TipousuarioPage);
  }
}

