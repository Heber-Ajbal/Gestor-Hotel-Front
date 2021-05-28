import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
  providers: [UsuarioService],
})
export class UsuarioComponent implements OnInit {

  public usuariosList;
  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.obtenerUsuarios()
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
}
