'use strict';

var assert = require('assert');
var MyGreeter = require('../src/MyGreeter.js');


describe('MyGreeter.Client', function () {

    describe('Constructor', function () {

        it('should be instantiated', function() {
            var greeter = new MyGreeter.Client();

            assert.ok(greeter instanceof MyGreeter.Client);
        });
    });

    describe('getGreeting', function () {

        it('should return something with length', function() {
            var greeter = new MyGreeter.Client();

            assert.equal(greeter.getGreeting().length > 0, true);
        });
    });

    describe('add params', function() {
        it('decide correct params', function() {
            var zhu = new MyGreeter.Client('zhu')
            assert.equal(zhu.name === 'zhu Sir' , true);
        })
    })

    describe('static property', function() {
        it('static class property', function() {
            var p1 = new MyGreeter.Client().staticP;
            var p2 = new MyGreeter.Client().staticP;
            assert.equal(p1 === p2, true);
        })
    })

    describe('get correct greeting', function() {
        it('correct greeting', function() {
            var currentHour = new Date().getHours();
            var getMessages = new MyGreeter.Client().getGreeting();
            var message = '';
            if (currentHour >= 6 && currentHour < 12) {
                message = 'Good morning'
            } else if (currentHour >= 12 && currentHour < 18) {
                message = 'Good afternoon'
            } else {
                message = 'Good evening'
            }
            assert.equal(message === getMessages, true);
        })
    })
});
