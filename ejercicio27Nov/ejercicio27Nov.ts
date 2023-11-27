
type Direcciones = {
    calle: string
    numero: number
    ciudad: string
    pais: string
  }
  
  interface Agenda {
    nombre: string
    telefono: number
    direcciones: Direcciones[]
    muestraNombre: () => string
    muestraTelefono: () => number
    muestraDirecciones: () => Direcciones[]
  }


class miAgenda implements Agenda{
    nombre: string
    telefono: number
    direcciones: Direcciones[]

    static miAgendaInstances = 0;

    constructor(_nombre: string, _telefono: number, _direcciones:Direcciones[]){
        this.nombre = _nombre
        this.telefono = _telefono
        this.direcciones = _direcciones

        miAgenda.miAgendaInstances++
    }

    muestraNombre(): string{
        return this.nombre;
    }

    muestraTelefono(): number{
        return this.telefono;
    }

    muestraDirecciones(): Direcciones[]{
        return this.direcciones;
    }

}


module.exports = {
    Direcciones: {} as Direcciones,
    miAgenda  ,
    Agenda: {} as Agenda 
}