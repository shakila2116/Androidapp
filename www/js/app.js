// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('truckjee', {
    url: '/truckjee',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('truckjee.search', {
    url: '/requirements',
    views: {
      'menuContent': {
        templateUrl: 'templates/requirements.html'
      }
    }
  })

  .state('truckjee.browse', {
      url: '/transaction',
      views: {
        'menuContent': {
          templateUrl: 'templates/transaction.html'
        }
      }
    })
    .state('truckjee.trucks', {
      url: '/trucks',
      views: {
        'menuContent': {
          templateUrl: 'templates/trucks.html',
          controller: 'TrucksCtrl'
        }
      }
    })

.state('truckjee.single', {
    url: '/trucks/:truckid',
    views: {
      'menuContent': {
        templateUrl: 'templates/truck.html',
        controller: 'TruckCtrl',
        // params:{
        //   imei:'truckid',
        // }
      }
      }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/truckjee/trucks');
});
