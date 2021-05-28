import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../models/evento.model';
import { GLOBAL } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  public ruta:String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url
   }

   BuscarEventos(token, idEven:String):Observable<any> {

    let headersToken = this.headersVariable.set('Authorization',token);
    return this._http.get(this.ruta + 'BuscarEventos/' + idEven , {headers:headersToken})
   }

   agregarEvento(evento:Evento, token):Observable<any> {
     let params = JSON.stringify(evento)
     let headersToken = this.headersVariable.set('Authorization',token)
     return this._http.post(this.ruta + 'agregarEventoH', params, {headers:headersToken})
   }

   agregarEventoID(evento:Evento, token,id):Observable<any> {
    let params = JSON.stringify(evento)
    let headersToken = this.headersVariable.set('Authorization',token)
    return this._http.post(this.ruta + 'agregarEvento/' + id, params, {headers:headersToken})
  }
}
