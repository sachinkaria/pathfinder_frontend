pathfinder.controller('MessagesCtrl', ['$scope','MessagesService', function($scope, MessagesService){
  $scope.conversations = [];
  // $scope.current_user = $auth.user;

  $scope.getConversations = function(){
    return MessagesService.getConversations().then(function(response){
      $scope.conversations = response.data;
      console.log(response.data)
    });
  };

$scope.getConversations();

}]);
