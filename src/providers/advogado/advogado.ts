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
        this.advogadoLogado = JSON.parse(this.data.response);
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

  setInteresse(id_advogado: number, id_associado: number){
    var link = 'http://vmenezes-com.umbler.net/setInteresse.php';
    let hdrs = new Headers();
    hdrs.append('Content-Type', "application/json");
    let options = new RequestOptions({ headers: hdrs });
    let data = {
      tipo: 'advogado',
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

  getAdvogadoLogado(): Advogado {
    console.log(this.advogadoLogado);
    return this.advogadoLogado;
  }

  getAdvogados(){
    var link = 'http://vmenezes-com.umbler.net/getAdvogados.php'
    return this.http
      .get(link)
      .map(res => res.json())
      .toPromise()
      .then(dados => {
        return dados;
      })
  }

  getConexoes(id_advogado: number){
    var link = 'http://vmenezes-com.umbler.net/getConexoes.php?id_advogado=' + id_advogado + '&tipo=advogado';
    return this.http
      .get(link)
      .map(res => res.json())
      .toPromise()
      .then(dados => {
        return dados;
      })
  }
}
