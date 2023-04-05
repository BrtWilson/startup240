const {MongoClient} = require('mongodb');
const uuid = require('uuid');
const bcrypt = require('bcrypt');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const scoreCollection = client.db('pokerun').collection('score');
const userCollection = client.db('pokerun').collection('user');

async function addUser(userName, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    userName: userName,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

function addScore(score) {
  scoreCollection.insertOne(score);
}

function getHighScores() {
  const query = {score: {$gt: 0}};
  const options = {
    sort: {score: -1},
    limit: 15,
  };
  const cursor = scoreCollection.find(query, options);
  return cursor.toArray();
}

module.exports = {addScore, getHighScores, addUser, getUser, getUserByToken};