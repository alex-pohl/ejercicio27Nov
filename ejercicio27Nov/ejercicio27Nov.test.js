const {miAgenda} = require('./ejercicio27Nov')


// Comprueba que se crean los contactos en la agenda.
test('Se debe crear un contacto en miAgenda.', ()=>{

    let direccionEjemplo = [{
        calle: 'Gran Via',
        numero: 567,
        ciudad: 'Madrid',
        pais: 'España'
    
},
{
        calle: 'Consell de cent',
        numero: 2,
        ciudad: 'Barcelona',
        pais: 'España'

}]
    const contacto1 = new miAgenda('Manolo', 123456789, direccionEjemplo)


    expect (miAgenda.miAgendaInstances).toBeGreaterThan(0);
});




// Comprobar los 3 métodos
test('El método muestraNombre debe devovler el nombre', () => {
    let direccionEjemplo = [{
        calle: 'Gran Via',
        numero: 567,
        ciudad: 'Madrid',
        pais: 'España'
    
},
{
        calle: 'Consell de cent',
        numero: 2,
        ciudad: 'Barcelona',
        pais: 'España'

}]
    const contacto1 = new miAgenda('Manolo', 123456789, direccionEjemplo)

    expect(contacto1.muestraNombre()).toBe(contacto1.nombre)
})

test('El método muestraTelefono debe devovler el telefono', () => {
    let direccionEjemplo = [{
        calle: 'Gran Via',
        numero: 567,
        ciudad: 'Madrid',
        pais: 'España'
    
},
{
        calle: 'Consell de cent',
        numero: 2,
        ciudad: 'Barcelona',
        pais: 'España'

}]
    const contacto1 = new miAgenda('Manolo', 123456789, direccionEjemplo)

    expect(contacto1.muestraTelefono()).toBe(contacto1.telefono)
})

test('El método muestraDirecciones debe devovler el array de Direcciones', () => {
    let direccionEjemplo = [{
        calle: 'Gran Via',
        numero: 567,
        ciudad: 'Madrid',
        pais: 'España'
    
},
{
        calle: 'Consell de cent',
        numero: 2,
        ciudad: 'Barcelona',
        pais: 'España'

}]
    const contacto1 = new miAgenda('Manolo', 123456789, direccionEjemplo)

    expect(contacto1.muestraDirecciones()).toBe(contacto1.direcciones)
})



