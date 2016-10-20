pathfinder.service('ProfileService', ['$http', function($http){
  var self = this;

  self.getProfile = function(id){
    return $http.get("http://localhost:3000/users/" + id)
  };
}]);
