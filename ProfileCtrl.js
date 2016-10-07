pathfinder.controller('ProfileCtrl', ['$scope','$auth','PostsService', function($scope, $auth, PostsService){
  $scope.posts = [];
  $scope.current_user = $auth.user;

  $scope.getPosts = function(){
    return PostsService.getUserPosts($auth.user.id).then(function(response){
      $scope.posts = response.data;
    });
  };

  $scope.getPosts();
}]);
