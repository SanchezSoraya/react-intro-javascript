// Fetch API
const apikey = 'JfH9XXEl6JUSEIjWdZV2qF7of8FYb4zq'; 

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apikey }`);

peticion
.then(resp =>  resp.json() ) 
.then( ({ data }) =>{
  const { url } = data.images.original; 
  const img = document.createElement('img'); 
  img.src = url; 

  document.body.append( img );
 })

.catch( console.warn);


//recursos 
//https://developer.mozilla.org/es/docs/Web/API/Fetch_API
//https://developers.giphy.com/docs/api/endpoint#random