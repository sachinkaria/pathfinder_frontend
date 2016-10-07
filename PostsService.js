pathfinder.service('PostsService', ['$http', function($http){
  var self = this;
  self.posts = []

  self.getPosts = function(){
    return $http.get("http://localhost:3000/")
  };
}]);
