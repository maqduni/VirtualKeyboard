import { VirtualKeyboard } from './virtualkeyboard';

(function ($) {
    $.fn.virtkeys = function () {
        this.VirtualKeyboard = VirtualKeyboard;

        this.open = _open;
        this.close = _close;
        this.toggle = _toggle;
        this.getLayoutCodes = _getLayoutCodes;


        function _open (input) {
            VirtualKeyboard.open(input instanceof $ ? input.get(0) : input, this.get(0));
        }

        function _close () {
            VirtualKeyboard.close();
        }

        function _toggle (input) {
            VirtualKeyboard.toggle(input instanceof $ ? input.get(0) : input, this.get(0));
        }

        function _getLayoutCodes() {
            return VirtualKeyboard.getLayoutCodes();
        }


        return this;
    };

    /* Test comment block */
    // Test comment line
} (jQuery));