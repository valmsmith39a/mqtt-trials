var app = angular.module('mqttTrials');

app.controller('mainCtrl', function($scope) {

  $scope.test = function(){
    console.log('test succeeds!')
  }

  /*
    MQTT:
    MQ Telemtry Transport (MQTT)
    A network protocol used for publish/subscribe messaging between devices.

    client and broker connected. broker can send client data.
  */

  var broker = "test.mosquitto.org";
  var port = 8080;

  var localBroker = location.hostname;
  var localPort = location.port;
  var client = new Paho.MQTT.Client(localBroker), Number(localPort), "clientId");




});
