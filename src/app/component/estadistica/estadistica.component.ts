import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { Hotel } from 'src/app/models/hotel.model';
import { HotelService } from 'src/app/services/hotel.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.scss'],
  providers: [UsuarioService, HotelService],
})
export class EstadisticaComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,

    title: {
      display: true,
      text: 'HOTELES MAS SOLICITADOS'
    }
  };

  public barChartLabels: Label[] = ['Reservaciones'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public estadisticas

  public hotelModel: Hotel;
  public hotelList;

  public dato: String;

  public datos = [];
  private nombreHotel = [{}];
  public  barChartData: ChartDataSets[] = this.nombreHotel
  public token;
  constructor(
    private _usuarioService: UsuarioService,
    private _hotelService: HotelService
  ) {
    this.token = this._usuarioService.obtenerToken();
  }

  ngOnInit(): void {
    this.obtenerEstadistica();
  }



  obtenerEstadistica() {
    this._hotelService.obtenerEstadistica(this.token).subscribe((response) => {
      console.log(response.HotelesEncontrados)
      console.log(this.nombreHotel)
      var estadis = response.HotelesEncontrados;

      for(var i = 0; i < estadis.length; i++){

        this.nombreHotel[i] = {data: [estadis[i].estadisticas], label: estadis[i].nombre}
      }
    });
  }

}
