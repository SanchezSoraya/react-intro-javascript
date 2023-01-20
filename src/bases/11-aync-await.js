// Async - Await 

const getImages = async() => {
  try{
     const apikey = 'JfH9XXEl6JUSEIjWdZV2qF7of8FYb4zq'; 
     const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apikey }`);
     const {data} = await resp.json();

 
     const { url } = data.images.original; 
     const img = document.createElement('img'); 
     img.src = url; 
  
     document.body.append( img );
   

  } catch(error){
    // manejo del error 
    console.error(error)
  }
  
}
getImages();