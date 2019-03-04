angular.module("myApp", [])
  .controller('HelloController', function () {
  	this.myCount = 0; 
  })
  .component("myCounter", {
      template: `
        <div>
          <input type="text" ng-model="$ctrl.count">
          <button type="button" class="btn btn-primary" 
              ng-click="$ctrl.increment();">+</button>
          <button type="button" class="btn btn-danger" 
              ng-click="$ctrl.decrement();">-</button>
          <hr/>
          Component Current value: {{$ctrl.count}}
        </div>
      `,
      bindings: { count: '=' },
      controller: function() {
        this.increment = function() { this.count++ };
        this.decrement = function() { this.count-- };
      } 
  });
