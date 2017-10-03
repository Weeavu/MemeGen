function changeMeme(){
	
	var e = document.getElementById("memeSelect").value;
	document.getElementById("memePic").src = "assets/" + e;		
	
}

function memeGenerate(){
	
	var topText = document.getElementById("topMeme").value;
	var botText = document.getElementById("botMeme").value;
	
	if(topText == ""){
		document.getElementById("top").innerHTML = "";
	}
	
	if(botText == ""){
		document.getElementById("bot").innerHTML = "";
	}
	
		document.getElementById("top").innerHTML = topText;
		document.getElementById("bot").innerHTML = botText;
	
}