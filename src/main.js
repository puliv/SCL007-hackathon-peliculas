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

let characters="";
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
      characters = Object.values(data.Search);
      console.log(characters)
      for (let i = 0; i <characters.length; i++) {
        document.getElementById('root2').innerHTML += `<img class="identificandoImagen" src=${characters[i].Poster} style="widht:200px, height:200px">
   `
      }if (data.Response === "False"){
        return;
    }if (data.Poster === "N/A"){
      return;
  }
    })
    .then(data => {
      M.AutoInit();
    })
    .then(data => {
      mostrar()
    });
})

//  Tipo de Comida para cada noche

document.getElementById("generos").addEventListener("change", (event)=>{
  event.preventDefault();

  mostrar()
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
        <img class="identificandoImagen" src=https://image.tmdb.org/t/p/w500/${gen[i].poster_path} style="height:200px">
        ` }
    })
    .then(data => {
      mostrar()
    });
    
  })


  const perfilPage = document.getElementsByClassName("identificandoImagen");

  function mostrar(data) {
    
    for (let i = 0; i < perfilPage.length; i++) {
      console.log(perfilPage[i])

      perfilPage[i].addEventListener("click", () => {
        console.log("holi")
        

        fetch("https://api.themoviedb.org/3/movie/"+characters[i].imdbID+"/videos?api_key=48819a4f88e3d597df63bebab6723d0f")
        .then(data=>data.json())
        .then(data=>{
           let trailer= data.results
            let video=trailer[0].key
            console.log (video)        
 
      document.getElementById('worst').style.display = "none"
      document.getElementById('best').style.display = "none"
      document.getElementById('root2').style.display = "none"
      document.getElementById('root3').style.display = "none"
      document.getElementById('root4').style.display = "block";
      document.getElementById('root4').innerHTML = "";

        document.getElementById('root4').innerHTML += `<div class="card-panel" style="background-image:url('https://www.desktopbackground.org/p/2013/05/30/584198_fondos-de-pantalla-cine-todos-los-wallpapers-cine_1920x1080_h.jpg'); background-size: cover; background-position: top;" >
        <h2 class="lime-text text-accent-2">${characters[i].Title}</h2>

        <ul class="collapsible">
        <li>
          <div class="collapsible-header"><i class="material-icons">description</i>Información</div>
          <div class="collapsible-body">
          
          <table class="card-panel white lighten-2">
          <thead>
            <tr>
                <th>Resumen</th>
                <th>Año de Estreno</th>
                <th>Duración</th>
            </tr>
          </thead>
  
          <tbody>
            <tr>
              <td>Alvin</td>
              <td>${characters[i].Year}</td>
              <td>$0.87</td>
            </tr>
            
          </tbody>
        </table> 
        </div>
        </li>

        <li>
          <div class="collapsible-header"><i class="material-icons">movie_filter</i>Comida Recomendada</div>
          <div class="collapsible-body">
          
          <div class="row">
          <div class="col s12 m6">
            <div class="card white darken-1">
              <div class="card-content white-text">
                <span class="card-title black-text"> Pulié </span>
                <p class="black-text"> Muy buena pelicula para ver con chocolates.</p>
                </div>
                </div>
                </div>
            
                <div class="row">
                <div class="col s12 m6">
                  <div class="card white darken-1">
                    <div class="card-content white-text">
                      <span class="card-title black-text"> Martha </span>
                      <p class="black-text"> Buena pelicula para tomar algo con los amigos, Muy recomendada con una cerveza.</p>
                      </div>
                      </div>
                      </div>


                      <div class="row">
                      <div class="col s12 m6">
                        <div class="card white darken-1">
                          <div class="card-content white-text">
                          <span class="card-title black-text">  Dejanos tu comentario </span>
                            <span class="card-title black-text">
                            <input placeholder="" id="first_name" type="text" class="validate">
                            <label for="first_name">Nombre</label> </span>
                            <p class="black-text">                           
                            
                     <textarea id="textarea1" class="materialize-textarea"></textarea>
                      <label for="textarea1">Que comida te gustaría recomendar con esta pelicula</label>
                            
                            
                          </p>
                            </div>
                            </div>
                            </div>
        </div> 
          </div>



        </li>
        <li>
          <div class="collapsible-header"><i class="material-icons">play_circle_outline</i>Trailer</div>
          <div class="collapsible-body"><div class="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/${trailer[0].key}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div></div>
        </li>
      </ul>     

`
    }).then(data => {
      M.AutoInit();
    })
      })
    }
  }