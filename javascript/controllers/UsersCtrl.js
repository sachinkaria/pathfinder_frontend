pathfinder.controller('UsersCtrl', ['$scope','$auth','$state','UsersService','MessagesService', function($scope, $auth, $state, UsersService, MessagesService){
  $scope.users = [];
  $scope.user = [];
  $scope.current_user = $auth.user;

  $scope.getUsers = function(){
    return UsersService.getUsers().then(function(response){
      $scope.users = response.data;
    });
  };

  $scope.showUser = function(id){
    return UsersService.showUser(id).then(function(response){
      $scope.user = response.data;
      console.log(response.data)
    });
  }

  $scope.createConversation = function(conversation){
    return MessagesService.createConversation(conversation).then(function(response){
      console.log(response.data)
    });
  }

  $scope.getUsers();

}]);
