angular.module('starter.controllers', ['ngMap', 'starter.factories'])

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

.controller('RouteCtrl', function($scope, $stateParams) {

  $scope.route = Route.find($stateParams.routeId)

  $scope.map = {
    center: "25.678979, -100.321781",
    zoom: 12
  }
})

.controller('RoutesCtrl', function($scope) {
  $scope.favorite_routes = [
    {id: 1, name: 'R-70'},
    {id: 2, name: 'R-71'},
    {id: 3, name: 'R-72'},
    {id: 4, name: 'R-73'},
    {id: 5, name: 'R-74'},
    {id: 6, name: 'R-75'}
  ]
})

.controller('MapCtrl', function($scope, NgMap) {
  $scope.text = "Hallowed be thy name";

  $scope.map = {
    center: "25.669880, -100.377837",
    zoom: 15
  }

  $scope.markers = [
    {pos:[25.669880,-100.378]},
    {pos:[25.669880,-100.379]},
    {pos:[25.669880,-100.380]},
    {pos:[25.669880,-100.381]},
    {pos:[25.669880,-100.382]}
  ]
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
