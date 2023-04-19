# startup240
CS 240 notes and start up application

Section 1. Elevator Pitch
-------------------------
People have a small obsession with running games: Subway Surfer, Temple Run, Flappy Bird, Dinosaur Game...

My pitch is to combine this popular game style with one of the top game fandoms in history: Pokemon.
Pokemon run allows users to enjoy the run with their favorite cute pokemon, powering them up over time and catching more along the way.
Rare candies, pokeballs, and other power-ups will enhance the experience and be the foundation for a simple yet expandable game in a world of pokemon.

![20230123_175633](https://github.com/BrtWilson/imageBox/blob/main/20230123_175633-1.jpg?raw=true)


Section 2. Startup Application Details
--------------------------------------

Brainstorming ideas:
- pokemon version of the jumping t-rex game
- obstacles include miscelaneous platforms and other pokemon
- flying pokemon can fly
- two controls: spacebar for jump and click for attack
- power-up ideas:
	* pokeball: allows capturing new pokemon (button to activate? or emil-esque)
		- more powerful pokeballs are required for more powerful pokemon (1/10th chance of success if one tier too high, 1/35th chance success if beyond 1 tier difference; 100% chance if pokeball power is adequate)
		- used on nearest pokemon when button is activated
	* rare candy: exp (common)
	* evolution stone fragments (correspond to biome, rare, need 3 to make the item)
	* some item that enhances attacks (less common)
	* some item that enhances defense (less common)
- store top score and pokemon unlocked online
- pokemon can evolve with enough exp
- new biomes can be unlocked with enough points; or by traveling far enough
	* different biomes will have different pokemon associated with them
- Base Pokemon:
	* Bulbasaur
	* Squirtle
	* Charmander
	* Ratata
	* Eevee
	* Jigglypuff
- Possible stats: hp (10avg), speed, jump, flight, acceleration/buildup?)
- function: run ends when hp goes out (avg 10hp?), returns to a login menu, and another menu has the pokemon options and item options


Section N. Notes Unrelated (HTML & CSS Notes)
---------------------------------------------
Debugging Tips 
(HTML specifically)
- If something is missing, check for missing bracketing.
- If any functionality is not as expected, double check lettering
(Javascript and Live Web Apps)
- Press F5 to start debugging in VsCode. Select Node.js if you are debugging a full javascript service. This is useful for debugging the server end
- Press F12 to start debugger in browser. This is useful for debugging the client end
- In the browser debugger (client testing), click the "Network" tab > "HTTP message". Here you can view messages sent from the server.
- After receiving a message, ```socket.send('Msg: e.g. I am listening');``` in the browser debugger console will send a message from the client to the server

Useful Commands
- ssh -i [key pair (pem) file] ubuntu@[ip address]
	* connecting in to your website server
	* Note that the Caddy file is used for securing connection to different services
- sudo service caddy restart
	* Use after updating the Caddyfile to apply changes to the web server
- `chmod 600 [key pair file]`
	* used to restrict accessibility of a file to only the current user
- ./deployWebsite.sh -k <yourpemkey> -h <yourdomain>
	* updates home production environment of your web server
- ./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s simon
	* updates current file directory in Simon production environment

CSS Points to Know
- CSS MDN
- . is used for class-specific rules
- \# is used for id-specific rules
- Animation:
	* use the rule attribute "animation-name: <animation name>"
	* define the animation with: "@keyframes <animation name>" rule title and sub-rules defining animation checkpoints. Animation * checkpoint names can be a percentage or "from" and "to" for 0 and 100% respectively.

General Points to Know
- If you don't have something allowing a redirection, most html service retrieval mechanisms (browsers) default to looking for an index.html file (a landing or home page).
- To keep credentials secure:
	* ssh into your production environment
	* open the global environment settings file: ```sudo vim /etc/environment```
	* add credentials: ```export USERC=<yourusercredential>```
	* save the file and restart the production environment: ```pm2 restart all --update-env; pm2 save```
	* access your environment var: ```const userName = process.env.USERC;```


Javascript
- Note that a js file can simply have functions called in the html (e.g. by a button's onclick value), or it can have executed code to, in which case, location of the script in the html matters (as this determines when it will render. If it affects elements, it should be placed after them).
- A good example of storing and loading data in a function:
```
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
        scores = JSON.parse(scoresText);
    }
```
- general useful commands:
	* "await delay(500)" is equivalent to sleeping for .5 seconds
	* it is useful to include console.log("message") statements at key points, such as the end of a script to run
- document commands:
	* document.querySelector('#<id>') : make an existing element into a javascript element object, where <id> is the elements id
	* document.createElement('<elementName>') : creates an element, e.g document.createElement('p') creates '<p></p>'
	* document.querySelectorAll('.<class>') : make an array of elements
		- example with function applied to each
	```
		document.querySelectorAll('.game-button').forEach((el, i) => {
            //...
        });
	```
- element commands:
	* <elementObject>.textContent = <>: assigns a value to an element 
	* <elementObject>.appendChild(<otherElementObject>) : adds an additional child element within the selected element
	* <elementObject>.innerHTML = '<>' : re/places the children elements with the provided text html content <>.
- debugging javascript:
	* You can insert "debugger;" statements in your code, which act as breakpoints, or click on the line in the browser debugger to make that line number a breakpoint
	* When stopped at a breakpoint, your browser debugger should allow you to look at element contents
- Event Listeners Example:
```
	let acf = document.querySelector('#acf');  		// retrieves element to add listener to (using the form element id in th case)
	acf.addEventListener('submit', createAccount);	// specifies what action to listen for, and what function to call upon receive
```
- 
	* This was necessary when hitting the submit button for a form was not working right
	* Using a listener is apparently a common tool nowadays
	* The button was specified with type "submit" within the 'form' element
	* The form element was given an id, and all actions and 'onclick' props were removed from the button and form
- Variable Elements on page load:
	* by loading a script in an HTML page, the script will be ran on that line. Often the contents of a script are functions, but any code outside of function definitions is ran. This can be used to dynamically perform an action on a page based on given circumstances.
- "Global" Variables:
	* each web service has a local storage map or dictionary to contain information, stored in JSON form.
	* window.localStorage.getItem("itemName") is used to get an item corresponding to the provided string name. This item is returned in JSON form.
	* window.localStorage.setItem("itemName", "value") is used to store an item name: value pair. The value provided must be in JSON form, or it will be stored as undefined.
	* 'sessionStorage' can be used in place of 'localStorage' when data does not need to or must not persist between browser sessions
	* JSON.stringify(object) returns the JSON string format of an object; used before storing the object
	* JSON.parse(stringObject) converts a JSON format string to a javascript object, which is returned

Node and Services
- Setup:
	* npm init -y: setting up npm in the local work environment; sets up node_modules/, package.json, and package-lock.json
	* npm install express
	* npm install <package>
- Commands:
	* npm install: installs all packages previously installed by npm for this service, but not locally
- Middleware Design:
	* ```app.use(express.static('public'));``` : any requests for a file/ static page, direct to the public folder
	* ```app.get('/name/:param', (req, res) => { <middleware actions> });``` : any get requests fitting the given name path name, where :param can be anything, execute this middleware. 'param' can be used as a variable in the middleware actions. 
	Replace 'get' with 'put' for put requests
	* ```app.use((_req, res) => { <middleware actions> });``` : any requests not caught in previous middleware calls are caught here
	* middleware actions must end with ```res.send(...);```, which sends the response
	* ```res.sendFile('index.html', { root: 'public' });``` : sends the index.html (default page) file found in the 'public' folder
	* ```app.listen(port, () => { <action> });``` : begins listening for calls on the given port, executes the given action now (usually used for logging), and sends any received calls to preceding middleware endpoints defined
	* ```var apiRouter = express.Router()
		app.use(`/api`, apiRouter);
		apiRouter.get('/ex_page', (_req, res) => {
			res.send(exampleFunction());
		});```
		: any requests to folder "/api", use the following middleware; response sends the result of exampleFunction() from /api/ex_page.js

MongoDB Notes
- Installation: 2 aspects 
	* (terminal): npm install mongodb
	* (javascript): const { Mongo Client } = require('mongodb');
- Creating a document:
	* ```const coll_name = client.db('rental').collection('house');``` : the collection object allows you to insert and query for documents in the selected collection. If the collection does not yet exist, it is created with 'insertOne(object)' as described below
	* ```await coll_name_.insertOne(house);``` : 'coll_name_' is the name of the collection, and 'house' is a json javascript object. When an object is inserted, an id is automatically generated.
- Querying a document:
	* 'find' is the function for querying in a collection. Note that it is asynchronous, and requires use of 'await' specified actions. E.g.:
		``` const cursor = coll_name_.find();
		const rentals = await cursor.toArray();
		rentals.forEach((i) => console.log(i)); ```
	* Note that the above case has 'find' empty, and therefore returns all objects in the collection
	* You can create a query in the form of a dictionary, specifying attributes. This can use regex. E.g.: ``` const query = { property_type: 'Condo', beds: { $lt: 2 } };```
	* Queries can also specify the way to organize the response by using an options object (in the form of a dictionary), such as 'sort' for ordering, and 'limit' for amount max. E.g. : ```const options = { sort: { price: -1 }, limit: 10, };```
	* To use these: ```const cursor = collection.find(query, options);```
	* Example with secure credentials:
		```const userName = process.env.MONGOUSER;
		const password = process.env.MONGOPASSWORD;
		const hostname = process.env.MONGOHOSTNAME;

		async function main() {
		  // Connect to the database cluster
		  const url = `mongodb+srv://${userName}:${password}@${hostname}`;
		  const client = new MongoClient(url);
		  const collection = client.db('rental').collection('house');```

Web Sockets
- ```const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';``` : used to determine whether secure protocol
- ```const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);``` : create the socket using the provided protocol
- ```socket.onmessage = async (event) => {...}``` : do actions when the socket receives a message
- ```socket.onclose = (event) => {...}``` : detect socket getting closed for any reason (for detection on user end) 
- ```wss.on('connection', (ws) => {...}``` : detects connections made (this is server end)
- Connections will close if inactive for too long. To prevent this, pings are sent as follows: 
	```  connections.forEach((c) => {
    	// Kill any connection that didn't respond to the ping last time
    	if (!c.alive) {
    	  c.ws.terminate();
    	} else {
    	  c.alive = false;
    	  c.ws.ping();
    	}
	  });```

Misc
- Returning error responses:
	* ```res.status(409).send({ msg: 'conflict scenario e.g. username not recognized' });``` 
- Authorization: 
	* ```uuid.v4();``` : Generates a unique id; requires import: ```const uuid = require('uuid');```
	* ```const passwordHash = await bcrypt.hash(password, 10);``` : encrypt a password; requires import: ```const bcrypt = require('bcrypt');```
	* Store auth-token as a cookie: 
	``` function setAuthCookie(res, authToken) {
	  res.cookie('token', authToken, {
    	secure: true,		// needed to enable security handling
    	httpOnly: true,		// needed to keep javascript from reading cookie
    	sameSite: 'strict',	// needed to secure reading only from same domain
	  });
	}```
	* It is recommended to return (as web call response) the user id (generated upon creation) upon each login
	* Event Listener for keyboard key "Enter":
	```input.addEventListener('keydown', (e) => {
	  if (e.key === 'Enter') {
	    sendMessage();
	  }
	});```

React General
- Setting up React involves three categories (and corresponding folders):
	* Back-end: the files previously in top-level of the service dir will be moved into a file, perhaps called 'src'
	* Front-end: the front-end files previously in their own folder (commonly called 'public') will all be replaced with React code setup. Much of the old file content will be copied over (typically an 'old-public' - new 'public' directory pairing method, where 'old-public' is deleted after the new files are finished)
	* React overhead: some files for React setup will be in the top-level dir of the service. This is easiest done by creating a template project using ```npx create-react-app template-react```, moving the template files into the top-level directory (excluding generic files, such as images, and the npm packages), then deleting the template project. 'js' files should be renamed with a 'jsx' extension. Update ```manifest.json``` and ```index.html```.
	* -> Run "npm install" in the back-end and React overhead directories after the corresponding files have been moved to their new destination
- Some widgets benefit from the React version of bootstrap, such as Button or Modal. Use ```npm install bootstrap react-bootstrap``` and ```import 'bootstrap/dist/css/bootstrap.min.css';``` to install and import.
- Each jsx file will start with ```import React from 'react';```
- _App.jsx_ will be the parent of all components making up a web app. It will be in the top level of the src directory. This is also where the header and footer reside.
- _React Components:_ Essentially a javascript function that returns an html segment. The name of the function becomes the name of the html unit
	* The body of a component will have any functions it uses.
	* State can also be stored. Each variable uses a line setting up the var and the way to change it:
	```const [varName, setVarName] = React.useState(defaultValue);```
- _Router:_ found in index.jsx and app.jsx files
	* ```npm install react-router-dom```
	* ```// index.jsx inclusion:
	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(
	  <BrowserRouter>
	    <App />
	  </BrowserRouter>
	);```
	* In navigation, replace `a` and `href` with `NavLink` and `to` respectively
	* Router example:
	```<Routes>
		<Route path='/' element={<Login />} exact />
		<Route path='/play' element={<Play />} />
		<Route path='/about' element={<About />} />
		<Route path='*' element={<NotFound />} />
	</Routes>```



:}: --=-=-- --==============================================================-- --=-=-- :{:

_Midterm Review Specific Notes:_
To point to another DNS record, use the CNAME dns record type (vs SOA or A)
TXT dns: meta data
SOA (start of authority): how to deal with root access
CNAME: alias
A: standard record, e.g. literal IP address

div: division

You can use CSS to load fonts from Google
"@ import statement"


A promise does not occur until itis called, begins executing asynchronously when it is called, and you should watch for timeout.

setTimeout(()=> {some function}, 10000); is equivalent to sleep for 10 seconds before the function in the timeout

I it doesn't have double quotes, its not JSON

To include javascript:
• <script> js content </script>
• <script src='file.js'/>
• <div onclick='1+1'/>

/regex/ is used to indicate, as in a regex starts and ends with '/'
'|' in a regex is or. Capitolization doesnt matter

let b = a.filter(v => v.match(/regex/)); 
	: makes an array b contianing only elements of a that had some part that matched the regex

let b = a.reduce((a,v) => [a,v].join(':')
reduce: takes an array and reduces it to one value (combining as a string perhaps)
map: maps elements of an array to elements in an array according to the function (the new elements are the result of the function on a given function)
filter: removes or keeps items according to the function

ul: unordered list

Ways to make a variable f equal to a function:
• function f(x) {}  // std
• const f = function(x) {} // assign
• const f = (x) => {} // implicit

Padding puts space around content of elements

Outside going in: margin, border, padding, content

DOM textContent property sets the child text for an element

No curly braces on an implied function means automatic return

Javascript objects use colons, not equal signs

Console Commands:
sudo: give super user authority
ssh: connect to
chmod +x deploy.sh: makes deploy.sh executable
ls -la: include all entries, including symbolic links and hidden (.)

:}: --=-=-- --==============================================================-- --=-=-- :{:

_Final Specific Notes_

Initial/more general notes:
- Cookies are: For the server to store data on the client
- What is the value of WebSocket for HTTP: It is peer-to-peer instead of client-to-server
- Note that regex expressions are case-sensitive by default (and there is some option, perhaps '-i', that triggers case-sensitivity)

HTTP Standard Header examples: 
- Host
- Cookie
- Content-Type
- NOTE: Language is not a standard header type
You can use fetch in both back and front-end code, but note:
- Usually fetch is only used in back-end code when calling another server
Purposes of JSX:
- To combine Javascript and HTML (Note: CSS _not_ included)
- To inject HTML into your Javascript
- To componentize and allow for composability of your HTML
Middle ware notes:
- Middleware matching is evaluated top-to-bottom, starting with the first match
- It proceeds to the next matching middleware if '.next' is called
- ```app.use``` applies to all calls, independent of method
- Subsequent matches are dependent on method (e.g. PUT -> ```app.put(...)```)
- Matching is determined by the content of the call:
	e.g. ```apiRouter.post('/auth/login', async (req, res) => {...}```
	where "/auth/login" is the content. This can include regex or identifiers indicated by ':'.
- A middleware handler must have an active function with either '.next' or ```res.send()```, 
  specifically the response send on the final matching middleware, or the fetch call will hang indefinitely
A Linux daemon:
- Can fork other calls 
- Executes independent of a user (no user involved, it just runs)
- Starts upon computer reboot
- e.g. PM2
Standard Ports:
- 80:  HTTP
- 443: HTTPS
- 22:  SSH
- 223: FTP
HTTP status codes:
- 100s: informational
- 200s: success
- 300s: content redirects or caching
- 400s: client errors
- 500s: server errors
```NPM install <package>```:
- Adds a dependency to your package.json
- Adds source code to the node_modules directory
- Locks the versionof the package to your application (which can be manually modified, often done so to change to a range)
```NPM install``` (by istelf) installs all packages previously installed (noted in the package.json file)


JSX Coding example: 
	```
	const B = () => <b>burger</b>;
	const C = () => <b>fish</b>;
	const D = () => <b>taco</b>;
	const A = () => {
		const [v, updateV] = React.useState(false);
		const [x, updateX] = React.useState(B);

		let o = <C />; // o is C initially if !v; otherwise is B
		if (v) { o = <B />; }

		// This line occurs once initially
		React.useEffect(() => 
							updateX(D), 	// effect taken
							[v]				// dependencies array that also trigger effect
						);

		return (
			<p onClick={() => updateV(true)}>{x}{o}</p>
		);
		  // Note the onClick part only matters when it is clicked; in this case, it would re-trigger the useEffect line
	};
	```
	Component A will initially display 'tacofish'
