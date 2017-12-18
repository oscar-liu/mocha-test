//使用assert断言库的例子，mocha官方推荐
var add = require('./add.js');
var assert = require('assert');

describe('加法函数的测试，使用assert断言库',function(){
    it( '1+1应该等于2',function(){
        assert.equal(add(1,1),2)
    })
})