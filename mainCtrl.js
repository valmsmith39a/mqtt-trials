var app = angular.module('mqttTrials');

app.controller('mainCtrl', function($scope) {

  /*
    MQTT:
    MQ Telemtry Transport (MQTT)
    A network protocol used for publish/subscribe messaging between devices.

    client and broker connected using a WebSocket connection. broker can send client data.

    publisher: sender of message (client(Paho))
    subscriber: receiver of message (broker(mosquitto or local host))
  */

  var broker = "test.mosquitto.org";
  var port = 8080;

  var client = new Paho.MQTT.Client(broker, Number(port), "clientId");

  /* callback handlers */
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;

  /* connect client */
  client.connect({ onSuccess: onConnect});

  function onConnect() {
    /* when client is connected to broker, create a subscription. client publishes messages to /World and can also get messages from /World */
    client.subscribe('/World');

    var message = new Paho.MQTT.Message('hello');

    message.destinationName = '/World';
    client.send(message);
  }

  function onConnectionLost(responseObject) {
    if(responseObject.errorCode !== 0) {
      console.log('onConnectionLost: ' + responseObject.errorMessage);
    }
  }

  function onMessageArrived(message) {
    console.log('onMessageArrived: ' + message.payloadString);
  }
  
});
