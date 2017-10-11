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
        this.grupoLogado = JSON.parse(this.data.response);
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

  setInteresse(id_advogado: number, id_associado: number){
    var link = 'http://vmenezes-com.umbler.net/setInteresse.php';
    let hdrs = new Headers();
    hdrs.append('Content-Type', "application/json");
    let options = new RequestOptions({ headers: hdrs });
    let data = {
      tipo: 'associado',
      id_advogado: id_advogado,
      id_associado: id_associado
    }
    let dataJson = JSON.stringify(data);
    console.log(dataJson);

    return this.http.post(link, data, options)
      .subscribe(data => {
        this.data.response = data["_body"];
        let response = JSON.parse(this.data.response);
        console.log(response);        
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
