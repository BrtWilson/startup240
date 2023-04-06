const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
//import { creds } from './_db_credentials.js';
const creds = require('../../creds.js');
// const DB = require('./database.js');
// import { creds } from './_db_credentials.js';

const userName = creds.getUserName();
const password = creds.getPassword();
const hostname = creds.getHostname();

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
            name: "Ash Ketchum",
            rank: "P*",
            dist: 1132,
            pokemon: "Pikachu",
        },
        {
            name: "Koga",
            rank: "A",
            dist: 914,
            pokemon: "Ghastly",
        },
        {
            name: "Capt. Slade",
            rank: "A",
            dist: 847,
            pokemon: "Ratata",
        },
        {
            name: "Skully",
            rank: "B",
            dist: 609,
            pokemon: "Zubat",
        },

        // {
        //     score: 27,
        //     date: "Oct 20, 2019",
        //     name: "Ash Ketchum"
        // },
        // {
        //     score: 19,
        //     date: "Aug 2, 2001",
        //     name: "Skully"
        // },
        // {
        //     score: 13,
        //     date: "July 4, 2020",
        //     name: "Capt. Slade"
        // }
    ]

    //await scoreCollection.insertOne(scores[0]);

    console.log("Inserting to scores");
    await insertSet(scoreCollection, scores);

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

    insertSet_Users(userCollection, users)

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

    console.log("Inserting/updating items");
    insertSet(itemCollection, items);

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

    console.log("Inserting/updating pokemon");
    insertSet(pokeCollection, pokemon);
}

async function insertSet(collection, set) {
    for (const unit of set) {
        console.log("Checking " + unit.name);
        if (await exists(collection, unit.name)) {
            console.log("Found " + unit.name);
            collection.replaceOne({name: unit.name}, unit);
        }
        else {
            console.log("Not found " + unit.name);
            collection.insertOne(unit);
        }
    }
}

async function insertSet_Users(collection, set) {
    for (const unit of set) {
        unit.password = await bcrypt.hash(unit.password, 13);

        console.log("Checking " + unit.userName);
        if (await exists(collection, unit.userName)) {
            console.log("Found " + unit.userName);
            collection.replaceOne({name: unit.userName}, unit);
        }
        else {
            console.log("Not found " + unit.userName);
            collection.insertOne(unit);
        }
    }
}
 
async function exists(collection, name_) {
    const query = {name: name_};
    const options = { limit: 1 };
    // const ret = await collection.find(query, options);
    // const ret = await collection.countDocuments(query, options);
    // const ret = await collection.exists(query, options);
    // const ret = await collection.count(query, options) > 0;
    const ret = await collection.find(query, options).count() > 0;
    // const ret = await collection.findOne( query );
    console.log(ret);
    return ret;
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