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
  document.getElementById('landing').style.display = "none";
  document.getElementById('intro').style.display = "none";
  document.getElementById('p1').style.display = "none";  //funciona raro
  document.getElementById('worst').style.display="none"
  //document.getElementById('best').style.display="none"
  document.getElementById('root2').style.display="block"
  document.getElementById('root2').innerHTML="";

  let title = document.getElementById("autocomplete-input").value
  fetch("https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?t="+title+"&page=1&apikey=d16a93e4")
    .then(data => data.json())
    .then(data => {
      characters = data;
      console.log(characters)
      //for (let i = 0; i <characters.length; i++) {
        document.getElementById('root2').innerHTML += `<img class="identificandoImagen" src=${characters.Poster} style="widht:200px, height:200px">
   `
      if (data.Response === "False"){
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
let gen="";

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
  gen= data.results
    console.log(gen)
    console.log(genero)

    if (genero == 28){
      document.getElementById('root3').innerHTML += `
      <div class="card-panel yellow lighten-2 center">
      <h2 class="root_text" class="white-text text-darken-2">Menu for Action Nights</h2>
    </div>
      ` 
    }
    if (genero == 35){
      document.getElementById('root3').innerHTML += `
      <div class="card-panel yellow lighten-2 center">
      <h2 class="root_text" class="white-text text-darken-2">Menu for Comedy Nights</h2>
    </div>
      ` 
    }
    if (genero == 18){
      document.getElementById('root3').innerHTML += `
      <div class="card-panel yellow lighten-2 center">
      <h2 class="root_text" class="white-text text-darken-2">Menu for Drama Nights</h2>
    </div>
      ` 
    }
    if (genero == 10749){
      document.getElementById('root3').innerHTML += `
      <div class="card-panel yellow lighten-2 center">
      <h2 class="root_text" class="white-text text-darken-2">Menu for Love Nights</h2>
    </div>
      ` 
    }
    if (genero == 27){
      document.getElementById('root3').innerHTML += `
      <div class="card-panel yellow lighten-2 center">
      <h2 class="root_text" class="white-text text-darken-2">Menu for Teror Nights</h2>
    </div>
      ` 
    }
    for (let i = 0; i <gen.length; i++){
      document.getElementById('root3').innerHTML += `
        <img class="identificandoImagen" src=https://image.tmdb.org/t/p/w500/${gen[i].poster_path} style="height:200px">
        ` }
    })
    .then(data => {
      mostrar2()
    });
    
  })


  const perfilPage = document.getElementsByClassName("identificandoImagen");

  function mostrar(data) {
    
    for (let i = 0; i < perfilPage.length; i++) {
      console.log(perfilPage[i])

      perfilPage[i].addEventListener("click", () => {
        console.log("holi")
        

        fetch("https://api.themoviedb.org/3/movie/"+characters.imdbID+"/videos?api_key=48819a4f88e3d597df63bebab6723d0f")
        .then(data=>data.json())
        .then(data=>{
           let trailer= data.results
            let video=trailer[0].key
            console.log (video)        
 
      document.getElementById('landing').style.display = "none";
      document.getElementById('intro').style.display = "none";
      document.getElementById('p1').style.display = "none";
      document.getElementById('work').style.display = "none";
      document.getElementById('root2').style.display = "none";
      document.getElementById('root3').style.display = "none";
      document.getElementById('root4').style.display = "block";
      document.getElementById('root4').innerHTML = "";

        document.getElementById('root4').innerHTML += `<div class="card-panel" style="background-image:url('https://www.desktopbackground.org/p/2013/05/30/584198_fondos-de-pantalla-cine-todos-los-wallpapers-cine_1920x1080_h.jpg'); background-size: cover; background-position: top;" >
        <h2 class="lime-text text-accent-2">${characters.Title}</h2>

        <ul class="collapsible">
        <li>
          <div class="collapsible-header"><i class="material-icons">description</i>Information</div>
          <div class="collapsible-body">
          
          <table class="card-panel white lighten-2">
          <thead>
            <tr>
            <th>Poster</th>
                <th>Recap</th>
                <th>Year of release</th>
                <th>PopScore</th>
            </tr>
          </thead>
  
          <tbody>
            <tr>
            <td><img class="identificandoImagen" src=${characters.Poster}></td>
              <td>${characters.Plot}</td>
              <td>${characters.Year}</td>
              <td>${characters.imdbRating}</td>
            </tr>
            
          </tbody>
        </table> 
        </div>
        </li>

        <li>
          <div class="collapsible-header"><i class="material-icons">movie_filter</i>Recommended Food</div>
          <div class="collapsible-body">
          
          <div class="row">
          <div class="col s12 m6">
            <div class="card white darken-1">
              <div class="card-content white-text">
                <span class="card-title black-text"> Pulié </span>
                <p class="black-text">"Such a good movie to watch with some chocolate".</p>
                </div>
                </div>
                </div>
            
                <div class="row">
                <div class="col s12 m6">
                  <div class="card white darken-1">
                    <div class="card-content white-text">
                      <span class="card-title black-text"> Martha </span>
                      <p class="black-text"> Is a movie you can watch with your friends and something to drink, I recommended it with beer.</p>
                      </div>
                      </div>
                      </div>

                      <div id="coments1"></div>


                      <div class="row">
                      <div class="col s12 m6">
                        <div class="card white darken-1">
                          <div class="card-content white-text">
                          <span class="card-title black-text">Leave us your comment</span>
                            <span class="card-title black-text">
                            <input placeholder="" id="first_name" type="text" class="validate">
                            <label for="first_name">Name</label> </span>
                            <p class="black-text">                           
                            
                     <textarea id="textarea1" class="materialize-textarea"></textarea>
                      <label for="textarea1">What food you'd like to recommend with this movie?</label>
                                                        
                          </p>

                          <button class="waves-effect waves-light btn" id="bComentario1">Guardar</button>
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

`;document.getElementById("bComentario1").addEventListener("click", (event) => {
  event.preventDefault()
 
  let name = document.getElementById("first_name").value
  let recomendación = document.getElementById("textarea1").value
 
  document.getElementById("coments1").innerHTML += `
 
  <div class="row">
  <div class="col s12 m6">
    <div class="card white darken-1">
      <div class="card-content white-text">
        <span class="card-title black-text"> ${name} </span>
        <p class="black-text"> ${recomendación}</p>
        </div>
        </div>
        </div>
  `})
    }).then(data => {
      M.AutoInit();
    })
      })
    }
  }

  function mostrar2(data) {
    
    for (let i = 0; i < perfilPage.length; i++) {
      console.log(perfilPage[i])

      perfilPage[i].addEventListener("click", () => {
        console.log("holi")
        

        fetch("https://api.themoviedb.org/3/movie/"+gen[i].id+"/videos?api_key=48819a4f88e3d597df63bebab6723d0f")
        .then(data=>data.json())
        .then(data=>{
           let trailer= data.results
            let video=trailer[0].key
            console.log (video)        
 

            document.getElementById('landing').style.display = "none";
            document.getElementById('intro').style.display = "none";
            document.getElementById('p1').style.display = "none";
            document.getElementById('work').style.display = "none";
    
      document.getElementById('root2').style.display = "none"
      document.getElementById('root3').style.display = "none"
      document.getElementById('root4').style.display = "none"
      document.getElementById('root5').style.display = "block";
      document.getElementById('root5').innerHTML = "";

        document.getElementById('root5').innerHTML += `<div class="card-panel" class="col s10" style="background-image:url('https://www.desktopbackground.org/p/2013/05/30/584198_fondos-de-pantalla-cine-todos-los-wallpapers-cine_1920x1080_h.jpg'); background-size: cover; background-position: top;" >
        <h2 id="title_movie_txt" class="lime-text text-accent-2">${gen[i].title}</h2>

        <ul class="collapsible">
        <li>
          <div class="collapsible-header"><i class="material-icons">description</i>Information</div>
          <div class="collapsible-body">
          
          <table class="card-panel white lighten-2">
          <thead>
            <tr>
                <th>Poster</th>
                <th>Recap</th>
                <th>Year of Release</th>
                <th>PopScore</th>
            </tr>
          </thead>
  
          <tbody>
            <tr>
            <td><img class="identificandoImagen" src=https://image.tmdb.org/t/p/w500/${gen[i].poster_path} style="height:200px"></td>
            
              <td class="td_text">${gen[i].overview}</td>
              <td class="td_text">${gen[i].release_date}</td>
              <td class="td_text">${gen[i].vote_average}</td>
            </tr>
            
          </tbody>
        </table> 
        </div>
        </li>

        <li>
          <div class="collapsible-header"><i class="material-icons">movie_filter</i>Recommended Food</div>
          <div class="collapsible-body">
          
          <div class="row">
          <div class="col s12 m6">
            <div class="card white darken-1">
              <div class="card-content white-text">
                <span class="card-title black-text"> Pulié </span>
                <p class="black-text">"Such a good movie to watch with some chocolate"</p>
                </div>
                </div>
                </div>
            
                <div class="row">
                <div class="col s12 m6">
                  <div class="card white darken-1">
                    <div class="card-content white-text">
                      <span class="card-title black-text"> Martha </span>
                      <p class="black-text"> "Is a movie you can watch with your friends and something to drink, I recommended it with beer."</p>
                      </div>
                      </div>
                      </div>


                      <div id="coments"></div>

                      <div class="row">
                      <div class="col s12 m6">
                        <div class="card white darken-1">
                          <div class="card-content white-text">
                          <span class="card-title black-text">Leave us your comment</span>
                            <span class="card-title black-text">
                            <input placeholder="" id="first_name" type="text" class="validate">
                            <label for="first_name">Name</label> </span>
                            <p class="black-text">                           
                            
                     <textarea id="textarea1" class="materialize-textarea"></textarea>
                      <label for="textarea1">What food you'd like to recommend with this movie?</label>
                            
                            
                          </p>

                          <button class="waves-effect waves-light btn" id="bComentario">Guardar</button>
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

`;document.getElementById("bComentario").addEventListener("click", (event) => {
  event.preventDefault()
  let name = document.getElementById("first_name").value
  let recomendación = document.getElementById("textarea1").value
  document.getElementById("coments").innerHTML += `
  <div class="row">
  <div class="col s12 m6">
    <div class="card white darken-1">
      <div class="card-content white-text">
        <span class="card-title black-text"> ${name} </span>
        <p class="black-text"> ${recomendación}</p>
        </div>
        </div>
        </div>
  `})
 
 
    }).then(data => {
      M.AutoInit();
    })
      })
    }
  }