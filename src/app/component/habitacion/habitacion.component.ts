import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Habitacion } from 'src/app/models/habitacion.model';
import { Reservacion } from 'src/app/models/reservacion.model';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { HotelService } from 'src/app/services/hotel.service';
import { ReservarService } from 'src/app/services/reservar.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.scss'],
  providers: [HabitacionService,UsuarioService,HotelService,ReservarService],
})
export class HabitacionComponent implements OnInit {

  public habitacionModel: Habitacion;
  public token;
  public idRutaHotel:String;
  public modeloReservacion: Reservacion;
  public habitacionGetID: Habitacion;
  public idHab:String;
  constructor(
    public _activatedRoute: ActivatedRoute,
    private _usuarioService: UsuarioService,
    private _habitacionService: HabitacionService,
    private _hotelService: HotelService,
    private _reservacionServices: ReservarService
  ) {
    this.token = this._usuarioService.obtenerToken()
    this.modeloReservacion = new Reservacion('','','',1,0,[{servicioId:'',nombre:'',precio: 0}],'','','')
   }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(dataRoute => {
      this.idRutaHotel = dataRoute.get('id')
    })
    this.obtenerHabitacionId(this.idRutaHotel)
  }

  obtenerHabitacionId(id){
    this._habitacionService.obtenerHabitacion(this.token,id).subscribe(
      ((response)=>{

        this.habitacionModel = response.HabitacionEncontrada;

        console.log(response)
      })
    )
  }

/*  reservarHabitacion(id){
    this._reservacionServices.reservarHabitacion(this.token,id).subscribe(
      response =>{
        console.log(response)
        this.obtenerhabitacionRe(id)
      }
    )
  }*/

  obtenerhabitacionRe(id){
    this._habitacionService.obtenerHabitacionID(this.token,id).subscribe(

      response =>{
        this.habitacionGetID = response.HabitacionEncontrada
        console.log(response)
      }
    )

  }



}
