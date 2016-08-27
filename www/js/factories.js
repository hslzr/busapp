angular.module('starter.factories', [])

  .service('RouteService', function($http, $ionicPopup) {
    this.getRoute = function(id) {
      $http({
        method: 'GET',
        url: 'asdlkfjh',
        headers: {
          'Authorization': 'Basic 235769sadkjf',
          'Accept': 'application/json'
        }
      }).then(function(response) {
        // if success
        console.log(response)
      }, function(response) {
        // If it fails
        var alert = $ionicPopup.alert({
          title: 'Error de conexión',
          templateUrl: 'templates/popups/network_error.html'
        })
      })
    }
  })

  .factory('Route', function($http, $ionicPopup) {
    return {
    }
  })
