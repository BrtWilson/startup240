const {MongoClient} = require('mongodb');
const uuid = require('uuid');
const bcrypt = require('bcrypt');

const creds = require('./creds.js');

const userName = creds.getUserName();
const password = creds.getPassword();
const hostname = creds.getHostname();

// TODO: SWITCH TO env WHEN UPLOADING TO PROD ENV
// const userName = process.env.MONGOUSER;
// const password = process.env.MONGOPASSWORD;
// const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const scoreCollection = client.db('pokerun').collection('score');
const userCollection = client.db('pokerun').collection('user');

async function addUser(userName, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 13);

  const user = {
    userName: userName,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

async function pwdCompare(req_pwd, user_pwd) {
  return bcrypt.compare(req_pwd, user_pwd);
  // const req_pwdHash = await bcrypt.hash(req_pwd, 13);
  // return req_pwdHash === user_pwd;
}

function getUser(userName_) {
  return userCollection.findOne({ userName: userName_ });
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
    limit: 25,
  };
  const cursor = scoreCollection.find(query, options);
  return cursor.toArray();
}

module.exports = {addScore, getHighScores, addUser, getUser, getUserByToken, pwdCompare};