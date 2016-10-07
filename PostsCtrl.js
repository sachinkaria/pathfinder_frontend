pathfinder.controller('PostsCtrl', ['$scope','PostsService','$auth','ProfileService', function($scope, PostsService, $auth, ProfileService){
  $scope.posts = [];
  $scope.current_user = $auth.user;

  $scope.getPosts = function(){
    return PostsService.getPosts().then(function(response){
      $scope.posts = response.data;
    });
  };

  $scope.createPost = function(post){
    PostsService.createPost(post);
  }

  $scope.getPosts();
}]);
