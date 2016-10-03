(function($) {
  /*
  ======== A Handy Little QUnit Reference ========
  http://api.qunitjs.com/

  Test methods:
    module(name, {[setup][ ,teardown]})
    test(name, callback)
    expect(numberOfAssertions)
    stop(increment)
    start(decrement)
  Test assertions:
   (value, [message])
    equal(actual, expected, [message])
    notEqual(actual, expected, [message])
    deepEqual(actual, expected, [message])
    notDeepEqual(actual, expected, [message])
    strictEqual(actual, expected, [message])
    notStrictEqual(actual, expected, [message])
    throws(block, [expected], [message])
    */
  module('asColor', {
    // This will run before each test in this module.
    setup: function() {

    }
  });

  test('method set', function(){

  });

  test('method get', function(){

  });

  test('method alpha', function(){

  });

  test('method to', function(){

  });


  test('color #ffffff', function() {
    let color = new AsColor('#ffffff');
    expect(color.toRGB()).to.be.equal('rgb(255, 255, 255)');
    expect(color.toRGBA()).to.be.equal('rgba(255, 255, 255, 1)');
    expect(color.toHSL()).to.be.equal('hsl(0, 0%, 100%)');
    expect(color.toHSLA()).to.be.equal('hsla(0, 0%, 100%, 1)');
    expect(color.toHEX()).to.be.equal('#ffffff');
    expect(color.toString()).to.be.equal('#ffffff');
  });

  test('color rgb(255, 0, 6)', function(){
    let color = new AsColor('rgb(255, 0, 6)');
    expect(color.toRGB()).to.be.equal('rgb(255, 0, 6)');
    expect(color.toRGBA()).to.be.equal('rgba(255, 0, 6, 1)');
    expect(color.toHSL()).to.be.equal('hsl(359, 100%, 50%)');
    expect(color.toHSLA()).to.be.equal('hsla(359, 100%, 50%, 1)');
    expect(color.toHEX()).to.be.equal('#ff0006');
    expect(color.toString()).to.be.equal('rgb(255, 0, 6)');
  });

  test('color rgb(238, 79, 185)', function() {
    let color = new AsColor('rgb(238, 79, 185)');
    expect(color.toRGB()).to.be.equal('rgb(238, 79, 185)');
    expect(color.toRGBA()).to.be.equal('rgba(238, 79, 185, 1)');
    expect(color.toHSL()).to.be.equal('hsl(320, 82%, 62%)');
    expect(color.toHSLA()).to.be.equal('hsla(320, 82%, 62%, 1)');
    expect(color.toHEX()).to.be.equal('#ee4fb9');
    expect(color.toString()).to.be.equal('rgb(238, 79, 185)');
  });

  test('color hsl(244, 81%, 44%)', function() {
    let color = new AsColor('hsl(244, 81%, 44%)');
    expect(color.toRGB()).to.be.equal('rgb(33, 21, 203)'); /* ! */
    expect(color.toRGBA()).to.be.equal('rgba(33, 21, 203, 1)'); /* ! */
    expect(color.toHSL()).to.be.equal('hsl(244, 81%, 44%)');
    expect(color.toHSLA()).to.be.equal('hsla(244, 81%, 44%, 1)');
    expect(color.toHEX()).to.be.equal('#2115cb'); /* ! */
    expect(color.toString()).to.be.equal('hsl(244, 81%, 44%)');
  });
}(jQuery));
