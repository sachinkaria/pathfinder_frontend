var pathfinder = angular.module('pathfinder', ['ui.router','ng-token-auth','ipCookie'])

.run(['$rootScope', '$state', function($rootScope, $state) {
  $rootScope.$on('auth:login-success', function() {
    console.log('GREAT SUCCESS');
    $state.go('home');
  });
}])
.config(['$stateProvider','$urlRouterProvider','$authProvider', function($stateProvider, $urlRouterProvider, $authProvider){

  $stateProvider
  .state('login', {
    url: '/',
    templateUrl: 'templates/login.html',
    controller: 'MainCtrl'
  })
  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'MainCtrl'
  });

  $urlRouterProvider.otherwise('/');
  $authProvider.configure({
    apiUrl: 'http://localhost:3000',
    facebook: '/auth/facebook'
  });

}])
