import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from 'src/app/models/evento.model';
import { Habitacion } from 'src/app/models/habitacion.model';
import { Hotel } from 'src/app/models/hotel.model';
import { Servicio } from 'src/app/models/servicio.model';
import { Usuario } from 'src/app/models/usuario.model';
import { EventoService } from 'src/app/services/evento.service';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { HotelService } from 'src/app/services/hotel.service';
import { ServiciosService } from 'src/app/services/servicios.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-admin-app',
  templateUrl: './admin-app.component.html',
  styleUrls: ['./admin-app.component.scss'],
  providers: [HotelService, UsuarioService, HabitacionService,ServiciosService,DatePipe,EventoService],
})
export class AdminAppComponent implements OnInit {


  public number:Number;
  public hotelList;
  public hotelModel: Hotel;
  public habitacionModel: Habitacion;
  hotels: Array<Hotel> = [];
  public adminModel:Usuario;
  public servicioModel:Servicio;
  public eventoModel:Evento;
  public token: String;
  public getIdHotel:Hotel;
  hoteles: any;
  search
  hotelGetID: Hotel;
  id: string
  constructor(
    private _hotelService: HotelService,
    private _usuarioService: UsuarioService,
    private _habitacionService: HabitacionService,
    private _servicioService:ServiciosService,
    private _eventoService: EventoService,
    public _router:Router
  ) {
    this.token = this._usuarioService.obtenerToken();
    this.hotelModel = new Hotel('', '', '', '', '', 0);
    this.habitacionModel = new Habitacion('', '', 1, 0, '', '', 0);
    this.adminModel = new Usuario('','','','','','','',[],'');
    this.servicioModel = new Servicio('','',0,'');
    this.eventoModel = new Evento('','','','','','')
  }

  ngOnInit(): void {
    this.obtenerHoteles();

    this._hotelService.obtenerHotelesFilt().subscribe( (resp:any) => {
      resp.nombre.forEach(hotel => {
        this.hotels.push(hotel);
        console.log(resp.nombre)
      });
    });
  }

  obtenerHoteles() {
    this._hotelService.obtenerHoteles().subscribe(
      (response) => {
        console.log(response.HotelEncontrado);
        this.hotelList = response.HotelEncontrado;
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

  obtenerHotelID(id){
    this._hotelService.obtenerHotelID(id,this.token).subscribe(

      response =>{

        this.hotelModel = response.HotelEncontrado
        this.hotelGetID = this.hotelModel
        this.id = this.hotelModel._id
        console.log(response.HotelEncontrado)
        console.log(this.id)
      },
      error =>{

      }
    )
  }


  editarHotel(){
    this._hotelService.editarHotel(this.id,this.token,this.hotelGetID).subscribe(

      response => {
        console.log(response)
        this.obtenerHoteles()
      },
      error => {
        console.log(<any>error);
        this.obtenerHoteles()
      }
    )
  }

  eliminarHotel(){
    this._hotelService.eliminarHotel(this.id, this.token).subscribe(
      response => {
        console.log(response.HotelEliminado)
        this.obtenerHoteles()
      },
      error => {
        console.log(<any>error)
        //this.obtenerHoteles()
      }
    )
  }

  agregarHoteles() {
    this._hotelService.AgregarHotel(this.hotelModel, this.token).subscribe(
      response => {
        $('#exampleModalToggle2').hide();
        $('#exampleModalToggle2').show();
        console.log(response);
        this.obtenerHoteles();
        $('#exampleModalToggle').hide();
      },
      (error) => {
        $('#exampleModalToggle2').show();
        $('#exampleModalToggle2').hide();

        //$('#validar').show()

        Swal.fire({
          position: 'center',
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  }

  agregaradminHotel(){
    this._usuarioService.agregarAdminHotel(this.adminModel, this.token).subscribe(
      response =>{

        console.log(response)
        $('#exampleModalToggle3').show();
        $('#exampleModalToggle2').hide();
      },
      error =>{
        $('#exampleModalToggle3').hide();
        $('#validar').show()
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    )
  }


  agregarHabitacion() {
    this._habitacionService.agregarHabitaicion(this.habitacionModel, this.token).subscribe(
        response => {
          console.log(response);
          $('#exampleModalToggle4').show();
          $('#exampleModalToggle3').hide();
        },
        (error) => {
          $('#exampleModalToggle4').hide();
          $('#validar').show()
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: error.error.mensaje,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  }

  agregarServicio(){
    this._servicioService.agregarServicio(this.servicioModel, this.token).subscribe(
      response =>{
        this.servicioModel.precio = null;
        console.log(response);
        $('#exampleModalToggle5').show();
        $('#exampleModalToggle4').hide();
      },
      error=>{

        $('#exampleModalToggle5').hide();
        $('#validar').show()
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    )
  }

  agregarEventoH(){
    this._eventoService.agregarEvento(this.eventoModel, this.token).subscribe(

      response =>{
       // this._router.navigate(['/AdminAp'])
       // $('#exampleModalToggle').show()
        console.log(response);
        this._router.navigate(['/AdminAp'])
      },
      error =>{
        $('#exampleModalToggle6').hide();
        $('#validar').show()
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    )
  }

  obtenerReporte(id){

    this._habitacionService.obtenerReporte(this.token, id).subscribe(

      response =>{

        this.getIdHotel = response.HabitacionEncontrada
        console.log(response)
      },

      error =>{
        console.log(<any>error)
      }
    )
  }

  agregarHabi(){
    this._habitacionService.agregarHabitaicionID(this.habitacionModel,this.token,this.id).subscribe(
      response => {
        console.log(response)
      },
      error =>{

        console.log(<any>error)
      }
    )
  }

  agregarSer(){
    this._servicioService.addServicio(this.servicioModel, this.token, this.id).subscribe(

      response =>{
        console.log(response)
      },
      error =>{
        console.log(<any>error)
      }
    )
  }

  agregarEv(){
    this._eventoService.agregarEventoID(this.eventoModel, this.token, this.id).subscribe(
      response =>{
        console.log(response)
      },

      error =>{
        console.log(<any>error)
      }
    )
  }

  loadHotel(){

    const filter = (typeof this.search == 'string' && this.search.length > 0) ? `?searchBy=${this.search}` : '';
    this._hotelService.obtenerHotelesFilt().subscribe(
      response =>{
        this.hotelList = response
      },

      error =>{
        console.log(<any>error)
      }
    )
  }
}
