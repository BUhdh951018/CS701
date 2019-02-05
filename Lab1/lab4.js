(function () {

	window.onload = init;

	function init() {

		var counter = 0;

		var clickButton = document.getElementById("clickButton");
		var resetButton = document.getElementById("resetButton");

		clickButton.addEventListener("click", function (e) {
					counter++;
					console.log(counter);
					document.getElementById("status").innerHTML = "Click counter = " + counter;
				});

		resetButton.addEventListener("click", function (e) {
					counter = 0;
					console.log(counter);
					document.getElementById("status").innerHTML = "Click counter = " + counter;
				});
	     
}

})();
