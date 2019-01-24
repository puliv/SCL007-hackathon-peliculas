// MATERIALIZE

window.M.AutoInit();

// VARIABLES

let title= document.getElementById("autocomplete-input").value

const root = document.getElementById('root');
const root1 = document.getElementById('root1');




//BUSCADOR DE PELICULAS

function buscar(){
fetch("http://www.omdbapi.com/?s="+title+"&page=1&apikey=b72efd99")
.then(data=>data.json())
.then(data=>{
  let characters=Object.values(data.Search);
  console.log(characters)
  for (let i = 0; i <characters.length; i++){
    
    document.getElementById('root1').innerHTML += `<img src=${characters[i].Poster}>

    `   
    }  
  });
  }



  //SELECCIONAR GENERO DE PELICULA


  fetch("http://www.omdbapi.com/?s="+title+"&page=1&apikey=b72efd99")
  .then(data=>data.json())
  .then(data=>{
    let characters=Object.values(data.Search);
    console.log(characters)
    for (let i = 0; i <characters.length; i++){
      
      document.getElementById('root1').innerHTML += `<img src=${characters[i].Poster}>
  
      `   
      }  
    });
    


  window.onload= fetcheame

  function fetcheame () {

    fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&primary_release_year=2019")
    .then(data=>data.json())
    .then(data=>{
      let characters= data.results;
      console.log(characters)

      for (let i = 0; i < characters.length; i++) {
        let title = characters[i].title
        fetch("http://www.omdbapi.com/?t=" + title + "&y=2019&apikey=b72efd99")
          .then(data => data.json())
          .then(data => {
            console.log(data)
            document.getElementById('root').innerHTML += `   

            <img src=${data.Poster}>
            <p> ${data.Title}</p>
            <p>${data.Year}</p>
    
            `
          })         
    
           
        }  
      });
    }
    

  /*
const url = new URL('http://www.omdbapi.com/?apikey=b72efd99'), params = {s:title}
Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))


// make API request using Fetch API
fetch(url, {apikey:key})
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
  // Get the results
  let characters = data;
  console.log(characters);

   for ( let i=0 ; i<characters.lenght; i++){
    root.innerHTML+= `<img src="${characters.Search[i].Poster}">`
  
  }
  });
}
*/