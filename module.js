var app = angular.module('mqttTrials',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('mainCtrl', {url:'/', templateUrl:'dashboard.html', controller:'mainCtrl'})
  $urlRouterProvider.otherwise('/');
})
