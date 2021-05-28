import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from 'src/app/models/hotel.model';
import { EventoService } from 'src/app/services/evento.service';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { HotelService } from 'src/app/services/hotel.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { EventosComponent } from '../eventos/eventos.component';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.scss'],
  providers: [HotelService,HabitacionService,UsuarioService,
  EventosComponent],
})
export class HotelesComponent implements OnInit {

  public token;
  public getidHotel: Hotel;
  public hotelList;
  hotels: Array<Hotel> = [];
  search
  constructor(
    private _hotelService:HotelService,
    private _habitacionService:HabitacionService,
    private _usarioService:UsuarioService,
    private _eventoService:EventoService,
    private _router:Router) {
      this.token = this._usarioService.obtenerToken()
    }

  ngOnInit(): void {
    this.obtenerHoteles()

    this._hotelService.obtenerHotelesFilt().subscribe( (resp:any) => {
      resp.nombre.forEach(hotel => {
        this.hotels.push(hotel);
        console.log(resp.nombre)
      });
    });
  }

  obtenerHoteles(){
    this._hotelService.obtenerHoteles().subscribe(
      response =>{
        console.log(response.HotelEncontrado)
        this.hotelList = response.HotelEncontrado
      },
      error =>{
        console.log(<any>error)
      }
    )
  }

  obtenerHabitaciones(id){
    this._habitacionService.obtenerHabitacion(this.token,id).subscribe(
      response =>{
        this.getidHotel = response.HabitacionEncontrada
        console.log(response)
      },
      error =>{
        console.log(<any>error)
      }
    )

  }

  obtenerEvento(idEvende){
    this._eventoService.BuscarEventos(this.token,idEvende).subscribe(
      response =>{
        this.getidHotel = response.EventoEncontrado
        console.log(response)
      },
      error =>{
        console.log(<any>error)
      }
    )
  }




  navegarEvento(idEven){
    this._router.navigate(['/eventos',idEven])
  }
}
