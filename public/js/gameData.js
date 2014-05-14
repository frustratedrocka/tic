/* TIC Game Data File
 * Ben Forde
 * CS50 Implementation
 * Inspiration for framework taken from http://bit.ly/1io32YV
 */

// Global variables
var turns = 0;
var inventory = [];

// Locations - Areas & Rooms
var locations = 
{
	// Room 1: Infirmary
	operatingRoom: 
	{
		name:"Operating Room",
		visited:0,
		// "Look" or "Look around" results
		desc:
		[
			"<p>You are in a small, stone room lit by a single torch. Judging by the ancient bloodstains on the floor, this room was once used for surgery. There is a door to the NORTH.<p>",
		],

		// Initial description
		firstMessage:[
			"<p>You awaken to the slow drip of water on stone and the feel of a smooth metal surface beneath you. You open your eyes to find yourself in a small torchlit room. There is a door to what, as far as you can tell, is NORTH, but a board has been nailed over it.</p>",
		],

		// Flags
		doorOpen:false,

		// Objects present
		objects:["grate", "note", "prybar"],
		turns:0,
		exits:[0],

		update:function(){
			console.log("Update operating room called");
			if (locations.operatingRoom.turns == 1){
				message = "<p>You hear a very quiet, metallic clicking that seems to be coming through the door.</p>";
			}

			if (locations.operatingRoom.turns == 2){
				message = "<p>You see a NOTE slide under the door and hear the clicking sound fade away.</p>"
			}
			if (in_array(locations.operatingRoom.objects, "note") == false &&
				locations.infirmary.turns >= 3)
			{
				locations.operatingRoom.desc.push(
					"<p>There is a small NOTE in front of the door.</p>"
				);
			}

			if (objects.note.read == true){
				locations.operatingRoom.desc.push(
					"<p>There is a small GRATE along the south wall.</p>"
				);
			}

			if (locations.operatingRoom.grateOpen == true && 
				in_array(locations.operatingRoom.objects, "knife") == false)
			{
				locations.operatingRoom.desc.push(
					"<p>There is an old, rusted KNIFE waiting for you in the hole behind the grate.</p>"
				);
			}

			if (locations.operatingRoom.doorOpen == false){
				addMessage("<p>The door is boarded shut.</p>")
			}
		}
	},

	neTower: {
		name:"Tower",
		//TODO description:"",
		stage:0,
		turns:0,
		onEntry:[
			//TODO
		],
		commands:[
			//TODO
		],
	},

	chapel: {
		name:"Chapel",
		//TODO description:"",
		stage:0,
		turns:0,
		onEntry:[
			function chapelAttack(){
				if(locations.chapel.stage == 0){
					/*
					var desc1 = TODO;
					var desc2 = TODO;
					var desc3 = TODO;
					var desc4 = TODO;
					var desc5 = TODO;
					*/
				//TODO
				}
			}
			//TODO
		],
		commands:[
			//TODO
		]
	},

	entryHall: {
		name:"Entry Hall",
		//TODO description:"",
		stage:0,
		turns:0,
		onEntry:[
			//TODO
		],
		commands:[
			//TODO
		]
	}
}

var objects = {
	note: {
		name: "Note",
		desc: [
			"<p>The note reads:</p><p>\"I know you're confused and scared, but right now you have to trust me. My name is Julius Caughlin, and I am the only friend you have in this place. There is no time to explain any more.</p><p>\"There is a grate in the south wall. Inside, you will find a small prybar. I will continue to help you however I can. Good luck.</p><p>\"Oh, one more thing. I'm sorry about your arm.\"</p>",
		],
		firstRead:"<p>You hear the sound of creaking metal from the south wall.</p>",
		read: false,
		takable:true,
		onLook:function (){
			objects.note.read = true;
			return true;
		},
		update:function update(){
			if (objects.note.read == true){
				remove_from_array(objects.note.desc, "firstRead");
			}
		}
	},

	grate:{
		name: "Grate",
		desc: "There is a small metal grate in the wall. As you look at it, it swings open."
	},

	prybar: {
		name: "Prybar",
		desc: "A small, thin, rusty piece of metal.",
	},
}
