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
            this.color = $.colorValue;
            this.colorForm = {
                rgb: 'rgb(0,0,0)',
                rgba: 'rgba(0,0,0,1)',
                hex: '#000',
                hsl: 'hsl(0,100%, 50%)',
            };
        }
    });

    test('color-rgb ',function() {
        var color = new this.color(this.colorForm.rgb);
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
            'rgb(0,0,0)', 
            "output string success"
        );
    });

    test('color hex ',function() {
        
        var color = new this.color(this.colorForm.hex);

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

    test('other color', function() {
        var colorHex = new this.color('#78783a');
        equal(colorHex.toRGB(),'rgb(120,120,58)','change to RGB ok');
        equal(colorHex.toRGBA(),'rgba(120,120,58,1)','change to RGBA ok');
        equal(colorHex.toString(),'#78783a','change to string ok');
    });

  }(jQuery));
