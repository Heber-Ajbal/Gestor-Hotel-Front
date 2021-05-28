import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAppComponent } from './component/admin-app/admin-app.component';
import { AdminHtlComponent } from './component/admin-htl/admin-htl.component';
import { BuscarUsuarioComponent } from './component/buscar-usuario/buscar-usuario.component';
import { EstadisticaComponent } from './component/estadistica/estadistica.component';
import { EventosComponent } from './component/eventos/eventos.component';
import { FacturaComponent } from './component/factura/factura.component';
import { GraficasComponent } from './component/graficas/graficas.component';
import { HabitacionDisponibleComponent } from './component/habitacion-disponible/habitacion-disponible.component';
import { HabitacionComponent } from './component/habitacion/habitacion.component';
import { HistorialComponent } from './component/historial/historial.component';
import { HotelesComponent } from './component/hoteles/hoteles.component';
import { LoginComponent } from './component/login/login.component';
import { MisReservacionesComponent } from './component/mis-reservaciones/mis-reservaciones.component';
import { PerfilAdminComponent } from './component/perfil-admin/perfil-admin.component';
import { PerfilHotelComponent } from './component/perfil-hotel/perfil-hotel.component';
import { PerfilComponent } from './component/perfil/perfil.component';
import { RegistroComponent } from './component/registro/registro.component';
import { ReporteComponent } from './component/reporte/reporte.component';
import { ReservacionComponent } from './component/reservacion/reservacion.component';
import { ReservarHabitacionComponent } from './component/reservar-habitacion/reservar-habitacion.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { UsuariosRegistradosComponent } from './component/usuarios-registrados/usuarios-registrados.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'registrar', component: RegistroComponent},
  {path: 'usuarios', component: UsuarioComponent},
  {path:'hoteles', component: HotelesComponent},
  {path:'AdminAp',component:AdminAppComponent},
  {path:'AdminHome',component:AdminHtlComponent},
  {path:'UsuariosRe', component: UsuariosRegistradosComponent},
  {path:'habitaciones/:id', component: HabitacionComponent},
  {path:'Perfil', component:PerfilComponent},
  {path:'Reservacion', component:ReservacionComponent},
  {path:'eventos/:idEven',component:EventosComponent},
  {path:'habitacionesDisponibles',component:HabitacionDisponibleComponent},
  {path:'buscarUsuario',component:BuscarUsuarioComponent},
  {path:'ReservarHabitacion/:id',component:ReservarHabitacionComponent},
  {path:'MisReservaciones', component:MisReservacionesComponent},
  {path:'Estadisticas', component:EstadisticaComponent},
  {path:'Graficas', component:GraficasComponent},
  {path:'PerfilAdmin', component:PerfilAdminComponent},
  {path:'PerfilHotel', component:PerfilHotelComponent},
  {path:'Reporte/:id', component:ReporteComponent},
  {path:'Historial', component:HistorialComponent},
  {path:'Factura/:id', component:FacturaComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
