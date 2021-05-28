export class Usuario {

  constructor(

    public _id: String,
    public nombre: String,
    public email: String,
    public password: String,
    public rol: String,
    public telefono: String,
    public imagen: String,
    public historial: [],
    public adminH: String

  ) {}
}
