var app = angular.module('mqttTrials');

app.controller('mainCtrl', function($scope) {

  $scope.test = function(){
    console.log('test succeeds!')
  }
});
