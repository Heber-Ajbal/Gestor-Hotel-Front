import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios-registrados',
  templateUrl: './usuarios-registrados.component.html',
  styleUrls: ['./usuarios-registrados.component.scss'],
  providers: [UsuarioService],
})
export class UsuariosRegistradosComponent implements OnInit {

  public token:string;
  public UsuarioList;

  constructor(private _usuarioService: UsuarioService) {
    this.token = this._usuarioService.obtenerToken()
  }

  ngOnInit(): void {
    this.usuariosRegistrado()
  }

  usuariosRegistrado(){
    this._usuarioService.usuariosRegistrado(this.token).subscribe(
      response =>{
        console.log(response.usuarios);
        this.UsuarioList = response.usuarios
      },
      err =>{
        console.log(<any>err);
      }
    )
  }

}
