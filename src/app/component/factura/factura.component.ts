import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservacion } from 'src/app/models/reservacion.model';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { ReservarService } from 'src/app/services/reservar.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss'],
  providers: [ReservarService,UsuarioService,HabitacionService]

})
export class FacturaComponent implements OnInit {

  reservacionModel: Reservacion;
  token: string;
  reservacion;
  factura;
  idRutaFac: String
  constructor(
    private _reservacionServices: ReservarService,
    private _usuarioService: UsuarioService,
    private _router: Router,
    public _activatedRoute: ActivatedRoute,
  ) {
    this.token = this._usuarioService.obtenerToken()

  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(dataRoute => {
      this.idRutaFac = dataRoute.get('id')
    })
    this.verFacturaAd(this.idRutaFac)
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
}
