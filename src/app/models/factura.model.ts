export class Factura {

  constructor(
    public _id:String,
    public usuario:String,
    public servicios: [{

      servicioId:String,
      nombre:String,
      precio: Number,
    }],
    public hotelHospedado:String,
    public habitacioneReservada:String,
    public precioHabitacion:Number,
    public total:Number
  ){
  }
}
