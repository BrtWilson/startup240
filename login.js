function login() {
    const nameEl = document.querySelector("#name");
    const passwordEl = document.querySelector("#password");

    exitMessage = loadPlayerData(nameEl.value, passwordEl.value);

    if (exitMessage === "Success!") {
        window.location.href = "play.html";
    }
    else {
        // Todo: Make into toast or message show later
        return exitMessage
    };
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

        const player = {
            userName: userName_,
            password: password_,
            distMax: 436,
            tlp: 5,
            nop: 1,
        };

        playerJ = JSON.stringify(player);
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

        const player = {
            userName: userName_,
            password: password_,
            distMax: 116,
            tlp: 5,
            nop: 1,
        };
          
        playerJ = JSON.stringify(player);
        localStorage.setItem("player", playerJ);
    }
    else if (userName_ === "Skully") {
        const player = {
            userName: userName_,
            password: password_,
            distMax: 609,
            tlp: 15,
            nop: 12,
        };
          
        playerJ = JSON.stringify(player);
        localStorage.setItem("player", playerJ);
    }
    else {
        return "User name not recognized.";
    }

    return "Success!";
}