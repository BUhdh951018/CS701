angular.module("myApp", [])
	.component("helloWorld",{
		template: `<span><b>Hello {{$ctrl.name}}, 
		           Welcome to CS701!</b></span>`,
		bindings: { name: '@' }
  });
