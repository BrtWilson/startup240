const { MongoClient } = require('mongodb');
import { creds } from './_db_credentials.js';

const userName = creds.userName;
const password = creds.password;
const hostname = creds.hostname;

const uri = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(uri);
const scoreCollection = client.db("pokerun").collection("score");
const userCollection = client.db("pokerun").collection("user");
const pokeCollection = client.db("pokerun").collection("pokemon");
const itemCollection = client.db("pokerun").collection("item");

async function setup () {

// API Retrieval Stand-in Functions
// function getScores() {
//     return defaultScores;
// }
const scores = [
    {
        score: 27,
        date: "Oct 20, 2019",
        name: "Ash Ketchum"
    },
    {
        score: 19,
        date: "Aug 2, 2001",
        name: "Ash Ketchum"
    },
    {
        score: 13,
        date: "July 4, 2020",
        name: "Capt. Slade"
    }
]

if (!scoreCollection.findOne()) {
    await scoreCollection.insertMany(scores);
}


const ratata_w = {
    icon: 'https://github.com/BrtWilson/imageBox/blob/main/ratata_AkatsukiDevil.jpg?raw=true',
    name: 'Ratata', 
    lv: 7,
    hp: 5,
    ability: 'Scurry',
    speed: 12,
    exp: 713,
}
const squirtle_m = {
    icon: 'https://github.com/BrtWilson/imageBox/blob/main/squirtle_AkatsukiDevil.jpg?raw=true',
    name: 'Squirtle', 
    lv: 6,
    hp: 10,
    ability: '--',
    speed: 11,
    exp: 313,
}

const users = [
    {
        userName: "mason",
        password: "mason",
        id: "42790333",
        distMax: 116,
        tlp: 5,
        nop: 1,
        pokemon: [squirtle_m],
    },
    {
        userName: "wacker",
        password: "wacker",
        id: "77006677",
        distMax: 436,
        tlp: 5,
        nop: 1,
        pokemon: [ratata_w],
    },
    {
        userName: "Skully",
        password: "",
        id: "13013",
        tlp: 15,
        nop: 12,
        pokemon: loadDefaultPokemon(),
    },
]

if (!userCollection.findOne()) {
    for (const user of users) {
        user.password = await bcrypt.hash(user.password, 13);
    }
    await userCollection.insertMany(scores);
}

const items = [
    {
        imageUrl: "https://github.com/BrtWilson/imageBox/blob/main/thunder_stone_.png?raw=true",
        name: "Thunder Stone",
        description: "A zanthus colored clear stone that seems to hold an electric charge. Used to evolve certain pokemon."
    },
    {
        imageUrl: "https://github.com/BrtWilson/imageBox/blob/main/exp_share_.jpg?raw=true",
        name: "Exp Share",
        description: "A strange necklace with yellow gems. A pokemon wearing it gains experience over time."
    }
]

for (const item of items) {
    if (!itemCollection.findOne({name: item.name})) {
        await itemCollection.insertOne(item);
    }
}

const pokemon = [
    {
        icon: 'https://github.com/BrtWilson/imageBox/blob/main/bulbasaur_AkatsukiDevil.png?raw=true',
        name: "Bulbasaur", 
        lv: 5,
        hp: 10,
        ability: '--',
        speed: 8,
        exp: 0,    },
    {
        icon: 'https://github.com/BrtWilson/imageBox/blob/main/charmander_AkatsukiDevil.png?raw=true',
        name: "Charmander", 
        lv: 5,
        hp: 10,
        ability: '--',
        speed: 10,
        exp: 0,
    },
    {
        icon: 'https://github.com/BrtWilson/imageBox/blob/main/squirtle_AkatsukiDevil.jpg?raw=true',
        name: "Squirtle", 
        lv: 5,
        hp: 10,
        ability: '--',
        speed: 10,
        exp: 0,
    },
    {
        icon: 'https://github.com/BrtWilson/imageBox/blob/main/eevee.jpg?raw=true',
        name: "Eevee", 
        lv: 5,
        hp: 10,
        ability: '--',
        speed: 10,
        exp: 0,
    },
    {
        icon: 'https://github.com/BrtWilson/imageBox/blob/main/ratata_AkatsukiDevil.jpg?raw=true',
        name: "Ratata", 
        lv: 5,
        hp: 10,
        ability: 'Scurry',
        speed: 12,
        exp: 0,
    },
    {
        icon: 'https://github.com/BrtWilson/imageBox/blob/main/jigglypuff_AkatsukiDevil.jpg?raw=true',
        name: "Jigglypuff", 
        lv: 5,
        hp: 8,
        ability: 'Balloon',
        speed: 8,
        exp: 0,
    },
    {
        icon: 'https://github.com/BrtWilson/imageBox/blob/main/caterpie_AkatsukiDevil.jpg?raw=true',
        name: "Caterpie", 
        lv: 5,
        hp: 5,
        ability: '--',
        speed: 9,
        exp: 0,
    },
    {
        icon: '--',
        name: 'Zubat', 
        lv: 5,
        hp: 5,
        ability: 'Flying',
        speed: 9,
        exp: 0,
    },
    {
        icon: '--',
        name: 'Dratini', 
        lv: 5,
        hp: 8,
        ability: 'Flying',
        speed: 9,
        exp: 0,
    },
    {
        icon: '--',
        name: 'Geodude',
        lv: 5,
        hp: 8,
        ability: 'Solid',
        speed: 6,
        exp: 0,
    },
    {
        icon: '--',
        name: 'Vulpix', 
        lv: 5,
        hp: 10,
        ability: '--',
        speed: 10,
        exp: 0,
    },
    {
        icon: '--',
        name: 'Bellsprout', 
        lv: 5,
        hp: 10,
        ability: '--',
        speed: 9,
        exp: 0,
    },
    {
        icon: 'https://github.com/BrtWilson/imageBox/blob/main/pidgey_AkatsukiDevil.jpg?raw=true',
        name: 'Pidgey', 
        lv: 5,
        hp: 0,
        ability: 'Flying',
        speed: 10,
        exp: 0,
    },
]

for (const pokemon_ of pokemon) {
    if (!pokeCollection.findOne({name: pokemon_.name})) {
        await itemCollection.insertOne(pokemon_);
    }
}




// function updateScores(newScore) {
//     let scores = getScores();
//     let found = false;
//     for (const [i, prevScore] of scores.entries()) {
//         if (newScore.score > prevScore.score) {
//             scores.splice(i, 0, newScore);
//             found = true;
//             break;
//         }
//     }

//     if (!found) {
//         scores.push(newScore);
//     }

//     if (scores.length > 15) {
//         scores.length = 15; // truncates array at size 10
//     }
//     return scores;
// }

}

function loadDefaultPokemon() {
    const bulbasaur = {
        icon: 'https://github.com/BrtWilson/imageBox/blob/main/bulbasaur_AkatsukiDevil.png?raw=true',
        name: 'Bulbasaur', 
        lv: 12,
        hp: 19,
        ability: '--',
        speed: 8,
        exp: 313,
    }
    const charmander = {
        icon: 'https://github.com/BrtWilson/imageBox/blob/main/charmander_AkatsukiDevil.png?raw=true',
        name: 'Charmander', 
        lv: 5,
        hp: 10,
        ability: '--',
        speed: 10,
        exp: 0,
    }    
    const squirtle = {
        icon: 'https://github.com/BrtWilson/imageBox/blob/main/squirtle_AkatsukiDevil.jpg?raw=true',
        name: 'squirtle', 
        lv: 5,
        hp: 10,
        ability: '--',
        speed: 10,
        exp: 0,
    }
    const ratata = {
        icon: 'https://github.com/BrtWilson/imageBox/blob/main/ratata_AkatsukiDevil.jpg?raw=true',
        name: 'Ratata', 
        lv: 5,
        hp: 5,
        ability: 'Scurry',
        speed: 12,
        exp: 0,
    }
    const eevee = {
        icon: 'https://github.com/BrtWilson/imageBox/blob/main/eevee.jpg?raw=true',
        name: 'Eevee', 
        lv: 9,
        hp: 13,
        ability: '--',
        speed: 10,
        exp: 183,
    }
    const jigglypuff = {
        icon: 'https://github.com/BrtWilson/imageBox/blob/main/jigglypuff_AkatsukiDevil.jpg?raw=true',
        name: 'Jigglypuff', 
        lv: 5,
        hp: 8,
        ability: 'Balloon',
        speed: 8,
        exp: 0,
    }
    const zubat = {
        icon: '--',
        name: 'Zubat', 
        lv: 6,
        hp: 7,
        ability: 'Flying',
        speed: 9,
        exp: 113,
    }
    const dratini = {
        icon: '--',
        name: 'Dratini', 
        lv: 15,
        hp: 22,
        ability: 'Flying',
        speed: 10,
        exp: 545,
    }
    const geodude = {
        icon: '--',
        name: 'Geodude', 
        lv: 9,
        hp: 12,
        ability: 'Solid',
        speed: 6,
        exp: 240,
    }
    const caterpie = {
        icon: 'https://github.com/BrtWilson/imageBox/blob/main/caterpie_AkatsukiDevil.jpg?raw=true',
        name: 'Caterpie', 
        lv: 5,
        hp: 5,
        ability: '--',
        speed: 9,
        exp: 0,
    }
    const bellsprout = {
        icon: '--',
        name: 'Bellsprout', 
        lv: 5,
        hp: 10,
        ability: '--',
        speed: 9,
        exp: 0,
    }
    const pidgey = {
        icon: 'https://github.com/BrtWilson/imageBox/blob/main/pidgey_AkatsukiDevil.jpg?raw=true',
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

setup();