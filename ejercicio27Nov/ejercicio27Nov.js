"use strict";
class miAgenda {
    constructor(_nombre, _telefono, _direcciones) {
        this.nombre = _nombre;
        this.telefono = _telefono;
        this.direcciones = _direcciones;
        miAgenda.miAgendaInstances++;
    }
    muestraNombre() {
        return this.nombre;
    }
    muestraTelefono() {
        return this.telefono;
    }
    muestraDirecciones() {
        return this.direcciones;
    }
}
miAgenda.miAgendaInstances = 0;
module.exports = {
    Direcciones: {},
    miAgenda,
    Agenda: {}
};
