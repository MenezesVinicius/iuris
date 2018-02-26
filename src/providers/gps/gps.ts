import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GpsProvider {
  data: any = {};
  link: string = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=";
  key: string = "AIzaSyCqizHqAcI5mYqYh2I0ki4v-BRlZYGcVWM";

  constructor(
    public http: Http) {
    this.data.response = '';
  }

  getDistance(Origem, Destino) {
    Origem = "-27.548256, -48.498130";
    let url = this.link + Origem + '&destinations=' + Destino;
    return this.http
      .get(url)
      .map(res => res.json())
      .toPromise()
      .then(dados => {
        console.log(dados);
        return dados.rows[0].elements[0].distance.value;
      })
  }
}
