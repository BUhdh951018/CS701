angular.module('myFilters', []).filter(
	'extractLink', function() {
		return function(input) {
			var result = "https://twitter.com";
			var startIndex = input.indexOf("https:");
			if (startIndex >= 0) {
				var endIndex = input.indexOf(' ', startIndex);
				if (endIndex == -1)
					endIndex = input.length;
				result = input.slice(startIndex, endIndex);
			};
			console.log(input);console.log(result);
			return result;
		};
});
