/*globals jQuery, window*/
/**
 * @author Dan Bettles <dan@powder-blue.com>
 * @copyright Powder Blue Ltd 2014
 */

(function (jQuery, window) {
    jQuery.extend({

        /**
         * Returns the width of the window.
         * 
         * @return int
         */
        windowWidth: function () {
            return jQuery(window).width();
        },

        /**
         * Returns the height of the window.
         * 
         * @return int
         */
        windowHeight: function () {
            var $win = jQuery(window),
                ipad = /\biPad\b/.test(window.navigator.userAgent);

            if (ipad && $win.width() > $win.height()) {
                return window.innerHeight;
            }

            return $win.height();
        }
    });
}(jQuery, window));