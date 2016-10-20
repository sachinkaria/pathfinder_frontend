pathfinder.controller('UsersCtrl', ['$scope','$auth','UsersService','MessagesService', function($scope, $auth, UsersService, MessagesService){
  $scope.users = [];
  $scope.current_user = $auth.user;

  $scope.getUsers = function(){
    return UsersService.getUsers().then(function(response){
      $scope.users = response.data;
      console.log(response.data);
    });
  };

  $scope.createConversation = function(conversation){
    return MessagesService.createConversation(conversation).then(function(response){
      console.log(response.data)
    });
  }

  $scope.getUsers();

}]);
