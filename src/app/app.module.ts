import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegistroComponent } from './component/registro/registro.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotelesComponent } from './component/hoteles/hoteles.component';
import { AdminAppComponent } from './component/admin-app/admin-app.component';
import { AdminHtlComponent } from './component/admin-htl/admin-htl.component';
import { UsuariosRegistradosComponent } from './component/usuarios-registrados/usuarios-registrados.component';
import { EstadisticaComponent } from './component/estadistica/estadistica.component';
import { PerfilComponent } from './component/perfil/perfil.component';
import { HabitacionComponent } from './component/habitacion/habitacion.component';
import { ServiciosComponent } from './component/servicios/servicios.component';
import { ReservacionComponent } from './component/reservacion/reservacion.component';
import { FilterPipe } from './pipes/filter.pipe';
import { EventosComponent } from './component/eventos/eventos.component';
import { BuscarUsuarioComponent } from './component/buscar-usuario/buscar-usuario.component';
import { HabitacionDisponibleComponent } from './component/habitacion-disponible/habitacion-disponible.component';
import { ReservarHabitacionComponent } from './component/reservar-habitacion/reservar-habitacion.component';
import { MisReservacionesComponent } from './component/mis-reservaciones/mis-reservaciones.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';
import { GraficasComponent } from './component/graficas/graficas.component';
import { PerfilAdminComponent } from './component/perfil-admin/perfil-admin.component';
import { PerfilHotelComponent } from './component/perfil-hotel/perfil-hotel.component';
import { ReporteComponent } from './component/reporte/reporte.component';
import { HistorialComponent } from './component/historial/historial.component';
import { FacturaComponent } from './component/factura/factura.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NavbarComponent,
    UsuarioComponent,
    HotelesComponent,
    AdminAppComponent,
    AdminHtlComponent,
    UsuariosRegistradosComponent,
    EstadisticaComponent,
    PerfilComponent,
    HabitacionComponent,
    ServiciosComponent,
    ReservacionComponent,
    FilterPipe,
    EventosComponent,
    BuscarUsuarioComponent,
    HabitacionDisponibleComponent,
    ReservarHabitacionComponent,
    MisReservacionesComponent,
    GraficasComponent,
    PerfilAdminComponent,
    PerfilHotelComponent,
    ReporteComponent,
    HistorialComponent,
    FacturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    ChartsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
