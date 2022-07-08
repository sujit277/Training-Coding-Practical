var events = require('events');
var eventEmitter = new events.EventEmitter;
var listener1 = function listener1(){
    console.log("Listner1");
}
eventEmitter.on('myEvent',listener1);
eventEmitter.emit('myEvent');