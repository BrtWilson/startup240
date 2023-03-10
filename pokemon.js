function loadPokemon() {
    let pokemonArr = [];
    const playerText = localStorage.getItem('player');
    if (playerText) {
        playerObj = JSON.parse(playerText);
        pokemonArr = playerObj.pokemon;
    }

    const tableBodyEl = document.querySelector('#pokemon_listcontent');

    if (pokemonArr.length) {
        for (const [i, pokemon] of pokemonArr.entries()) {
            const iconTdEl = document.createElement('td');
            const nameEl = document.createElement('td');
            const levelTdEl = document.createElement('td');
            const hpTdEl = document.createElement('td');
            const abilityTdEl = document.createElement('td');

            iconTdEl.textContent = "[ * ]"; //pokemon.icon; // todo: make image
            nameEl.textContent = pokemon.name;
            levelTdEl.textContent = "Lv." + pokemon.lv;
            hpTdEl.textContent = "HP:" + pokemon.hp;
            abilityTdEl.textContent = "Ability: " + pokemon.ability;
            
            const rowEl = document.createElement('tr');
            rowEl.appendChild(iconTdEl);
            rowEl.appendChild(nameEl);
            rowEl.appendChild(levelTdEl);
            rowEl.appendChild(hpTdEl);
            rowEl.appendChild(abilityTdEl);
            
            tableBodyEl.appendChild(rowEl);
        }
    }
    else {
        tableBodyEl.innerHTML = '<tr><td colSpan=4>Error loading your Pokemon.</td></tr>';
    }
}

loadPokemon();