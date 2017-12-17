var canvas, ctx, mousePos, mouseButton; 
window.onload = functoin init(){
	canvas = document.getElementById("myCanvas"); 
	ctx = canvas.getContext("2d");

	canvas.addEventListner("mouseup", function(evt){
		var message = "Mouseup at position : " + mousePos.x + "," + mousePos.y; 
		writeMessage(canvas, message);

}