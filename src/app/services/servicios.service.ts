import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from '../models/servicio.model';
import { GLOBAL } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  public ruta: string
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json')

  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url
   }

   agregarServicio(servicio:Servicio,token):Observable<any> {
     let params = JSON.stringify(servicio)
     let headersToken = this.headersVariable.set('Authorization',token)
     return this._http.post(this.ruta + 'AgregarServicio', params, {headers:headersToken})
   }

   addServicio(servicio:Servicio,token,id):Observable<any> {
    let params = JSON.stringify(servicio)
    let headersToken = this.headersVariable.set('Authorization',token)
    return this._http.post(this.ruta + 'addServicio/' + id, params, {headers:headersToken})
  }

  obtenerServicios(id:string):Observable<any> {

    return this._http.get(this.ruta + 'servicios/' + id, {headers:this.headersVariable})
  }
}
