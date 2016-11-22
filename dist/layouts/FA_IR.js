//TODO: Add processing of layouts to webpack.config.js

var layouts = [
    {
        code: 'FA-IR'
        , name: 'Farsi'
        , normal: '÷1234567890-=پضصثقفغعهخحجچشسیبلاتنمکگظطزرذدئو./'
        , shift: { 0: '×!@#$%^&*)(_+|ًٌٍريال،؛,][\\}{َُِّۀآـ«»:"ةيژؤإأء<>؟' }
    }
];

(function ($) {
    let _layouts = $.fn.virtkeys._layouts;

    layouts.forEach((l) => {
        if (_layouts[l.code] === undefined) _layouts[l.code] = [];
        
        if (!_layouts[l.code].some((l1) => { return l.name === l1.name; })) {
            _layouts[l.code].push(l);
        }
    });
} (jQuery));