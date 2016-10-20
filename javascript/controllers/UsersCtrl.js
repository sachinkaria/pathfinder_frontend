pathfinder.controller('UsersCtrl', ['$scope','$auth','UsersService', function($scope, $auth, UsersService){
  $scope.users = [];
  $scope.current_user = $auth.user;

  $scope.getUsers = function(){
    return UsersService.getUsers().then(function(response){
      $scope.users = response.data;
      console.log(response.data);
    });
  };

  $scope.getUsers();

}]);
