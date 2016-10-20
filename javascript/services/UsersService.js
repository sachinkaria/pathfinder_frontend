pathfinder.service('UsersService', ['$http', function($http){
  var self = this;

  self.getUsers = function(){
    return $http.get("http://localhost:3000/users")
  };

}]);
