//add.test.js

var add = require('./add.js');
var expect = require('chai').expect;    //断言库
/**
 * 断言库有很多种，Mocha并不限制使用哪一种。
 * 上面代码引入的断言库是chai，并且指定使用它的expect断言风格。
*/

describe('加法函数的测试', function() {
    it('1 加 1 应该等于 2', function() {
      expect(add(1, 1)).to.be.equal(2);
    });
  });

/**
 * 所谓"断言"，就是判断源码的实际执行结果与预期结果是否一致，如果不一致就抛出一个错误。
 * 上面这句断言的意思是，调用add(1, 1)，结果应该等于2。
*/

describe('加法函数的测试2', function() {
    it('1 加 4 应该等于 5', function() {
        expect(add(1, 4)).to.be.equal(5);
    });
});