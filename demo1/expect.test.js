var expect = require('chai').expect;    //断言库


describe('断言库测试', function() {
    it('1 加 1 应该等于 2', function() {
      expect( 1+1 ).to.be.equal(2);
    });
});

describe('断言库测试', function() {
    it('1 加 2 应该不等于 2', function() {
      expect( 1+2 ).to.be.not.equal(2);
    });
});

describe('断言库测试', function() {
    it('对象值测试', function() {
        var foo = { bar: 'baz'}
        expect(foo).to.be.deep.equal({ bar: 'baz' });
    });
});



/**
案例

// 相等或不相等
expect(4 + 5).to.be.equal(9);
expect(4 + 5).to.be.not.equal(10);
expect(foo).to.be.deep.equal({ bar: 'baz' });

// 布尔值为true
expect('everthing').to.be.ok;
expect(false).to.not.be.ok;

// typeof
expect('test').to.be.a('string');
expect({ foo: 'bar' }).to.be.an('object');
expect(foo).to.be.an.instanceof(Foo);

// include
expect([1,2,3]).to.include(2);
expect('foobar').to.contain('foo');
expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');

// empty
expect([]).to.be.empty;
expect('').to.be.empty;
expect({}).to.be.empty;

// match
expect('foobar').to.match(/^foo/);


*/
