angular.module("myApp", [])

  .controller('HelloController', function () {
  	this.myCity = 'Boston'; 
  })

  .component("helloWorld",{
    template: `
      <div>
        Name: <input type="text" ng-model="$ctrl.myName"> <hr/>
        <span><b>Hello {{$ctrl.myName}}, 
          I'm from {{$ctrl.cityName}}!</b></span>
      </div>
    `,
    bindings: { cityName: '<' },
    controller: function(){
      this.myName = 'John';
    }
  });

