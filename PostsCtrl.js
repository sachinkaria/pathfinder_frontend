pathfinder.controller('PostsCtrl', ['$scope','$auth','$interval','ProfileService','PostsService', function($scope, $auth, $interval, ProfileService, PostsService){
  $scope.posts = [];
  $scope.current_user = $auth.user;
  $scope.refreshInterval = 2;

  $scope.getPosts = function(){
    return PostsService.getPosts().then(function(response){
      $scope.posts = response.data;
      console.log(response.data)
    });
  };

  $scope.createPost = function(post){
    PostsService.createPost(post);
  };

  $scope.getPosts();

  // $interval(function() {
  //   $scope.getPosts();
  // }, $scope.refreshInterval * 1000);

}]);
