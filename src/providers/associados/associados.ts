import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Associados } from './grupo';

@Injectable()
export class AssociadosProvider {
  data: any = {};
  public grupoLogado: Associados;


  constructor(public http: Http) {
    this.data.response = '';
    this.grupoLogado = new Associados();
  }

  cadastrarGrupo(grupo: Associados) {
    var link = 'http://vmenezes-com.umbler.net/cadastroAssociados.php';
    let hdrs = new Headers();
    hdrs.append('Content-Type', "application/json");
    let options = new RequestOptions({ headers: hdrs });
    var data = JSON.stringify(grupo);
    console.log(data);

    return this.http.post(link, data, options)
      .subscribe(data => {
        this.data.response = data["_body"];
        console.log(this.data.response);
        this.grupoLogado = grupo;
      }, error => {
        console.log("Oooops!");
      });
  }


  logarGrupo(grupo: Associados) {
    var link = 'http://vmenezes-com.umbler.net/logarAssociados.php';
    let hdrs = new Headers();
    hdrs.append('Content-Type', "application/json");
    let options = new RequestOptions({ headers: hdrs });
    var data = JSON.stringify(grupo);
    console.log(data);

    return this.http.post(link, data, options)
      .subscribe(data => {
        this.data.response = data["_body"];
        this.grupoLogado = JSON.parse(this.data.response);
        console.log(this.grupoLogado);
      }, error => {
        console.log("Oooops!");
      });
  }

  getGrupoLogado(): Associados {
    console.log(this.grupoLogado);
    return this.grupoLogado;
  }

  getAssociados() {
    var link = 'http://vmenezes-com.umbler.net/getAssociados.php'
    return this.http
      .get(link)
      .map(res => res.json())
      .toPromise()
      .then(dados => {
        return dados;
      })

  }
}
