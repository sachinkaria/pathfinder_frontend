pathfinder.service('MessagesService', ['$http', function($http){
  var self = this;

  self.getConversations = function(){
    return $http.get("http://localhost:3000/conversations")
  };

  self.createConversation = function(conversation){
    return $http.post("http://localhost:3000/conversations.json", conversation)
  };

  self.getMessages = function(id){
    return $http.get("http://localhost:3000/conversations/" + id + "/messages")
  };

}]);
