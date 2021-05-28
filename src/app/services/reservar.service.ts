import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../models/evento.model';
import { Reservacion } from '../models/reservacion.model';
import { GLOBAL } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class ReservarService {

  public token;
  public ruta:String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json')

  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url
   }

   obtenerToken(){
    var token2 = localStorage.getItem('token')
    if(token2 != 'undefined'){
      this.token = token2
    }else{
      this.token = null
    }

    return this.token
  }

   obtenerHabitacionH(evento:Evento,token, id:String):Observable<any> {

    let params = JSON.stringify(evento)
    let headersToken = this.headersVariable.set('Authorization',token)
    return this._http.post(this.ruta + 'Reservar/' + id , params, {headers:headersToken})
   }

   obtenerReservacion(token):Observable<any> {

    let headersToken = this.headersVariable.set('Authorization',token)
    return this._http.get(this.ruta + 'VerReservaciones',{headers:headersToken})
   }

   reservarHabitacion(token,reservacion:Reservacion, id:String):Observable<any> {
     let headersToken = this.headersVariable.set('Authorization',token)
     let params = JSON.stringify(reservacion);
     return this._http.post(this.ruta + 'Reservar/' + id, params, {headers:headersToken})
   }

   verReservacionCliente(token):Observable<any> {
     let headersToken = this.headersVariable.set('Authorization',token)
     return this._http.get(this.ruta + 'ReservacionCliente' , {headers:headersToken})
   }

   obtenerReservacionID(id:String): Observable<any>{
     let headersToken = this.headersVariable.set('Authorization',this.obtenerToken())
    return this._http.get(this.ruta + 'obtenerReservacion/'+ id, {headers: headersToken})
  }

   eliminarReservacion(id:String,token):Observable<any> {
     let headersToken = this.headersVariable.set('Authorization',token);
     return this._http.delete(this.ruta + 'CancelarReservacion/' + id , {headers:headersToken})
   }


   agregarServicioR(modeloServicio, token):Observable<any> {
    let headersToken = this.headersVariable.set('Authorization',token)
    let params = JSON.stringify(modeloServicio);
    return this._http.put(this.ruta + 'actualizarServicio' , params, {headers:headersToken})
   }

}
