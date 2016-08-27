angular.module('starter.factories', [])

  .service('RouteService', function($http, $ionicPopup) {

    this.all = function() {
      $http({
        method: 'GET',
        url: 'http://busapp-acn.herokuapp.com/api/routes.json',
        // headers: {
        //   'Authorization': 'Basic 242049',
        //   'Accept': 'application/json'
        // }
      }).then(function(response) {
        console.log(response)
      }, function(response) {
        console.log(response)
        var alert = $ionicPopup.alert({
          title: 'Error de conexión',
          templateUrl: 'templates/popups/network_error.html'
        })
      });
    }

    this.getRoute = function(id) {
      $http({
        method: 'GET',
        url: 'http://busapp-acn.herokuapp.com/api/routes/' + id + ".json"
        // headers: {
        //   'Authorization': 'Basic 235769sadkjf',
        //   'Accept': 'application/json'
        // }
      }).then(function(response) {
        console.log(response)
        console.log(response)
      }, function(response) {
        console.log(response)
        var alert = $ionicPopup.alert({
          title: 'Error de conexión',
          templateUrl: 'templates/popups/network_error.html'
        })
      })
    }
  })

  .factory('Route', function($http, $ionicPopup, RouteService) {
    return {
      find: function(id) {
        // return RouteService.getRoute(id);
        return {
          id: id,
          name: 'Sample'
        }
      },

      all: function(id) {
        // return RouteService.all;
        return [
          {id: 1, name: 'Zample'},
          {id: 2, name: 'Zample'},
          {id: 3, name: 'Zample'},
          {id: 4, name: 'Zample'}
        ]
      }

    }
  })
