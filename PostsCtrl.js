pathfinder.controller('PostsCtrl', ['$scope','PostsService', function($scope, PostsService){
  $scope.test = "Hello World!";

  $scope.getPosts = function(){
    return PostsService.getPosts().then(function(response){
      $scope.posts = response.data
    });
  };

  $scope.getPosts();
}]);
