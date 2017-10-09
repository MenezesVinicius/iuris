import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TipousuarioPage } from '../pages/tipousuario/tipousuario';
import { PerfiladvogadoPage } from '../pages/perfiladvogado/perfiladvogado';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TipousuarioPage;

  public paginas = [
    { titulo: 'Perfil', componente: PerfiladvogadoPage }
  ];

  @ViewChild(Nav) public nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
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

