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

        var colorRGBA = new this.color('rgba(50,50,50,0.5)');
        equal(colorRGBA.toRGB(),'rgb(50,50,50)','RGBA change to RGB ok');
        equal(colorRGBA.toHSL(),'hsl(0,0%,20%)','RGBA change to HSL ok');
        equal(colorRGBA.toHEX(),'#323232','RGBA change to HEX ok');
        equal(colorRGBA.toHSLA(),'hsla(0,0%,20%,0.5)','RGBA change to HSLA ok');

    });

    // test('method', function() {
    //     var color = new this.color('#999938');
    //     equal(color.toHEX(),'#999938','get method ok');

    //     color.set('rgb(42,42,26)');
    //     equal(color.toHEX(),'','color set from rgb success');

    //     color.set('#78783a');
    //     equal(color.toHEX(),'#78783a','color set from hex success');

    //     color.set('hsl(0,0%,20%)');
    //     equal(color.toHEX(),'','color set from hsl success');
    // });

  }(jQuery));
