// let Pokedex = require('pokedex'),
// pokedex = new Pokedex();
 

function getRandomPokemon(){
    let num = Math.floor(Math.random() * 493);
    // num = 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
    .then(response => response.json())
    .then(function(data){
        let name_ = data.name;
        let url = data.sprites.front_default;
        console.log(name_);
        console.log(url);
        if (name_ && url) {
            setPokemonOfDay(name_, url);
        }
    });
}
  
async function setPokemonOfDay(name, url) {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const pod = document.querySelector('#pod');
    const captionTextEl = document.createElement('p');
    const iconImgEl = document.createElement('img');
    const pkmnTextEl = document.createElement('p');

    captionTextEl.textContent = "Pokemon of the Day:";
    iconImgEl.src = url;
    pkmnTextEl.textContent = name;
    pod.appendChild(captionTextEl);
    pod.appendChild(iconImgEl);
    pod.appendChild(pkmnTextEl);
}


// function getRandomPokemon() {
//     let num = Math.random() * 493;
//     num = 1;
//     let name_;
//     let url_;
//     fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
//     .then(response => response.json())
//     .then(function(data) {
//       name_ = data.name;
//       url_ = data.sprites.other.dream_world.front_default;
//     });
//     // return pokedex.pokemon(num);
//     return setPokemonOfDay(name_, url_);
// }

//getRandomPokemon();

getRandomPokemon();