import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../models/hotel.model';
import { GLOBAL } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class HotelService {


  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }

  public ruta:String
  public headersVariable = new HttpHeaders().set('Content-Type','application/json')

  filtroHotel: '';

  constructor(public _http:HttpClient) {
    this.ruta = GLOBAL.url
   }

   obtenerHoteles():Observable<any> {

    return this._http.get(this.ruta + 'obtenerHoteles', { headers: this.headersVariable})
   }

   obtenerHotelID(id:string,token):Observable<any> {

    let headersToken = this.headersVariable.set('Authorization',token)
    return this._http.get(this.ruta + 'BuscarHotelID/' + id, {headers: headersToken})
   }

   AgregarHotel(hotel:Hotel, token):Observable<any>{

    let params = JSON.stringify(hotel);
    let headersToken = this.headersVariable.set('Authorization',token)
    return this._http.post(this.ruta + 'AgregarHotel', params, {headers: headersToken})
   }

   obtenerHuesped(token):Observable<any> {
     let headersToken = this.headersVariable.set('Authorization',token)
     return this._http.get(this.ruta + 'huesped' , {headers:headersToken})
   }

   obtenerEstadistica(token):Observable<any> {
     let headersToken = this.headersVariable.set('Authorization',token)
     return this._http.get(this.ruta + 'Estadisticas' , {headers: headersToken})
   }


   obtenerHotelesFilt():Observable<any> {

    return this._http.get(this.ruta + `obtenerHoteles`, { headers: this.headersVariable}).pipe(map(this.extractData))
   }

   editarHotel(id:String, token, hotel:Hotel):Observable<any> {

    let params = JSON.stringify(hotel)
    let headersToken = this.headersVariable.set('Authorization',token)
    return this._http.put(this.ruta + 'EditarHotel/' + id, params, { headers: headersToken})
   }

   eliminarHotel(id:String, token):Observable<any> {
     let headersToken = this.headersVariable.set('Authorization',token)
     return this._http.delete(this.ruta + 'EliminarHot/' + id , {headers:headersToken} )
   }

}
