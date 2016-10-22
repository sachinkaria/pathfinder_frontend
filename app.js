var pathfinder = angular.module('pathfinder', ['ui.router','ng-token-auth','ipCookie','angularMoment'])

.run(['$rootScope', '$state', function($rootScope, $state) {
  $rootScope.$on('auth:login-success', function() {
    console.log('GREAT SUCCESS');
    $state.go('home');
  })
  $rootScope.$on('auth:logout-success', function() {
    console.log('GREAT SUCCESS');
    $state.go('login');
  });
}])
.config(['$stateProvider','$urlRouterProvider','$authProvider', function($stateProvider, $urlRouterProvider, $authProvider){

  $stateProvider
  .state('login', {
    url: '/',
    views: {
      content: {
        templateUrl: 'templates/login.html',
        controller: 'MainCtrl'
      }
    }
  })
  .state('home', {
    name: 'home',
    url: '/home',
    views: {
      nav: {
        templateUrl: 'templates/navbar.html',
        controller: 'MainCtrl'
      },
      resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
      },
      content: {
        templateUrl: 'templates/home.html',
        controller: 'PostsCtrl'
      }
    }
  })
  .state('profile', {
    name: 'profile',
    url: '/profile',
    resolve: {
      auth: function($auth) {
        return $auth.validateUser();
      }
    },
    views: {
      nav: {
        templateUrl: 'templates/navbar.html',
        controller: 'MainCtrl'
      },
      content: {
        templateUrl: 'templates/profile.html',
        controller: 'ProfileCtrl'
      }
    }
  })
  .state('messages', {
    name: 'messages',
    url: '/messages',
    resolve: {
      auth: function($auth) {
        return $auth.validateUser();
      }
    },
    views: {
      nav: {
        templateUrl: 'templates/navbar.html',
        controller: 'MainCtrl'
      },
      content: {
        templateUrl: 'templates/messages.html',
        controller: 'MessagesCtrl'
      }
    }
  })
  .state('users', {
    name: 'users',
    url: '/users',
    views: {
      nav: {
        templateUrl: 'templates/navbar.html',
        controller: 'MainCtrl'
      },
      content: {
        templateUrl: 'templates/users/index.html',
        controller: 'UsersCtrl'
      }
    }
  })
  .state('users.show', {
    name: 'users.show',
    url: '/show/:id',
    views: {
      nav: {
        templateUrl: 'templates/navbar.html',
        controller: 'MainCtrl'
      },
      content: {
        templateUrl: 'templates/users/show.html',
        controller: 'UsersCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/');

  $authProvider.configure({
    apiUrl: 'http://localhost:3000',
    facebook: '/auth/facebook'
  });

}])
