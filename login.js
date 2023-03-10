window.sessionStorage.setItem(loggedIn, "false");

export function login() {
    const nameEl = document.querySelector("#name");
    const passwordEl = document.querySelector("#password");

    exitMessage = loadPlayerData(nameEl.value, passwordEl.value);

    if (exitMessage === "Success!") {
        window.sessionStorage.setItem(loggedIn, "true");
        window.location.href = "home.html";
    }
    else {
        alert(exitMessage);
    }
}

function loadPlayerData(userName_, password_) {
    localStorage.setItem("userName", userName_);

    // Load Temporary stand in Player Information

    if (userName_ === "wacker") {
        if (password_ !== "wacker") {
            return "Error: incorrect password";
        }

        /* Hardcode Player 1:
        User Name: wacker
        Password: wacker
        Pokemon:  * Ratata
        */
        const ratata = {
            name: 'Ratata', 
            lv: 7,
            hp: 5,
            ability: 'Scurry',
            speed: 12,
            exp: 713,
        }
        pokemon_c = [ ratata ]

        const player = {
            userName: userName_,
            password: password_,
            distMax: 436,
            tlp: 5,
            nop: 1,
            pokemon: pokemon_c,
        };

        const playerJ = JSON.stringify(player);
        localStorage.setItem("player", playerJ);
    }
    else if (userName_ === "mason") {
        if (password_ !== "mason") {
            return "Error: incorrect password";
        }
        /* Hardcode Player 2:
        User Name: mason
        Password: mason
        Pokemon:  * Squirtle
        */  
        const squirtle = {
            name: 'Squirtle', 
            lv: 6,
            hp: 10,
            ability: '--',
            speed: 11,
            exp: 313,
        }
        pokemon_c = [ squirtle ]
  

        const player = {
            userName: userName_,
            password: password_,
            distMax: 116,
            tlp: 5,
            nop: 1,
            pokemon: pokemon_c,
        };
          
        const playerJ = JSON.stringify(player);
        localStorage.setItem("player", playerJ);
    }
    else if (userName_ === "Skully") {
        pokemon_c = loadDefaultPokemon();

        const player = {
            userName: userName_,
            password: password_,
            distMax: 609,
            tlp: 15,
            nop: 12,
            pokemon: pokemon_c,
        };
          
        const playerJ = JSON.stringify(player);
        localStorage.setItem("player", playerJ);
    }
    else {
        return "User name not recognized.";
    }

    return "Success!";
}

function loadDefaultPokemon() {
    const bulbasaur = {
        name: 'Bulbasaur', 
        lv: 12,
        hp: 19,
        ability: '--',
        speed: 8,
        exp: 313,
    }
    const charmander = {
        name: 'Charmander', 
        lv: 5,
        hp: 10,
        ability: '--',
        speed: 10,
        exp: 0,
    }    
    const squirtle = {
        name: 'squirtle', 
        lv: 5,
        hp: 10,
        ability: '--',
        speed: 10,
        exp: 0,
    }
    const ratata = {
        name: 'Ratata', 
        lv: 5,
        hp: 5,
        ability: 'Scurry',
        speed: 12,
        exp: 0,
    }
    const eevee = {
        name: 'Eevee', 
        lv: 9,
        hp: 13,
        ability: '--',
        speed: 10,
        exp: 183,
    }
    const jigglypuff = {
        name: 'Jigglypuff', 
        lv: 5,
        hp: 8,
        ability: 'Balloon',
        speed: 8,
        exp: 0,
    }
    const zubat = {
        name: 'Zubat', 
        lv: 6,
        hp: 7,
        ability: 'Flying',
        speed: 9,
        exp: 113,
    }
    const dratini = {
        name: 'Dratini', 
        lv: 15,
        hp: 22,
        ability: 'Flying',
        speed: 10,
        exp: 545,
    }
    const geodude = {
        name: 'Geodude', 
        lv: 9,
        hp: 12,
        ability: 'Solid',
        speed: 6,
        exp: 240,
    }
    const caterpie = {
        name: 'Caterpie', 
        lv: 5,
        hp: 5,
        ability: '--',
        speed: 9,
        exp: 0,
    }
    const bellsprout = {
        name: 'Bellsprout', 
        lv: 5,
        hp: 10,
        ability: '--',
        speed: 9,
        exp: 0,
    }
    const pidgey = {
        name: 'Pidgey', 
        lv: 5,
        hp: 9,
        ability: "Flying",
        speed: 10,
        exp: 0,
    }

    return [
        bulbasaur, charmander, squirtle, ratata, eevee, jigglypuff, zubat, dratini, geodude, caterpie, bellsprout, pidgey, 
    ];
}