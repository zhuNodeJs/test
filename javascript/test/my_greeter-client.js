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
});
