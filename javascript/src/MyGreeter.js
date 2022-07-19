
var MyGreeter = {
    Client
}
function Client (name) {
    this.name = name + ' Sir';
    var staticP = 'client';

    this.getGreeting = function() {
        var currentHour = new Date().getHours();
        if (currentHour >= 6 && currentHour < 12) {
            return 'Good morning'
        } else if (currentHour >= 12 && currentHour < 18) {
            return 'Good afternoon'
        } else {
            return 'Good evening'
        }
    }
    this.Constructor = function() {
        
    }

}

module.exports = MyGreeter;