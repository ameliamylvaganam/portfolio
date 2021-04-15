function randoColor(){
	var dark = false;
	while (!dark){
		var randr = (Math.floor(Math.random()*255)).toString(16);
		var randg = (Math.floor(Math.random()*255)).toString(16);
		var randb = (Math.floor(Math.random()*255)).toString(16);
		if (randr < "dd" && randg < "dd" && randb < "dd"){
			dark = true;}
	}
	var randomcolor = "#"+randr+randg+randb;
	document.body.style.background = randomcolor;
}
setInterval(function changeBackground(){randoColor()},8000);
