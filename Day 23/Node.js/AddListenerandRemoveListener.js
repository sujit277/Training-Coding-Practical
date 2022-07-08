var events = require('events');
var eventEmitter = new events.EventEmitter;
var listener1 = function listener1(){
    console.log("Listener 1")
}
var listener2 = function listener2(){
    console.log("Listener 2");
}
eventEmitter.on('myevent',listener1);
eventEmitter.addListener('myevent',listener2);
eventEmitter.emit('myevent');
console.log("Number of Events Listener are: "+eventEmitter.listenerCount('myevent'));
console.log("Listener of MyEvent are:"+eventEmitter.listeners);
eventEmitter.removeListener('myevent',listener2);
console.log("After Removing Listener 2");
console.log("Number of Events Listener are: "+eventEmitter.listenerCount('myevent'));
console.log("Listener of MyEvent are:"+eventEmitter.listeners);

