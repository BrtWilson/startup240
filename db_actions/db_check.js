const { MongoClient } = require('mongodb');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

const uri = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(uri);
const scoreCollection = client.db("pokerun").collection("score");
const userCollection = client.db("pokerun").collection("user");
const pokeCollection = client.db("pokerun").collection("pokemon");
const itemCollection = client.db("pokerun").collection("item");

async function print_check() {
    console.log("Scores");
    const cursor_s = scoreCollection.find();
    const scores = await cursor_s.toArray();
    scores.forEach((i) => console.log(i));

    console.log("Users");
    const cursor_u = userCollection.find();
    const users = await cursor_u.toArray();
    users.forEach((i) => console.log(i));

    console.log("Pokemon");
    const cursor_p = pokeCollection.find();
    const pokemon_ = await cursor_p.toArray();
    pokemon_.forEach((i) => console.log(i));

    console.log("Items");
    const cursor_i = itemCollection.find();
    const items = await cursor_i.toArray();
    items.forEach((i) => console.log(i));
}

print_check();