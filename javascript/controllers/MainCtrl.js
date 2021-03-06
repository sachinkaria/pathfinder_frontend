pathfinder.controller('MainCtrl', ['$scope','$state','$auth', function($scope,$state,$auth){
  $scope.test = "Hello World!";

  $scope.handleLoginBtnClick = function() {
    $auth.submitLogin($scope.loginForm)
    .then(function(resp) {
      console.log('yays');
    })
    .catch(function(resp) {
      console.log('nope.');
    });
  };

  $scope.handleSignOutBtnClick = function() {
    $auth.signOut()
    .then(function(resp) {
      console.log('hooray!');
    })
    .catch(function(resp) {
      console.log('nope.');
    });
  };

  $scope.handleBtnClick = function() {
  $auth.authenticate('facebook')
    .then(function(resp) {
      console.log('facebook yeah!')
    })
    .catch(function(resp) {
      console.log('facebook noooo')
    });
};
}]);
