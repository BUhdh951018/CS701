angular.module("myApp", [])
  .controller('HelloController', function () {
  	this.myCount = 0; 
  })
  .component("myCounter", {
      templateUrl: './ex06_template.html',
      bindings: { count: '=' },
      controller: function() {
        this.increment = function() { this.count++ };
        this.decrement = function() { this.count-- };
      } 
  });


