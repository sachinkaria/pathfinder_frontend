pathfinder.controller('MessagesCtrl', ['$scope','$auth','MessagesService', function($scope, $auth, MessagesService){
  $scope.conversations = [];

  $scope.getConversations = function(){
    return MessagesService.getConversations().then(function(response){
      $scope.conversations = response.data;
      console.log(response.data)
    });
  };

  $scope.getMessages = function(id){
    return MessagesService.getMessages(id).then(function(response){
      $scope.messages = response.data;
      $scope.conversation_id = id;
    });
  };

  $scope.sendMessage = function(message){
    message.user_id = $auth.user.id;
    return MessagesService.sendMessage($scope.conversation_id, message).then(function(response){
    $scope.getMessages($scope.conversation_id)});
  };


$scope.getConversations();

}]);
