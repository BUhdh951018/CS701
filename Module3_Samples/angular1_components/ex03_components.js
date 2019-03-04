angular.module("myApp", [])
  .component("helloWorld",{
    template: `<span><b>Hello {{$ctrl.name}}, 
               I'm {{$ctrl.myName}}. 
               Welcome to CS701!</b></span>`,
    bindings: { name: '@' },
    controller: function(){
      this.myName = 'Bob';
    }
  });
