var a = prompt("Enter a"); 
var b = prompt("Enter b"); 
var c = prompt("Enter c"); 

quadratic(a, b, c); 
console.log(b1);
console.log(b2);
var quadratic(a , b , c ){
	var a, b, c; 
	var m = b^2 - 4 * a *c; 
	var b1 = (-b + Math.sqrt(m))/2*a
	var b2 = (-b - Math.sqrt(m))/2*a
return b1, b2; 
}