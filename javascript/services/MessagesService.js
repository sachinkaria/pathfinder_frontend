pathfinder.service('MessagesService', ['$http', function($http){
  var self = this;

  self.getConversations = function(){
    return $http.get("http://localhost:3000/conversations")
  };


}]);