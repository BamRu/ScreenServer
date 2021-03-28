var image1 =document.getElementById('imgMain');
var image2 =document.getElementById('imgBack');
var canvas =document.getElementById('imgResult');

document.getElementById('myBtn').onclick = function(){
	
	retCtx = canvas.getContext('2d');
	
	retCtx.drawImage(image2, 0, 0);
	retCtx.drawImage(image1, 0, 0);
};
