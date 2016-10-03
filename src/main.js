import $ from 'jquery';
import AsColor from './asColor';
import info from './info';

const OtherAsColor = $.asColor;

$.asColor = AsColor;

$.extend($.asColor, {
  noConflict: function() {
    $.fn.asColor = OtherAsColor;
    return AsColor;
  }
}, info);
