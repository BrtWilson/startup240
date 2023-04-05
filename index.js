const express = require('express');
const app = express();
const DB = require('./database.js');

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json()); // parses json object to javascript object (e.g. req.body)

app.use(express.static('front_end'));  
    // : Install the middleware to = 
    //      look in public in response to any request that might be a file

// Authenticate
apiRouter.post('/auth/create', async (req, res) => {
    if (await DB.getUser(req.body.username)) {
        res.status(409).send({ msg: 'Existing user' });
    }
    else {
        const user = await DB.createUser(req.body.username, req.body.password);
        // const pwdHash = await bcrypt.hash(password, 10);
        // const user = { username: username, password: pwdHash, token: uuid.v4() };
        await DB.addUser(user);

        setAuthCookie(res, user.token);
        res.send({ id: user._id });
    }
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
    res.clearCookie(authCookieName);
    res.status(204).end();
});


// Consider the main objects in your application. What objects do you need to retrieve? 
//    (Usually create-user and login-user) -> something to get and something to update/upload
//      These will determine what endpoints you need.
// : 
//  Router:
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetScores
apiRouter.get('/scores', (_req, res) => {
    const scores = await DB.getHighScores();
    res.send(scores);
    //res.send(getScores());
});

// SubmitScore
apiRouter.post('/score', (req, res) => {
    DB.addScore(req.body);
    const scores_ = await DB.getHighScores();
    //let scores_ = updateScores(req.body);
    res.send(scores_);
});


// LoadPlayerData
apiRouter.get('/:userid', (_req, res) => {
    // get token from cookie
    let token = 0;

    const scores = await DB.getUserByToken(token);
    res.send(scores);
    //res.send(getScores());
});

// CreatePlayer
apiRouter.post('/player/:username', (req, res) => {
    DB.findOne(username);
    const scores_ = await DB.getHighScores();
    //let scores_ = updateScores(req.body);
    res.send(scores_);
});



// Return to default page if path is unknown: (by keeping as last request use)
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// --------------------- HELPER FUNCTIONS ----------------------

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    });
  }

