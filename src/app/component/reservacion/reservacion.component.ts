import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservacion } from 'src/app/models/reservacion.model';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { ReservarService } from 'src/app/services/reservar.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.scss'],
  providers: [ReservarService,UsuarioService,HabitacionService]
})
export class ReservacionComponent implements OnInit {

  reservacionModel: Reservacion;
  token: string;
  reservacion;
  factura
  constructor(
    private _reservacionServices: ReservarService,
    private _usuarioService: UsuarioService,
    private _router: Router
  ) {

    this.token = this._usuarioService.obtenerToken()
    this.reservacionModel = new Reservacion('','','',0,0,[{servicioId:'',nombre:'',precio:0}],'','','')
   }

  ngOnInit(): void {
    this.obtenerReservacion()
  }

  obtenerReservacion(){
    this._reservacionServices.obtenerReservacion(this.token).subscribe(
      response =>{
        console.log(response.ReservacionEncontrada)
        this.reservacion = response.ReservacionEncontrada
      }
    )
  }

  verFacturaAd(id){
    this._usuarioService.VerFacturaAdmin(this.token,id).subscribe(
      response =>{

        console.log(response.FacturaEncontrada)
        this.factura = response.FacturaEncontrada
      },
      error =>{
        console.log(<any>error)
        Swal.fire({
          title: 'Aun no se ha facturado',
          confirmButtonText: `cerrar`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this._router.navigate(['/Reservacion'])
          }
        })
      }
    )
  }

  FacturarReservacion(id){
    this._usuarioService.Facturar(this.token, id).subscribe(
      response =>{
        console.log(response.FacturaGuardada)

      }
    )
  }

}
