angular.module("myServices", [])
	.provider("logService", function() {
		var logCount = 0, alertCount = 0;
		var logFlag = false, alertFlag = true;
		
		return {
			logEnabled: function(value) {
				logFlag = value;
				return this;
			},
			alertEnabled: function(value) {
				alertFlag = value;
				return this;
			},
			$get: function() {
				return {
					log : function(msg) {
						if (logFlag) {
							logCount++;
							console.log("[LOG + " + logCount + "]: " + msg);
						}
					},
					alert : function(msg) {
						if (alertFlag) {
							alertCount++;
							alert("[ALERT + " + alertCount + "]: " + msg);
						}
					}
				}
			}
		}
	});

