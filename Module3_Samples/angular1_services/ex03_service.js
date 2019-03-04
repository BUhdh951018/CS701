angular.module("myServices", [])
	.service("logService", function() {
		var logCount = 0;
		var alertCount = 0;
		this.log = function(msg) {
				logCount++;
				console.log("[LOG + " + logCount + "]: " + msg);
		};
		this.alert = function(msg) {
				alertCount++;
				alert("[ALERT + " + alertCount + "]: " + msg);
		};
	});
	
	

