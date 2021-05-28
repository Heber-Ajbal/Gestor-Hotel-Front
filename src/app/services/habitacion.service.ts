import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habitacion } from '../models/habitacion.model';
import { GLOBAL } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {


  public ruta:String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json')

  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url
   }

   agregarHabitaicion(habitacion:Habitacion, token) {

    let params = JSON.stringify(habitacion)
    let headersToken = this.headersVariable.set('Authorization',token)
    return this._http.post(this.ruta + 'AgregarHabitacion', params,{headers:headersToken})
   }

   obtenerHabitacion(token, id:String):Observable<any> {
     let headersToken = this.headersVariable.set('Authorization',token)

     return this._http.get(this.ruta + 'BuscarHabitacion/' + id , {headers:headersToken})
   }

   obtenerHabitacionDis(token):Observable<any> {
     let headersToken = this.headersVariable.set('Authorization',token)
     return this._http.get(this.ruta + 'HabitacionesDisponibles', {headers:headersToken})
   }

   obtenerHabitacionID(token, id:String):Observable<any>{
     let headersToken = this.headersVariable.set('Authorization',token);
     return this._http.get(this.ruta + 'buscarHabitacionID/' + id, {headers:headersToken})
   }

   obtenerReporte(token, id:String):Observable<any> {
     let headersToken = this.headersVariable.set('Authorization',token)
     return this._http.get(this.ruta + 'MostrarReporte/' + id, {headers:headersToken})
   }

   agregarHabitaicionID(habitacion:Habitacion, token,id) {

    let params = JSON.stringify(habitacion)
    let headersToken = this.headersVariable.set('Authorization',token)
    return this._http.post(this.ruta + 'addHabitacion/' + id, params,{headers:headersToken})
   }
}
