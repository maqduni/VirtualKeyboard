//https://www.microsoft.com/resources/msdn/goglobal/keyboards/kbdtajik.html
// "А-а,Б-б,В-в,Г-г,Ғ-ғ,Д-д,Е-е,Ё-ё,Ж-ж,З-з,И-и,Ӣ-ӣ,Й-й,К-к,Қ-қ,Л-л,М-м,Н-н,О-о,П-п,Р-р,С-с,Т-т,У-у,Ӯ-ӯ,Ф-ф,Х-х,Ҳ-ҳ,Ч-ч,Ҷ-ҷ,Ш-ш,Ъ-ъ,Э-э,Ю-ю,Я-я"

var layouts = [
    {
        code: 'TG'
        , name: 'Tajik Latin'
        , normal: '`ëžčšèġîûǧ(-=\\qwertyuiop[]asdfghjkl;\'zxcvbnm,./'
        , shift: { 0: '~', 7: 'Ì', 10: ')_+|', 24: '{}', 35: ':"', 44: '<>?' }
    },
    {
        code: 'TG'
        , name: 'Tajik Cyrillic'
        , normal: 'ё1234567890ғӯ\\йқукенгшҳзхъфҷвапролджэячсмитӣбю.'
        , shift: { 1: '!"№;%:?*()', 13: '/', 46: ',' }
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