// Destructuracion de objetos 
// asignacion desestructurante 

const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman'
};

const { edad, clave, nombre, } = persona;

//console.log( nombre ); 
//console.log( edad ); 
//console.log( clave );

const context = ({clave, nombre, edad, rango ='Capitan'}) =>{
  //console.log(nombre, edad, rango ); 

  return {
    nombreClave: clave, 
    anios: edad,
    latlng: {
      lat: 12.455,
      lng: -12.5454
    }
  }
}
const {nombreClave, anios, latlng: {lat, lng}} = context( persona );
console.log( nombreClave, anios); 
console.log(lat, lng);

