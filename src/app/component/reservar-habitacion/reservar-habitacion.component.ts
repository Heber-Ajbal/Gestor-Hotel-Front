import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habitacion } from 'src/app/models/habitacion.model';
import { Reservacion } from 'src/app/models/reservacion.model';
import { HabitacionService } from 'src/app/services/habitacion.service';
import { ReservarService } from 'src/app/services/reservar.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ServiciosService } from 'src/app/services/servicios.service';
import Swal from 'sweetalert2';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;

@Component({
  selector: 'app-reservar-habitacion',
  templateUrl: './reservar-habitacion.component.html',
  styleUrls: ['./reservar-habitacion.component.scss'],
  providers: [UsuarioService,HabitacionService,ReservarService,ServiciosService]
})
export class ReservarHabitacionComponent implements OnInit {

 public minDate: Date;
  public maxDate: Date;
  model: NgbDateStruct;
  public reservacionModel: Reservacion;
  public habitacionGetID:Habitacion;
  public token;
  public idRutaHabitacion:String;
  public modeloReservacion: Reservacion
  serviciosR
  public modeloServicio = {
    nombre : ''
  }
  constructor(

    public _activatedRoute: ActivatedRoute,
    private _usuarioService: UsuarioService,
    private _habitacionService: HabitacionService,
    private _reservacionservice: ReservarService,
    public _serviciosService:ServiciosService,
    public _router:Router
  ) {
    this.token = this._usuarioService.obtenerToken()
    this.reservacionModel = new Reservacion('','','',1,0,[{servicioId:'',nombre:'',precio: 0}],'','','')
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);

   }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(dataRoute => {
      this.idRutaHabitacion = dataRoute.get('id')
    })
    this.obtenerhabitacionRe(this.idRutaHabitacion)
  }

  obtenerhabitacionRe(id){
    this._habitacionService.obtenerHabitacionID(this.token,id).subscribe(

      ((response) =>{
        this.habitacionGetID = response.HabitacionEncontrada
        console.log(response)

      })
    )

  }

  reservarHabitacion(id){
    this._reservacionservice.reservarHabitacion(this.token,this.reservacionModel,id).subscribe(
      response =>{
        console.log(response.ReservacionGurdada)
       // this.obtenerhabitacionRe(id)

      },

      error=>{
        console.log(<any>error)
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

  agregarServicioRes(){

    this._reservacionservice.agregarServicioR(this.modeloServicio, this.token).subscribe(

      response =>{
        console.log(response.ServicioAgregado)
      },
      error =>{
        console.log(<any>error)
      }
    )
  }


  obtenerServicio(id){

    this._serviciosService.obtenerServicios(id).subscribe(
      response =>{
        this.serviciosR = response.ServicioEncontrado
        console.log(this.serviciosR)

      },

      error =>{

        console.log(<any>error)
      }
    )
  }



}
