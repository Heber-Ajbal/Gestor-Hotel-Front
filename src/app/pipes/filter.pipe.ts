import { Pipe, PipeTransform } from '@angular/core';
import { Hotel } from '../models/hotel.model';

@Pipe({
  name: 'filtro',
})
export class FilterPipe implements PipeTransform {


  transform(hotels: any, search: any): any {
    if(search == undefined){
        return hotels;
    }else{
      return hotels.filter( hotel=>{
        return hotel.nombre.toLowerCase().includes(search.toLowerCase()) || hotel.direccion.toLowerCase().includes(search.toLowerCase());;
      });
    }
  }
}
