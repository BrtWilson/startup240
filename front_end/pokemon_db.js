
export function loadStarter(name) {
    if (name === "Bulbasaur") {
        const pkmn = {
            icon: 'https://github.com/BrtWilson/imageBox/blob/main/bulbasaur_AkatsukiDevil.png?raw=true',
            name: name, 
            lv: 5,
            hp: 10,
            ability: '--',
            speed: 8,
            exp: 0,
        };
        return pkmn;
    }
    else if (name === "Charmander") {
        const pkmn = {
            icon: 'https://github.com/BrtWilson/imageBox/blob/main/charmander_AkatsukiDevil.png?raw=true',
            name: name, 
            lv: 5,
            hp: 10,
            ability: '--',
            speed: 10,
            exp: 0,
        };
        return pkmn;
    }
    else if (name === "Squirtle") {
        const pkmn = {
            icon: 'https://github.com/BrtWilson/imageBox/blob/main/squirtle_AkatsukiDevil.jpg?raw=true',
            name: name, 
            lv: 5,
            hp: 10,
            ability: '--',
            speed: 10,
            exp: 0,
        };
        return pkmn;
    }
    else if (name === "Eevee") {
        const pkmn = {
            icon: 'https://github.com/BrtWilson/imageBox/blob/main/eevee.jpg?raw=true',
            name: name, 
            lv: 5,
            hp: 10,
            ability: '--',
            speed: 10,
            exp: 0,
        };
        return pkmn;
    }
    else if (name === "Ratata") {
        const pkmn = {
            icon: 'https://github.com/BrtWilson/imageBox/blob/main/ratata_AkatsukiDevil.jpg?raw=true',
            name: name, 
            lv: 5,
            hp: 10,
            ability: 'Scurry',
            speed: 12,
            exp: 0,
        };
        return pkmn;
    }
    else if (name === "Jigglypuff") {
        const pkmn = {
            icon: 'https://github.com/BrtWilson/imageBox/blob/main/jigglypuff_AkatsukiDevil.jpg?raw=true',
            name: name, 
            lv: 5,
            hp: 8,
            ability: 'Balloon',
            speed: 8,
            exp: 0,
        };
        return pkmn;
    }
    else if (name === "Caterpie") {
        const pkmn = {
            icon: 'https://github.com/BrtWilson/imageBox/blob/main/caterpie_AkatsukiDevil.jpg?raw=true',
            name: name, 
            lv: 5,
            hp: 5,
            ability: '--',
            speed: 9,
            exp: 0,
        };
        return pkmn;
    }
}