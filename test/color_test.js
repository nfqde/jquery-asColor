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
            this.colorForm = {
                rgb: 'rgb(0, 0, 0)',
                rgba: 'rgba(0, 0, 0, 1)',
                hex: '#000',
                hsl: 'hsl(0, 100%, 50%)',
                hsla: 'hsl(0, 100%, 50%, 1)',
                transparent: 'transparent',
            };
        }
    });

    test('upper strings', function(){
        var color = new $.asColor('#000000', 'HEX');

        equal(color.val('RGB(60,60,60)').toString(),'#3c3c3c','RGB(60,60,60)');

        equal(color.val('RGBA(60,60,60,1)').toString(),'#3c3c3c','RGBA(60,60,60)');

        equal(color.val('HSL(0, 0%, 24%)').toString(),'#3d3d3d',"HSL(0, 0%, 24%)");  /* ! */

        equal(color.val('HSLA(0, 0%, 24%, 1)').toString(),'#3d3d3d',"HSLA(0, 0%, 24%, 1)");  /* ! */

        equal(color.val('TRANSPARENT').toString(),'transparent','TRANSPARENT');
    });

    test('undefined value', function() {
        var color = new $.asColor();

        equal(color.val(), '#000000','val()');
        deepEqual(color.get(), {
            r: 0,
            g: 0,
            b: 0,
            h: 0,
            s: 0,
            v: 0,
            a: 1
        },'get()');
        equal(color.format(), 'HEX','format()');
        equal(color.toString(), '#000000','toString()');
    });

    test('option nameDegradation', function() {
        var color = new $.asColor('#126782', 'name');

        equal(color.format(), 'NAME', 'test format');
        equal(color.toString(), '#126782', 'test toString');

        color = new $.asColor('#126782', 'name', {
            nameDegradation: 'rgb'
        });

        equal(color.format(), 'NAME', 'check format again');
        equal(color.toString(), 'rgb(18, 103, 130)', 'test nameDegradation');
    });

    test('option hexUseName', function(){
        var color = new $.asColor('#8fbc8f', {
            hexUseName: false
        });
        equal(color.format(), 'HEX', 'check format first');
        equal(color.toString(), '#8fbc8f', 'check format first');

        color = new $.asColor('#8fbc8f', {
            hexUseName: true
        });
        equal(color.format(), 'HEX', 'check format first');
        equal(color.toString(), 'darkseagreen', 'check format first');
    });

    test('option shortenHex', function(){
        var color = new $.asColor('#fff');
        equal(color.toString(), '#ffffff', 'test toString');

        color = new $.asColor('#fff', {
            shortenHex: true
        });

        equal(color.format(), 'HEX', 'test format');
        equal(color.toString(), '#fff', 'test shortenHex');
    });

    test('option invalid value', function(){
        var color = new $.asColor('hello world', {
            invalidValue: ''
        });
        equal(color.toString(), '', 'test invalidValue');

        color = new $.asColor('hello world', 'HEX', {
            invalidValue: {
                r: 0,
                g: 0,
                b: 0,
                a: 1
            }
        });
        equal(color.toString(), '#000000', 'test object invalidValue');
    });

    test('option reduceAlpha', function(){
        var color = new $.asColor('rgba(255,255,255,1)', {
            reduceAlpha: false
        });
        equal(color.toString(), 'rgba(255, 255, 255, 1)', 'test reduceAlpha false');

        color = new $.asColor('rgba(255,255,255,1)', {
            reduceAlpha: true
        });
        equal(color.toString(), 'rgb(255, 255, 255)', 'test reduceAlpha true');

        color = new $.asColor('hsla(0,0%,50%,1)', {
            reduceAlpha: false
        });
        equal(color.toString(), 'hsla(0, 0%, 50%, 1)', 'test reduceAlpha false');

        color = new $.asColor('hsla(0,0%,50%,1)', {
            reduceAlpha: true
        });
        equal(color.toString(), 'hsl(0, 0%, 50%)', 'test reduceAlpha true');
    });

    test('option zeroAlphaAsTransparent', function(){
        var color = new $.asColor('rgba(255,255,255,0)', {
            zeroAlphaAsTransparent: false
        });

        equal(color.toString(), 'rgba(255, 255, 255, 0)', 'test zeroAlphaAsTransparent false');

        color = new $.asColor('rgba(255,255,255,0)', {
            zeroAlphaAsTransparent: true
        });

        equal(color.toString(), 'transparent', 'test zeroAlphaAsTransparent true');
    });

    test('method val', function() {
        var color = new $.asColor('#000000', 'HEX');
        
        equal(color.val(),'#000000','val()');

        equal(color.val('rgb(66, 50, 50)').toString(),'#423232','val("rgb(66, 50, 50)")');

        equal(color.val('rgba(66, 50, 50, 1)').toString(),'#423232','val("rgb(66, 50, 50, 1)")');

        equal(color.val('hsl(0, 14%, 23%)').toString(),'#433232','val("hsl(0, 14%, 23%)")'); /* ! */

        equal(color.val('hsla(0, 14%, 23%, 1)').toString(),'#433232','val("hsla(0, 14%, 23%, 1)")'); /* ! */

        equal(color.val('transparent').toString(),'transparent','val("transparent")');
    });

    test('method isValid', function() {
        var color = new $.asColor();
        color.val('#fff');

        equal(color.isValid(), true, 'validate #fff is true');

        color.val('fff');

        equal(color.isValid(), false, 'validate fff is false');

        color.val('its not valid');

        equal(color.isValid(), false, 'validate "its not valid" is false');

    });

    test('method name', function() {
        var color = new $.asColor('red');

        equal(color.isValid(), true, 'test red is valid');
        equal(color.toHEX(), '#ff0000', 'test red hex');
        equal(color.format(), 'NAME', 'test red format');
        equal(color.toString(), 'red', 'test red format');
    });

    test('method format', function(){
        var color = new $.asColor();
        equal(color.format(),"HEX","default format hex");

        color = new $.asColor('#000000');
        equal(color.format(),"HEX","format from #000000 init");

        color = new $.asColor('rgb(0, 0, 0)');
        equal(color.format(),"RGB","format from rgb(0, 0, 0) init");

        color = new $.asColor('rgba(0, 0, 0, 1)');
        equal(color.format(),"RGBA","format from rgba(0, 0, 0, 1) init");

        color = new $.asColor('hsl(59, 100%, 50%)');
        equal(color.format(),"HSL","format from hsl(59, 100%, 50%) init");

        color = new $.asColor('hsla(59, 100%, 50%, 1)');
        equal(color.format(),"HSLA","format from hsla(59, 100%, 50%, 1) init");

        color = new $.asColor('#000000', 'rgba');
        equal(color.format(),"RGBA","format from init format value");

        color.format('rgb');
        equal(color.format(),"RGB","format('rgb')");

        color.format('rgba');
        equal(color.format(),"RGBA","format('rgba')");

        color.format('hsl');
        equal(color.format(),"HSL","format('hsl')");

        color.format('hsla');
        equal(color.format(),"HSLA","format('hsla')");

        color.format('hex');
        equal(color.format(),"HEX","format('hex')");
    });

    test('method set', function(){
        var color = new $.asColor();
        color.set({
            r: 255,
            g: 255,
            b: 255
        });
        equal(color.toHEX(),"#ffffff","set rgb to hex");

        color.set({
            r: 255,
            g: 255,
            b: 255,
            a: 0.5
        });
        equal(color.toRGB(),"rgb(255, 255, 255)","set rgba to rgb");
        equal(color.toRGBA(),"rgba(255, 255, 255, 0.5)","set rgba to rgba");
        equal(color.toHSLA(),"hsla(0, 0%, 100%, 0.5)","set rgba to hsla");

        color.set({
            h: 0,
            s: 0,
            v: 1,
            a: 0.5
        });
        equal(color.toRGBA(),"rgba(255, 255, 255, 0.5)","set hsva to rgba");
        equal(color.toHSLA(),"hsla(0, 0%, 100%, 0.5)","set hsva to hsla");

        color.set({
            h: 1,
            s: 0,
            v: 1,
            a: 0.5
        });
        equal(color.toRGBA(),"rgba(255, 255, 255, 0.5)","set hsva to rgba");
        equal(color.toHSLA(),"hsla(0, 0%, 100%, 0.5)","set hsva to hsla");
    });

    test('method get', function(){
        var color = new $.asColor('rgba(0, 0, 0, 1)');
        deepEqual(color.get(), {
            r: 0,
            g: 0,
            b: 0,
            h: 0,
            s: 0,
            v: 0,
            a: 1
        },'get rgba(0, 0, 0, 1)');

        color.val('hsla(0, 0%, 100%, 0.5)');
        deepEqual(color.get(), {
            r: 255,
            g: 255,
            b: 255,
            h: 0,
            s: 0,
            v: 1,
            a: 0.5
        },'get hsla(0, 0%, 100%, 0.5)');

        color.val('#fff600');
        color.alpha(1);
        deepEqual(color.get(), {
            r: 255,
            g: 246,
            b: 0,
            h: 58,
            s: 1,
            v: 1,
            a: 1
        },'get #fff600');
    });

    test('method alpha', function(){
        var color = new $.asColor('#8c9cdf', 'rgba');

        equal(color.alpha(), '1', "alpha()");
        equal(color.toRGBA(), 'rgba(140, 156, 223, 1)', "RGBA convert");
        equal(color.toHSLA(), 'hsla(228, 56%, 71%, 1)', "HSLA convert");

        color.alpha(0.5);
        equal(color.alpha(), '0.5', "alpha(0.5)");
        equal(color.toRGBA(), 'rgba(140, 156, 223, 0.5)', "RGBA convert");
        equal(color.toHSLA(), 'hsla(228, 56%, 71%, 0.5)', "HSLA convert");

        color.alpha(5);
        equal(color.alpha(), '1', "alpha(5)");

        color.alpha(-5);
        equal(color.alpha(), '0', "alpha(-5)");

        color.alpha('1');
        equal(color.alpha(), '1', "alpha('1')");

        color.alpha('abc');
        equal(color.alpha(), '1', "alpha('abc')");
    });

    test('method to', function(){
        var color = new $.asColor('rgba(255, 128, 36, 0.5)');

        equal(color.toRGBA(), 'rgba(255, 128, 36, 0.5)', "RGBA convert");
        equal(color.to('rgba'), 'rgba(255, 128, 36, 0.5)', "RGBA convert");

        equal(color.toRGB(), 'rgb(255, 128, 36)', "RGB convert");
        equal(color.to('rgb'), 'rgb(255, 128, 36)', "RGB convert");

        equal(color.toHSLA(), 'hsla(25, 100%, 57%, 0.5)', "HSLA convert");
        equal(color.to('hsla'), 'hsla(25, 100%, 57%, 0.5)', "HSLA convert");

        equal(color.toHEX(), '#ff8024', "HEX convert");
        equal(color.to('hex'), '#ff8024', "HEX convert");

        equal(color.to('name'), '#ff8024', "Name convert");

        color.val('#fff');
        equal(color.to('name'), 'white', "Name convert");
    });

    test('color rgb',function() {
        var color = new $.asColor(this.colorForm.rgb);
        equal(color.toRGBA(), 'rgba(0, 0, 0, 1)', "RGBA convert");
        equal(color.toRGB(), 'rgb(0, 0, 0)', "RGB convert");
        equal(color.toHSLA(), 'hsla(0, 0%, 0%, 1)', "HSLA convert");
        equal(color.toHEX(), '#000000', "HEX convert");
        equal(color.toString(), 'rgb(0, 0, 0)', "output string");
    });

    test('color transparent', function() {
        var color = new $.asColor('transparent');
        equal(color.format(),'HEX','transparent default format HEX');
        equal(color.toRGB(),'rgb(0, 0, 0)','change to RGB');
        equal(color.toRGBA(),'rgba(0, 0, 0, 0)','change to RGBA');
        equal(color.toHSL(),'hsl(0, 0%, 0%)','change to HSL');
        equal(color.toHSLA(),'hsla(0, 0%, 0%, 0)','change to HSLA');
        equal(color.toHEX(),'#000000','change to HEX');
        equal(color.toString(),'transparent','change to string');
    });

    test('color hex ',function() {
        var color = new $.asColor('#000000');

        equal(color.toRGBA(),'rgba(0, 0, 0, 1)', "#000 RGBA convert");
        equal(color.toRGB(),'rgb(0, 0, 0)', "#000 RGB convert");
        equal(color.toHSLA(), 'hsla(0, 0%, 0%, 1)', "#000 HSLA convert");
        equal(color.toHEX(), '#000000', "#000 HEX convert");
        equal(color.toString(), '#000000',"#000 toString convert");

        color.val('#fff');
        equal(color.toHEX(), '#ffffff', "#fff convert");

        color.val('#323');
        equal(color.toHEX(), '#332233', "#323 convert");
    });

    test('color hsl ',function() {
        var color = new $.asColor();
        
        color.val('#bada55');
        equal(color.toHSL(),'hsl(74, 64%, 59%)', "#bada55 HSL convert");

        color.val('#bad954');
        equal(color.toHSL(),'hsl(74, 64%, 59%)', "#bad954 HSL convert");
        
        color.val('hsl(74, 64%, 59%)');
        equal(color.toHEX(),'#bad954', "hsl(74, 64%, 59%) HEX convert");

        color.val('#3d3d3d');
        equal(color.toHSL(),'hsl(0, 0%, 24%)', "#3d3d3d HSL convert");

        color.val('#3c3c3c');
        equal(color.toHSL(),'hsl(0, 0%, 24%)', "#3c3c3c HSL convert");

        color.val('#3d3d3d');
        equal(color.toHSL(),'hsl(0, 0%, 24%)', "#3d3d3d HSL convert");

        color.val('hsl(0, 0%, 24%)');
        equal(color.toHEX(),'#3d3d3d', "hsl(0, 0%, 24%) HEX convert");


        color.val('rgb(75, 96, 6)');
        equal(color.toHSL(),'hsl(74, 88%, 20%)', "rgb(75, 96, 6) HSL convert");

        color.val('hsl(74, 88%, 20%)');
        equal(color.toRGB(),'rgb(75, 96, 6)', "hsl(74, 88%, 20%) RGB convert");
        

        color.val('rgba(117, 149, 9, 0.65)');
        equal(color.toHSLA(),'hsla(74, 89%, 31%, 0.65)', "rgba(117, 149, 9, 0.65) HSL convert");

        color.val('hsla(74, 89%, 31%, 0.65)');
        equal(color.toRGBA(),'rgba(117, 149, 9, 0.65)', "hsla(74, 89%, 31%, 0.65) RGBA convert");

        color.val('rgb(35, 22, 204)');
        equal(color.toHSL(),'hsl(244, 81%, 44%)', "rgb(35, 22, 204) HSL convert");

        color.val('rgb(33, 21, 203)');
        equal(color.toHSL(),'hsl(244, 81%, 44%)', "rgb(33, 21, 203) HSL convert");

        color.val('hsl(244, 81%, 44%)');
        equal(color.toRGB(),'rgb(33, 21, 203)', "hsl(244, 81%, 44%) RGB convert");

    });


    test('color #4fb9ee', function() {
        var color = new $.asColor('#4fb9ee');
        equal(color.toRGB(),'rgb(79, 185, 238)','change to RGB');
        equal(color.toRGBA(),'rgba(79, 185, 238, 1)','change to RGBA');
        equal(color.toHSL(),'hsl(200, 82%, 62%)','change to HSL');
        equal(color.toHSLA(),'hsla(200, 82%, 62%, 1)','change to HSLA');
        equal(color.toHEX(),'#4fb9ee','change to HEX');
        equal(color.toString(),'#4fb9ee','change to string');
    });

    test('color #000000', function() {
        var color = new $.asColor('#000000');
        equal(color.toRGB(),'rgb(0, 0, 0)','change to RGB');
        equal(color.toRGBA(),'rgba(0, 0, 0, 1)','change to RGBA');
        equal(color.toHSL(),'hsl(0, 0%, 0%)','change to HSL');
        equal(color.toHSLA(),'hsla(0, 0%, 0%, 1)','change to HSLA');
        equal(color.toHEX(),'#000000','change to HEX');
        equal(color.toString(),'#000000','change to string');
    });

    test('color #ffffff', function() {
        var color = new $.asColor('#ffffff');
        equal(color.toRGB(),'rgb(255, 255, 255)','change to RGB');
        equal(color.toRGBA(),'rgba(255, 255, 255, 1)','change to RGBA');
        equal(color.toHSL(),'hsl(0, 0%, 100%)','change to HSL');
        equal(color.toHSLA(),'hsla(0, 0%, 100%, 1)','change to HSLA');
        equal(color.toHEX(),'#ffffff','change to HEX');
        equal(color.toString(),'#ffffff','change to string');
    });

    test('color rgb(255, 0, 6)', function(){
        var color = new $.asColor('rgb(255, 0, 6)');
        equal(color.toRGB(),'rgb(255, 0, 6)','change to RGB');
        equal(color.toRGBA(),'rgba(255, 0, 6, 1)','change to RGBA');
        equal(color.toHSL(),'hsl(359, 100%, 50%)','change to HSL');
        equal(color.toHSLA(),'hsla(359, 100%, 50%, 1)','change to HSLA');
        equal(color.toHEX(),'#ff0006','change to HEX');
        equal(color.toString(),'rgb(255, 0, 6)','change to string');
    });

    test('color rgb(238, 79, 185)', function() {
        var color = new $.asColor('rgb(238, 79, 185)');
        equal(color.toRGB(),'rgb(238, 79, 185)','change to RGB');
        equal(color.toRGBA(),'rgba(238, 79, 185, 1)','change to RGBA');
        equal(color.toHSL(),'hsl(320, 82%, 62%)','change to HSL');
        equal(color.toHSLA(),'hsla(320, 82%, 62%, 1)','change to HSLA');
        equal(color.toHEX(),'#ee4fb9','change to HEX');
        equal(color.toString(),'rgb(238, 79, 185)','change to string');
    });

    test('color hsl(244, 81%, 44%)', function() {
        var color = new $.asColor('hsl(244, 81%, 44%)');
        equal(color.toRGB(),'rgb(33, 21, 203)','change to RGB'); /* ! */
        equal(color.toRGBA(),'rgba(33, 21, 203, 1)','change to RGBA'); /* ! */
        equal(color.toHSL(),'hsl(244, 81%, 44%)','change to HSL');
        equal(color.toHSLA(),'hsla(244, 81%, 44%, 1)','change to HSLA');
        equal(color.toHEX(),'#2115cb','change to HEX'); /* ! */
        equal(color.toString(),'hsl(244, 81%, 44%)','change to string');
    });
}(jQuery));
