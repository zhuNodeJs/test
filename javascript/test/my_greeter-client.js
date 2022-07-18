'use strict';

var assert = require('assert');
var MyGreeter = require('../src/MyGreeter.js');

console.log(MyGreeter.Client)

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
});
