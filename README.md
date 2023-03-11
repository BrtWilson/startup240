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
Debugging Tips in HTML and other
- If something is missing, check for missing bracketing.
- If any functionality is not as expected, double check lettering

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
.
.
.
.
Midterm Review Specific Notes:
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