
var counter = 0;

function incrementCounter() {
	counter++;
	console.log(counter);
	document.getElementById("status").innerHTML = "Click counter = " + counter;
}
     
function resetCounter() {
	counter = 0;
	console.log(counter);
	document.getElementById("status").innerHTML = "Click counter = " + counter;
}
