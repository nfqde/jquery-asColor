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
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

    module('color', {
        // This will run before each test in this module.
        setup: function() {
          this.colorForm = {
            rgb: 'rgb(0,0,0)',
            rgba: 'rgba(0,0,0,1)',
            hex: '#000',
            hsl: 'hsl(0,100%, 50%)',
          };
        }
      });

    console.log($.colorValue);
      

      test('color-hex ',function() {
        var color = new $.colorValue(this.hex);


        console.log(color.get());

        console.log(color.toRGBA()); //rgba(0,0,0,1)

        console.log(color.toRGB()); //rgb(0,0,0)

        console.log(color.toHSLA()); //hsla(0,0%,0%,1)

        console.log(color.toHEX()); //#000000

        console.log(color.toString()); //#000000



        equal(
            color.toRGBA(), 
            'rgba(0,0,0,1)', 
            "RGBA convert success"
        );

        equal(
            color.toRGB(), 
            'rgb(0,0,0)', 
            "RGB convert success"
        );

        equal(
            color.toHSLA(), 
            'hsla(0,0%,0%,1)', 
            "HSLA convert success"
        );

        equal(
            color.toHEX(), 
            '#000000', 
            "RGBA convert success"
        );

        equal(
            color.toString(), 
            '#000000', 
            "RGBA convert success"
        );

        
      });

      test('color-rgb ',function() {
        var color = new $.colorValue(this.rgb);


       equal(
            color.toRGBA(), 
            'rgba(0,0,0,1)', 
            "RGBA convert success"
        );

        equal(
            color.toRGB(), 
            'rgb(0,0,0)', 
            "RGB convert success"
        );

        equal(
            color.toHSLA(), 
            'hsla(0,0%,0%,1)', 
            "HSLA convert success"
        );

        equal(
            color.toHEX(), 
            '#000000', 
            "RGBA convert success"
        );

        equal(
            color.toString(), 
            '#000000', 
            "RGBA convert success"
        );

        
      });

}(jQuery));
