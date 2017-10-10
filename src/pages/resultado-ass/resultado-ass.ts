import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar } from 'ionic-angular';

@Component({
  selector: 'page-resultado-ass',
  templateUrl: 'resultado-ass.html',
})
export class ResultadoAssPage {
  @ViewChild(Navbar) navBar:Navbar;
  empresa: String;
  area: String;
  distancia: number;
  numEquipe: number
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
      console.log('Passed params', navParams.data);
  }

  ionViewDidLoad() {
    this.navBar.backButtonClick = (e: UIEvent) => {
      console.log("Back button clicked");
      this.navCtrl.parent.viewCtrl.dismiss();
    };
  }

}
