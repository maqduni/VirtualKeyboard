/**
 * Register the layout on the global scope
 */
let registerLayouts = (layouts) => {
    (function ($) {
        let _layouts = $.fn.virtkeys._layouts;

        layouts.forEach((l) => {
            if (_layouts[l.code] === undefined) _layouts[l.code] = [];

            if (!_layouts[l.code].some((l1) => { return l.name === l1.name; })) {
                _layouts[l.code].push(l);
            }
        });
    } (jQuery));
}

export { registerLayouts };