pathfinder.service('PostsService', ['$http', function($http){
  var self = this;
  self.posts = []

  self.getPosts = function(){
    return $http.get("http://localhost:3000/")
  };

  self.getUserPosts = function(id){
    return $http.get("http://localhost:3000/users/" + id)
  }
}]);
