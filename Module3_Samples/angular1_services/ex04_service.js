angular.module("myServices", [])
	.provider("logService", function() {
		var logCount = 0;
		var alertCount = 0;
		
		return {
			$get: function() {
				return {
					log : function(msg) {
						logCount++;
						console.log("[LOG + " + logCount + "]: " + msg);
					},
					alert : function(msg) {
						alertCount++;
						alert("[ALERT + " + alertCount + "]: " + msg);
					}
				}
			}
		}
	});

