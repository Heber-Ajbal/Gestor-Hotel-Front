import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil-hotel',
  templateUrl: './perfil-hotel.component.html',
  styleUrls: ['./perfil-hotel.component.scss'],
  providers: [UsuarioService]
})
export class PerfilHotelComponent implements OnInit {

  usuariosList;
  userActualizado;
  usuarioIDModel: Usuario
  constructor(
    public _usuarioService: UsuarioService,
    private _router: Router
  ) {
    this.usuarioIDModel = new Usuario('','','','','','','',[],'');

   }

  ngOnInit(): void {
    this.obtenerUsuarios();

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
}
