import { Component, OnInit } from '@angular/core';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-habitacion-disponible',
  templateUrl: './habitacion-disponible.component.html',
  styleUrls: ['./habitacion-disponible.component.scss'],
  providers: [UsuarioService,HabitacionService]
})
export class HabitacionDisponibleComponent implements OnInit {

  token:String
  disponibilidad;
  constructor(
    private _usuarioService: UsuarioService,
    private _habitacionService: HabitacionService,
  ) {
    this.token = this._usuarioService.obtenerToken()
  }

  ngOnInit(): void {
    this.obtenerHabitacionesDis()
  }

  obtenerHabitacionesDis(){
    this._habitacionService.obtenerHabitacionDis(this.token).subscribe(
      response =>{
        console.log(response.HabitacionEncontrada)
        this.disponibilidad = response.HabitacionEncontrada
      }
    )
  }

}
