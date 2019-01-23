window.onload= fetcheame

function fetcheame () {

trending ()
rotten ()

}

// Mejores Peliculas

function trending() {
fetch("https://api.themoviedb.org/3/trending/all/week?api_key=48819a4f88e3d597df63bebab6723d0f")
  .then(data => data.json())
  .then(data => {
    let trend = data.results;
    console.log(trend)
    document.getElementById('root').innerHTML ="";
    for (let i = 0; i <10 ; i++) {
      document.getElementById('root').innerHTML += `         
  <a class="carousel-item"><img class="img materialboxed responsive-img" src="https://image.tmdb.org/t/p/w500/${trend[i].poster_path}">
  </a>
  `
    }
  })
  .then (data =>{
    M.AutoInit();
});
    
}

// Peores Peliculas 
function rotten() {
fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&primary_release_year=2018&sort_by=popularity.asc")
  .then(data => data.json())
  .then(data => {
    let rott = data.results;
    console.log(rott)
    document.getElementById('root1').innerHTML ="";
    for (let i = 0; i <10 ; i++) {
      document.getElementById('root1').innerHTML += `         
  <a class="carousel-item"><img class="img materialboxed responsive-img" src="https://image.tmdb.org/t/p/w500/${rott[i].poster_path}">
  </a>
  `
    }
  })
  .then (data =>{
    M.AutoInit();
});
    
}

// Buscador
document.getElementById("autocomplete-input").addEventListener("keyup", (e) => {
if(e.keyCode === 13)
document.getElementById('worst').style.display="none"
document.getElementById('best').style.display="none"
document.getElementById('root2').style.display="block"
document.getElementById('root2').innerHTML="";

let title = document.getElementById("autocomplete-input").value
fetch("http://www.omdbapi.com/?s=" + title + "&page=1&apikey=b72efd99")
  .then(data => data.json())
  .then(data => {
    let characters = Object.values(data.Search);
    console.log(characters)
    for (let i = 0; i <characters.length; i++) {
      document.getElementById('root2').innerHTML += `<img src=${characters[i].Poster}>
 `
    }if (data.Response === "False"){
      return;
  }if (data.Poster === "N/A"){
    return;
}
  })
  .then(data => {
    M.AutoInit();
  });

})

//  Tipo de Comida para cada noche

document.getElementById("generos").addEventListener("change", (event)=>{
event.preventDefault();
document.getElementById('worst').style.display="none"
document.getElementById('best').style.display="none"
document.getElementById('root2').style.display="none"
document.getElementById('root3').style.display="block"
document.getElementById('root3').innerHTML="";
let genero = document.getElementById("generos").value;

fetch("https://api.themoviedb.org/3/discover/movie?api_key=48819a4f88e3d597df63bebab6723d0f&with_genres="+genero+"&sort_by=popularity.desc")
.then(data=>data.json())
.then(data=>{
  let gen= data.results
  console.log(gen)
  console.log(genero)

  if (genero == 28){
    document.getElementById('root3').innerHTML += `
    <div class="card-panel teal lighten-2">
    <h2 class="white-text text-darken-2">Menú para noches de Acción</h2>
  </div>
    ` 
  }
  if (genero == 35){
    document.getElementById('root3').innerHTML += `
    <div class="card-panel teal lighten-2">
    <h2 class="white-text text-darken-2">Menú para noches de Comedia</h2>
  </div>
    ` 
  }
  if (genero == 18){
    document.getElementById('root3').innerHTML += `
    <div class="card-panel teal lighten-2">
    <h2 class="white-text text-darken-2">Menú para noches de Drama</h2>
  </div>
    ` 
  }
  if (genero == 10749){
    document.getElementById('root3').innerHTML += `
    <div class="card-panel teal lighten-2">
    <h2 class="white-text text-darken-2">Menú para noches de Romance</h2>
  </div>
    ` 
  }
  if (genero == 27){
    document.getElementById('root3').innerHTML += `
    <div class="card-panel teal lighten-2">
    <h2 class="white-text text-darken-2">Menú para noches de Miedo</h2>
  </div>
    ` 
  }
  for (let i = 0; i <gen.length; i++){
    document.getElementById('root3').innerHTML += `
      <img src=https://image.tmdb.org/t/p/w500/${gen[i].poster_path}>
      ` }
  });
  
})




  






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