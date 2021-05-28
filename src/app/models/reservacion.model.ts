export class Reservacion {

  constructor(
    public _id:String,
    public fechaEntrada:String,
    public fechaSalida:String,
    public cantidad: Number,
    public precioHabitacion:Number,
    public servicios:[{
      servicioId: String,
      nombre: String,
      precio: Number,
    }],
    public habitacionReservada:String,
    public hotelH:String,
    public cliente:String,
  ){}
}
