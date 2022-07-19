
var MyGreeter = {
    Client
}
function Client (name) {
    this.name = name + ' Sir';
    var staticP = 'client';
    this.getGreeting = function() {
        return 'hello world'
    }
    this.Constructor = function() {
        
    }

}

module.exports = MyGreeter;