if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 300);

}

var x = 0;

var titleText = [ "|",
					"F|",
					"F |",
					"F A|",
					"F A |",
					"F A R|",
					"F A R |",
					"F A R I|",
					"F A R I |",
					"F A R I D|",
					"F A R I D |",
					"F A R I D .|",
					"F A R I D . |",
					"F A R I D . P|",
					"F A R I D . P |",
					"F A R I D . P W|"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}