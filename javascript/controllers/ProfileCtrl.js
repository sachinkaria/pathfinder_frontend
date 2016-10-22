pathfinder.controller('ProfileCtrl', ['$scope','$auth','$interval','PostsService', function($scope, $auth, $interval, PostsService){
  $scope.posts = [];
  $scope.current_user = $auth.user;
  $scope.refreshInterval = 2;

  $scope.validateUser = function(){
    if ($auth.user === undefined){
      $scope.validateUser();
    } else {
      $scope.getPosts();
    };
  };

  $scope.getPosts = function(){
    console.log($auth.user.id)
    return PostsService.getUserPosts($auth.user.id).then(function(response){
      $scope.posts = response.data.posts;
    });
  };

  $scope.createPost = function(post){
    PostsService.createPost(post);
  }

  $scope.validateUser();
  //
  // $interval(function() {
  //   $scope.getPosts();
  // }, $scope.refreshInterval * 1000);

}]);
