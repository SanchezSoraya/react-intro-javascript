//Objetos literales 

// {}= Objeto

const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York', 
    zip: 55544333,
    lat: 14.44444,
    lng: 34.565665
  }

}; 
//console.table( persona ); Para que aparezca una tabla en consola 
const persona2 = {...persona }; 
persona2.nombre = 'Karla';
console.log( persona ); 
console.log( persona2 );
