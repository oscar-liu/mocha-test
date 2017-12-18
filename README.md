# mocha-test

Mocha（发音"摩卡"）https://mochajs.org/

所谓"测试框架"，就是运行测试的工具。

## 一、安装mocha

全局安装

    npm install --global mocha


## 二、 测试脚本的写法

    var add = require('./add.js');          //引入待测函数
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

上面这段代码，就是测试脚本，它可以独立执行。测试脚本里面应该包括一个或多个describe块，每个describe块应该包括一个或多个it块。

describe块称为"测试套件"（test suite），表示一组相关的测试。它是一个函数，第一个参数是测试套件的名称（"加法函数的测试"），第二个参数是一个实际执行的函数。

it块称为"测试用例"（test case），表示一个单独的测试，是测试的最小单位。它也是一个函数，第一个参数是测试用例的名称（"1 加 1 应该等于 2"），第二个参数是一个实际执行的函数。


## 三、 断言库的写法

断言库有很多种，可以自己选择

should.js - BDD style shown throughout these docs

expect.js - expect() style assertions

chai - expect(), assert() and should-style assertions

better-assert - C-style self-documenting assert()

unexpected - “the extensible BDD assertion toolkit”

如果断言不成立，就会抛出一个错误。只要不抛出错误，测试用例就算通过

## 四、执行测试脚本
如果是node开发环境，已经配置好了babel转码，可以直接在package.json中指定测试命令为mocha
如：

    "scripts": {
        "test": "mocha"
    }
    npm test

执行单个测试文件用例：
   
    mocha file.test.js

执行多个测试文件用例：

    mocha file.test1.js file.test2.js

Mocha默认运行test子目录里面的测试脚本。所以，一般都会把测试脚本放在test目录里面，然后执行mocha就不需要参数了。

但是默认不执行子文件夹中的测试文件，如果需要执行子目录，需要加参数 --recursive

    mocha --recursive

## 通配符号

命令行执行测试脚本时，可以使用通配符，同时指定多个文件。

    mocha {file1,file2}.js  //执行file1和file2两个js文件
    mocha test/unit/*.js    //执行test/unit下的所有测试脚本文件

除了使用shell通配符，还可以使用node通配符

    mocha 'test/**/*.@(js|jsx)'
    上面代码指定运行test目录下面任何子目录中、文件后缀名为js或jsx的测试脚本。注意，Node的通配符要放在单引号之中，否则星号（*）会先被Shell解释。

## mocha 命令行参数

    mocha --help

查看命令手册
    
输出报告格式： http://mochajs.org/#reporters


使用mochawesome模块，可以生成漂亮的HTML格式的报告。使用方法见mochawesome官网
http://adamgruber.github.io/mochawesome/

