/* Tic game engine
 * Ben Forde
 *
 * Functions in_array, remove_from_array taken from
 * https://github.com/williame/ludum_dare_23_tiny_world/blob/gh-pages/game.js
 */

function turnCounter() {
	turns++;
	currentLocation.turns++;
	currentLocation.update();
	return true;
}

function in_array(array,obj) {
	for(var i in array){
		if(array[i] === obj){
			return true;
		}
	}
	return false;
}

function remove_from_array(array,obj) {
	for(var i in array)
		if(array[i] === obj) {
			array.splice(i,1);
			return true;
		}
	return false;
}

//change HTML
function changeText(oldText, newText) {
	console.log("changeText called with input ", oldText, "outputting to ", newText);
	document.getElementByID(oldText).innerHTML = newText;
}

function addMessage(input){
	output.message.push(input);
}

function move(dir){
	var exits = currentLocation.exits;
	if (in_array(exits, dir)){
		var key = exits.indexOf(dir) + 1;
		var dest = currentLocation.key;
		oldLocation = currentLocation;
		currentLocation = go.dest;
		refreshLocation(currentLocation);
		turns++;
		return true;
	}
	junk();
	return false;
}

function take(object){
	// check that item exists, is present, and can be taken
	if (in_array(objects, object) && objects.item.takable == true &&
		in_array(currentLocation.objects, object))
	{
		inventory.push(object);
		remove_from_array(currentLocation.objects, object);
		currentLocation.update();
		turnCounter();
		return true;
	}
	junk();
	return false;
}

function look(subject){
	if (in_array(currentLocation, subject)){
		var sight = currentLocation.desc.join();
		addMessage(sight);
		turnCounter();
		return true;
	}
	else if (in_array(currentLocation.objects, subject) || 
		in_array(inventory, subject))
	{
		var sight = objects.subject.desc.join()
		addMessage(sight);
		turnCounter();
		subject.update();
		return true;
	}
	junk();
	return false;
}

function init(){
	inventory = [];
	currentLocation = locations.operatingRoom;
	turns = 0;
	for (i in locations){
		i.turns = 0;
		i.reset();
	}
	for (i in objects){
		i.reset();
	}

function parser(){
	// list of valid commands
	var input = form.inputBox.value;
	input = input.toLowerCase();
	input = input.split(" ");
	/* var commands = {
		"go":move(dir),
		"look",
		"take|get",
		"inventory",
		"help",
		"use",
	*/
	}
	if (in_array(parser.commands, input[0])){
		if (input[0] == commands[0]){
			move(input[1]);
		}
		else if (input[0] == commands[1]){
			look(input[1]);
		}
		else if (input[0] == commands[2]){
			take(input[1]);
		}
		else if (input[0] == commands[3]){
			inventory();
		}
		else if (input[0] == commands[4]){
			help();
		}
		else if (input[0] == commands[5]){
			//TODO
			use(input[1]);
		}
	}
	else {
		junk();
	}
	output();
}

function displayInput(){
	
}

function junk(){
	addMessage("Command not recognized.");
	addMessage(output.oldMessage);
	return true;
}
function output(){
	var oldMessage = message;
	var message = [];
	document.getElementByID("").innerHTML = output.message.join();
}