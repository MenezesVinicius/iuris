import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TipousuarioPage } from '../pages/tipousuario/tipousuario';
import { PerfiladvogadoPage } from '../pages/perfiladvogado/perfiladvogado';
import { PerfilgrupoPage } from '../pages/perfilgrupo/perfilgrupo';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TipousuarioPage;

  public paginas = [];

  @ViewChild(Nav) public nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, events: Events) {
    events.subscribe('tipoLogado', tipo => {
      console.log('Tipo:' + tipo);      
      if(tipo == 'grupo'){
        this.paginas = [];
        this.paginas.push({ titulo: 'Perfil', componente: PerfilgrupoPage });
      }
      else if(tipo == 'advogado'){
        this.paginas = [];
        this.paginas.push({ titulo: 'Perfil', componente: PerfiladvogadoPage });
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
    this.nav.push(pagina.componente);
  }

  sair() {
    this.nav.setRoot(TipousuarioPage);
  }
}

