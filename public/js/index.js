function changeMeme(){
	
	var e = document.getElementById("memeSelect").value;
	document.getElementById("memePic").src = "assets/" + e;		
	
}

function memeGenerate(){
	
	var download = document.getElementById("downloadMeme");
	var topText = document.getElementById("topMeme").value;
	var botText = document.getElementById("botMeme").value;
	
	var canvas = document.getElementById("canMeme");
	var ctx = canvas.getContext("2d");
	
	var background = new Image();
	background.src = canvas.style.backgroundImage.substring(4, 35);
	
	console.log(canvas.style.backgroundImage);
	
	ctx.drawImage(background, 0, 0);
	
	ctx.font = "35px Impact";
	ctx.textAlign = "center";
	ctx.fillStyle = "white";
	ctx.lineWidth = 1.5;
	ctx.strokeStyle = "#000000";
	
	ctx.fillText(topText, canvas.width/2, 40);
	ctx.strokeText(topText, canvas.width/2, 40);
	
	ctx.fillText(botText, canvas.width/2, canvas.height - 20);
	ctx.strokeText(botText, canvas.width/2, canvas.height - 20);
	

	download.style.visibility = "visible";
	download.href = canToImage(canvas).src;
	
	console.log("hi");
}

function canToImage(canvas){
	var image = new Image();
	image.src = canvas.toDataURL("image/png");
	return image;
}