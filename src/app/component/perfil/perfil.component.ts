import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  providers: [UsuarioService]
})
export class PerfilComponent implements OnInit {

  usuariosList;
  userActualizado;
  usuarioIDModel: Usuario
  constructor(
    public _usuarioService: UsuarioService,
    private _router: Router) {
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


  editarUsuario(){
    this._usuarioService.editarUsuario(this.usuarioIDModel).subscribe(
      response=>{
        console.log(response);
        this._usuarioService.obtenerIdentidad();
       this.obtenerUsuarios();
      }
    )
  }

  eliminarUsuario(){
    this._usuarioService.eliminarUsuario(this._usuarioService.obtenerToken()).subscribe(
      response =>{
        console.log(response)
        this.obtenerUsuarios();
        this._router.navigate(['/login']);

      },
      error=>{
        console.log(error)
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Usuario Eliminado',
          showConfirmButton: false,
          timer: 1500
        })
        this._router.navigate(['/login']);
      }
    )
  }


}
