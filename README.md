# mocha-test

Mocha（发音"摩卡"）https://mochajs.org/

所谓"测试框架"，就是运行测试的工具。

## 一、安装mocha

全局安装

    npm install --global mocha


## 二、 测试脚本的写法

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

执行单个测试文件用例：
   
    mocha file.test.js

执行多个测试文件用例：

    mocha file.test1.js file.test2.js

Mocha默认运行test子目录里面的测试脚本。所以，一般都会把测试脚本放在test目录里面，然后执行mocha就不需要参数了。

但是默认不执行子文件夹中的测试文件，如果需要执行子目录，需要加参数 --recursive

    mocha --recursive

## mocha 命令行参数

    mocha --help

查看命令手册
    
输出报告格式： http://mochajs.org/#reporters
    