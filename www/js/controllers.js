angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };
  
   // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('TrucksCtrl', function($scope) {
  $scope.trucks = [
    { id:1, no: 'TN-18-6756', imei: '0358511020724013' },
    { id:2,no: 'TN-A-6758', imei:   '0358511020724567' },
    { id:3,no: 'TN-S65786', imei: '0358511020724351' },
    { id:4,no: 'TN-67-4657', imei: '0358511020724179' },
    { id:5,no: 'TN-18-5467', imei: '0358511020724351' },
    { id:6,no: 'TN-45-S5467', imei: '0358511020723775' }
  ];
  $scope.toggleItem= function(item) {
    if ($scope.isItemShown(item)) {
      $scope.shownItem = null;
    } else {
      $scope.shownItem = item;
    }
  };
  $scope.isItemShown = function(item) {
    return $scope.shownItem === item;
  };
})

.controller('TruckCtrl', function($scope,$http) { 
     $scope.selected=function(truck){
      $scope.selectedtrucklist=truck;
     var promise = $http.get("http://gps.truckjee.com:3001/gps/" +$scope.selectedtrucklist.imei);
      promise.then(function(data){
        var lat = data.data[0]['lat'];
        var long = data.data[0]['long'];
      
          $scope.response = "lat:" +data.data[0]['lat'] + "  long:" +data.data[0]['long']; 

       var myLatlng = new google.maps.LatLng(lat,long);
        var myOptions = {
            zoom: 13,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
         map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            icon: 'http://www.google.com/intl/en_us/mapfiles/ms/icons/blue-dot.png',
            title: "Original Location"
        });

      google.maps.event.addDomListener(window,'load');
    });

   }
   $scope.changedValue = function(truck){
     $scope.selectedtrucklist=truck;
     var promise = $http.get("http://gps.truckjee.com:3001/gps/" +$scope.selectedtrucklist.imei);
      promise.then(function(data){
        var lat = data.data[0]['lat'];
        var long = data.data[0]['long'];
      
          $scope.response = "lat:" +data.data[0]['lat'] + "  long:" +data.data[0]['long']; 

       var myLatlng = new google.maps.LatLng(lat,long);
        var myOptions = {
            zoom: 13,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
         map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            icon: 'http://www.google.com/intl/en_us/mapfiles/ms/icons/blue-dot.png',
            title: "Original Location"
        });

      google.maps.event.addDomListener(window,'load');
    });
   }
 })

