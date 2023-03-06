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
'''
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
        scores = JSON.parse(scoresText);
    }
'''
- general useful commands:
	* "await delay(500)" is equivalent to sleeping for .5 seconds
	* it is useful to include console.log("message") statements at key points, such as the end of a script to run
- document commands:
	* document.querySelector('#<id>') : make an existing element into a javascript element object, where <id> is the elements id
	* document.createElement('<elementName>') : creates an element, e.g document.createElement('p') creates '<p></p>'
	* document.querySelectorAll('.<class>') : make an array of elements
		~ example with function applied to each
	'''
		document.querySelectorAll('.game-button').forEach((el, i) => {
            //...
        });
	'''
- element commands:
	* <elementObject>.textContent = <>: assigns a value to an element 
	* <elementObject>.appendChild(<otherElementObject>) : adds an additional child element within the selected element
	* <elementObject>.innerHTML = '<>' : re/places the children elements with the provided text html content <>.
- debugging javascript:
	* You can insert "debugger;" statements in your code, which act as breakpoints, or click on the line in the browser debugger to make that line number a breakpoint
	* When stopped at a breakpoint, your browser debugger should allow you to look at element contents
