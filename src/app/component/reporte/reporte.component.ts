import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Habitacion } from 'src/app/models/habitacion.model';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { HotelService } from 'src/app/services/hotel.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss'],
  providers: [HabitacionService,UsuarioService,HotelService],

})
export class ReporteComponent implements OnInit {

  public habitacionModel: Habitacion;
  public token;
  public idRutaHotel: string;
  public habitacionGETID:Habitacion
  public idHab:String
  public habitaciones;
  constructor(
    public _activatedRoute: ActivatedRoute,
    private _usuarioService: UsuarioService,
    private _habitacionService: HabitacionService,
    private _hotelService: HotelService,

  ) {
    this.token = this._usuarioService.obtenerToken()
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(dataRoute => {
      this.idRutaHotel = dataRoute.get('id')
    })
    this.obtenerReporte(this.idRutaHotel)
  }

  obtenerReporte(id){
    this._habitacionService.obtenerReporte(this.token, id).subscribe(
      ((response)=>{
        this.habitacionModel = response.HabitacionEncontrada;
        this.habitaciones = response.HabitacionEncontrada
        console.log(response)
      })
    )
  }
}
