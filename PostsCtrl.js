pathfinder.controller('PostsCtrl', ['$scope','PostsService','$auth', function($scope, PostsService, $auth){
  $scope.current_user = $auth.user;


  $scope.getPosts = function(){
    return PostsService.getPosts().then(function(response){
      $scope.posts = response.data;
    });
  };

  _getUserName = function(){
  }

  $scope.getPosts();
}]);
