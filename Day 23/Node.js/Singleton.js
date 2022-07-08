var singleton = (function () {
    var instance;
    return {
        getInstance: function () {
            console.log("Request to get ");

            if (!instance) {
                console.log("Inside If");
                instance = new Object("This is the new Instance");
            }
            return instance;
        }
    }
})();

var instance1 = singleton.getInstance();
var instance2 = singleton.getInstance();

if(instance1 == instance2){
    console.log("Both objects are Same");
}
