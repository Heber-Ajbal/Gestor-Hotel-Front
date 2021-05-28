import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/models/evento.model';
import { EventoService } from 'src/app/services/evento.service';
import { HotelService } from 'src/app/services/hotel.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
  providers:[EventoService,UsuarioService,HotelService]
})
export class EventosComponent implements OnInit {

  public eventoModel: Evento;
  public token;
  public idRutaHotelEvent:String;

  constructor(
    public _activatedRoute: ActivatedRoute,
    private _usuarioService: UsuarioService,
    private _eventoService: EventoService
  ) {
    this.token = this._usuarioService.obtenerToken()
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(dataRoute=>{
      this.idRutaHotelEvent = dataRoute.get('idEven')
    })
    this.BuscarEventos(this.idRutaHotelEvent)
  }


  BuscarEventos(idEven){
    this._eventoService.BuscarEventos(this.token,idEven).subscribe(
    ((response) =>{
      this.eventoModel = response.EventoEncontrado
      console.log(response)
    }),

    error =>{
      console.log(error)
    }

    )
  }

}
