var video =document.getElementById('video');
var image2 =document.getElementById('imgBack');
var canvas =document.getElementById('imgResult');

document.getElementById('myBtn').onclick = function(){
	
	retCtx = canvas.getContext('2d');
	
	canvas.width = video.Width;
	canvas.height = video.Height
	
	retCtx.drawImage(video, 0, 0);
	retCtx.drawImage(image2, 0, 0);
};

function drawImage