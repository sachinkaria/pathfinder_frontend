pathfinder.controller('ProfileCtrl', ['$scope','$auth','$interval','$state','PostsService', function($scope, $auth, $interval, $state, PostsService){
  $scope.posts = $auth.user.posts;
  $scope.current_user = $auth.user;
  $scope.refreshInterval = 2;

  $scope.createPost = function(post){
    return PostsService.createPost(post).then(function(response){
      $state.go($state.current, {}, {reload: true});
      // $scope.posts = $auth.user.posts;
    });
  }

}]);
