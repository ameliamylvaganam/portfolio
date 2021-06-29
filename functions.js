console.log("hi this is Amelia");

function init(){
	document.title = document.title + TITLE_SUFFIX;
    var annoucementLink = document.getElementById('annoucement');
    annoucementLink.href = data.announcement.link;

    var annoucementText = document.createElement('span');
    annoucementText.innerText = data.announcement.title + data.announcement.title + data.announcement.title + data.announcement.title + data.announcement.title + data.announcement.title + data.announcement.title + data.announcement.title + data.announcement.title;
    annoucementLink.appendChild(annoucementText);
}
function randoStills(){ // this is obsolete, i cut the random film stills because of file size limits
	var myarray = [{file:"chungkingexpress", title:"Chungking Express (1994)"}];

	var rand = Math.floor(Math.random() * (myarray.length));
  var video = myarray[rand];
	document.body.style.background = 'url(references/'+video.file+'.png) no-repeat center center fixed';
  var text = "still from " + video.title;
  document.body.appendChild(document.createElement('p'));
  document.querySelector("body p:last-child").id = "jstext";
  document.querySelector("#jstext").innerHTML = text;
}

function randoColor(){
  var randr = (Math.floor(Math.random()*255)).toString(16);
  var randg = (Math.floor(Math.random()*255)).toString(16);
  var randb = (Math.floor(Math.random()*255)).toString(16);
  var randomcolor = "#"+randr+randg+randb;
  document.body.style.background = randomcolor;
}

function scroll(pos)
    {
        var txt = "C-sharpcorner";
        var output = "";
        var screen = document.getElementById("wordscroller");
        for (var i = 0; i < pos; i++)
        {
            output += txt.charAt(i);
        }
        output += txt.charAt(pos);
        screen.innerHTML = output;
        pos++;
        if (pos != txt.length)
        {
            window.setTimeout(function () { scroll(pos); }, 200);
        }
        else
        {
            window.setTimeout(function () { scroll(0); }, 5000);
        }
    }

//setInterval(function changeBackground(){randoColor()},3000);
