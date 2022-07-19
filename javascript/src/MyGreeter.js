
var MyGreeter = {
    Client
}
function Client (name) {
    var staticP = 'client'; // 静态属性
    // 初始化参数
    this.Constructor = function() {
        this.name = name + ' Sir';
        this.currentHour = new Date().getHours();
    }

    this.Constructor()
    
    this.getGreeting = function() {
        if (this.currentHour >= 6 && this.currentHour < 12) {
            return 'Good morning'
        } else if (this.currentHour >= 12 && this.currentHour < 18) {
            return 'Good afternoon'
        } else {
            return 'Good evening'
        }
    }
}

module.exports = MyGreeter;