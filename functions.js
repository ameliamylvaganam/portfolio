//tentative alternative to use one big array to generate the umbrella pos (random, switches each time site is loaded?)
// i kinda pref the determinism but i hate the process of adding a new one / making changes
// think it would be valuable to keep it all in one big array anyway and just pull data from that for the umbrellas, keeping it deterministic
// fields for each: title (str), link (str), color (hex code str), xpos (percent int), ypos (percent int)
// !!! how to indicate style with title str???

mydata = [
{
	text: "item",
	link: "mia.wiki",
	color: "#555555",
	xpos: 50,
	ypos: 50,
},
{
	text: "item",
	link: "mia.wiki",
	color: "#555555",
	xpos: 50,
	ypos: 50,
},
{
	text: "item",
	link: "mia.wiki",
	color: "#555555",
	xpos: 50,
	ypos: 50,
},
]