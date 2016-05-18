var app = angular.module('app', ['ui.bootstrap', 'ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/cup', {
        templateUrl: 'views/cup.html',
        //controller: 'CupCtrl'
      }).
      when('/players', {
        templateUrl: 'views/players.html',
       // controller: 'PlayersCtrl'
      });
  }]);


app.controller('CupCtrl', function($scope) {
     
    $scope.message = 'This is cup screen';
     
});

app.controller('PlayersCtrl', function($scope) {
     
    $scope.message = 'This is players list screen';
     
});