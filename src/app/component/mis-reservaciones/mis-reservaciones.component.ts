import { Component, OnInit } from '@angular/core';
import { Reservacion } from 'src/app/models/reservacion.model';
import { ReservarService } from 'src/app/services/reservar.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-mis-reservaciones',
  templateUrl: './mis-reservaciones.component.html',
  styleUrls: ['./mis-reservaciones.component.scss'],
  providers: [UsuarioService,ReservarService]
})
export class MisReservacionesComponent implements OnInit {

  public token;
  public misReservaciones;
  public ReservacionID:Reservacion
  constructor(
    private _usuarioService: UsuarioService,
    private _reservacionServices: ReservarService
  ) {
    this.token = this._usuarioService.obtenerToken()
  }

  ngOnInit(): void {
    this.verReservacionCliente()
  }


  verReservacionCliente(){
    this._reservacionServices.verReservacionCliente(this.token).subscribe(

      response=>{
        console.log(response.ReservacionEncontrada)
        this.misReservaciones = response.ReservacionEncontrada
      }
    )
  }

  obtenerReservacionID(id){
    this._reservacionServices.obtenerReservacionID(id).subscribe(
      response =>{

        this.ReservacionID = response.ReservacionEncontrada
        console.log(response)
      }
    )
  }

  eliminarReservacion(id){
    this._reservacionServices.eliminarReservacion(id,this.token).subscribe(
      response =>{

        console.log(response)
        this.verReservacionCliente()
      }
    )
  }

}
