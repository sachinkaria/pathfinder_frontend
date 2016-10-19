pathfinder.controller('PostsCtrl', ['$scope','$auth','$interval','ProfileService','PostsService', function($scope, $auth, $interval, ProfileService, PostsService){
  $scope.posts = [];
  $scope.current_user = $auth.user;
  $scope.refreshInterval = 2;
  $scope.ownsPost = false;

  $scope.getPosts = function(){
    return PostsService.getPosts().then(function(response){
      $scope.posts = response.data;
      console.log(response.data)
    });
  };

  $scope.createPost = function(post){
    PostsService.createPost(post);
  };

  $scope.destroyPost = function(id){
    PostsService.destroyPost(id);
  }

  $scope.getPosts();

}]);
