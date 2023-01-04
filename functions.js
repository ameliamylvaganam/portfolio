myimgs = {}
let data = [
	{
		"filepath":"library/mainimgs/humidity.jpg",
		"alttext":"Hazy, abstracted image of person walking down car-lined street",
		"width": "600",
		"height":"450"
	},
	{
		"filepath":"library/mainimgs/maya.jpg",
		"alttext":"10 year old girl with light-medium skin and black shoulder-length hair looks at camera, mid-chew, holding chopsticks above messy bowl",
		"width": "600",
		"height":"450"
	},
	{
		"filepath":"library/mainimgs/elislilies.jpg",
		"alttext":"Red-toned image of hands holding calla lilies with digital camera screen relics",
		"width": "600",
		"height":"450"
	},
	{
		"filepath":"library/mainimgs/mamasclementine.jpg",
		"alttext":"Soft sunlight shines on light-skinned hands hold a partly-peeled clementine",
		"width": "338",
		"height":"450"
	}
]
function initMain() {
	var numchoice = Math.floor(Math.random() * data.length);

	document.getElementById('mainimgspot').innerHTML = "<img id='mainimg' src='" + data[numchoice].filepath + "' alt='" + data[numchoice].alttext + "' width='" + data[numchoice].width + "' height='" + data[numchoice].height + "'>";
	document.getElementsByClassName('bottom')[0].innerHTML = data[numchoice].alttext;
}