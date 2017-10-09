import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Advogado } from './adv';

@Injectable()
export class AdvogadoProvider {
  data: any = {};
  public advogadoLogado: Advogado;

  constructor(public http: Http) {
    this.data.response = '';
    this.advogadoLogado = new Advogado();
  }

  cadastrarAdvogado(advogado: Advogado) {
    var link = 'http://vmenezes-com.umbler.net/cadastroAdvogado.php';
    let hdrs = new Headers();
    hdrs.append('Content-Type', "application/json");
    let options = new RequestOptions({ headers: hdrs });
    var data = JSON.stringify(advogado);
    console.log(data);

    return this.http.post(link, data, options)
      .subscribe(data => {
        this.data.response = data["_body"];
        console.log(this.data.response);
        this.advogadoLogado = advogado;
      }, error => {
        console.log("Oooops!");
      });
  }

  logarAdvogado(advogado: Advogado) {
    var link = 'http://vmenezes-com.umbler.net/logarAdvogado.php';
    let hdrs = new Headers();
    hdrs.append('Content-Type', "application/json");
    let options = new RequestOptions({ headers: hdrs });
    var data = JSON.stringify(advogado);
    console.log(data);

    return this.http.post(link, data, options)
      .subscribe(data => {
        this.data.response = data["_body"];
        this.advogadoLogado = JSON.parse(this.data.response);
        console.log(this.advogadoLogado);        
      }, error => {
        console.log("Oooops!");
      });
  }

  getAdvogadoLogado(): Advogado {
    console.log(this.advogadoLogado);
    return this.advogadoLogado;
  }
}
