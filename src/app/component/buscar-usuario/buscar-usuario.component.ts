import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.scss'],
  providers: [UsuarioService,HotelService]
})
export class BuscarUsuarioComponent implements OnInit {

  token:String
  huesped;
  constructor(
    private _usuarioService: UsuarioService,
    private _hotelService: HotelService,
  ) {
    this.token = this._usuarioService.obtenerToken()
  }

  ngOnInit(): void {
    this.obtenerHuesped()
  }

  obtenerHuesped(){
    this._hotelService.obtenerHuesped(this.token).subscribe(

      response=>{
        console.log(response.huespedEncontrado)
        this.huesped = response.huespedEncontrado
      }
    )
  }



}
