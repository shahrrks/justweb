var divElement; 
function init(){
	console.log("page is loaded and DOM is ready"); 
	divElement = document.querySelector("#theDiv"); 
}

function changeStyle(){
	console.log("add border"); 
	divElement.style.border = "5px dashed Red";
	divElement.style.padding = "10px"; 
	divElement.style.backgroundColor = "lightGreen"; 

}