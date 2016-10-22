pathfinder.service('PostsService', ['$http', function($http){
  var self = this;
  self.posts = []

  self.getPosts = function(){
    return $http.get("http://localhost:3000/")
  };

  self.getUserPosts = function(id){
    return $http.get("http://localhost:3000/users/" + id)
  };

  self.createPost = function(post){
    return $http.post("http://localhost:3000/posts.json", post)
  };

  self.destroyPost = function(id){
    $http.delete("http://localhost:3000/posts/" + id).success(function(data){
      console.log(data)
    });
  };

}]);
