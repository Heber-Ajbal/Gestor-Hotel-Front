import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {

  usuariosList;
  userActualizado;
  usuarioIDModel: Usuario;
  token;
  factura
  servicio
  constructor(
    public _usuarioService: UsuarioService,
    private _router: Router
  ) {
    this.token = this._usuarioService.obtenerToken()
    this.usuarioIDModel = new Usuario('','','','','','','',[],'');

   }

  ngOnInit(): void {
    this.obtenerUsuarios();
    this.verFactura()
  }


  obtenerUsuarios(){
    this._usuarioService.obtenerUsuarios().subscribe(
      response =>{
        console.log(response.usuarios)
        this.usuariosList = response.usuarios
      },
      error =>{
        console.log(<any>error)
      }
    )
  }

  obtenerUsuarioId(id){
    this._usuarioService.obtenerUsuario(id).subscribe(
      response=>{
        this.usuarioIDModel = response.usuarioEncontrado;
        this.userActualizado = response.usuarioEncontrado;
        console.log(response.usuarioEncontrado);

      }
    )
  }

  verFactura(){
    this._usuarioService.VerFactura(this.token).subscribe(

      response =>{

        console.log(response.FacturaEncontrada)
        this.factura = response.FacturaEncontrada

      }

    )
  }

}
