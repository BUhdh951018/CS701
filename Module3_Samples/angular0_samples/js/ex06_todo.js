function TodoController($scope) {
  $scope.todos = [
    {text:'Learn HTML5', done:true},
    {text:'Learn jQuery', done:false},
    {text:'Learn AngularJs', done:false}];
    
  $scope.todoText = '';
 
  $scope.addTodo = function() {
  	if ($scope.todoText.trim() != '') {
    	$scope.todos.push(
    		{text:$scope.todoText, done:false});
    	$scope.todoText = '';
   }
  };
 
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };
 
  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };
}
