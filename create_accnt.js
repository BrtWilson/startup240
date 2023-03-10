import { loadStarter } from './pokemon_db.js';

console.log("aglbhjkr");

let acf = document.querySelector('#acf');
acf.addEventListener('submit', createAccount);

function createAccount(event) {  
    event.preventDefault();
    console.log("FBGKHBHILGRBHUIKLGRbuk;GSRbjk;SGR");
    const nameEl = document.querySelector("#name");
    const passwordEl = document.querySelector("#password");
    const pkmnPick = document.getElementsByName("pkmn_pick").value;

    let success = createPlayer(nameEl.value, passwordEl.value, pkmnPick);
    if (success) {
        window.sessionStorage.setItem("loggedIn", "true"); 
        window.location.href = "home.html";
        return false;
    }
    else {
        alert("Failed: Try a different User Name");
        return false;
    }
}

function createPlayer(name_, password_, pkmnPick_) {
    const starterPkmn = loadStarter(pkmnPick_);

    const player = {
        userName: name_,
        password: password_,
        distMax: 0,
        tlp: 5,
        nop: 1,
        pokemon: [ starterPkmn ],
    };

    const playerJ = JSON.stringify(player);
    localStorage.setItem("player", playerJ);
    return true;
}