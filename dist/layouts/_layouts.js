var layouts = [
    {
        code: 'SQ-AL'
        , name: 'Albanian'
        , normal: '\\1234567890-=]qwertzuiopç@asdfghjklë[yxcvbnm,./'
        , shift: { 0: '|!"#$%^&*()_+}', 25: '\'', 36: '{', 44: ';:?' }
        , alt: { 1: '~ˇ^˘°˛`˙´˝¨¸¤\\|', 24: '÷×', 27: 'đĐ[]', 33: 'łŁ$ß', 40: '@{}§<>' }
        , dk: { 'ˇ': 'nňcčdďsšlľeěrřtťzžNŇCČDĎSŠLĽEĚRŘTŤZŽ ˇ', '^': 'aâiîoôAÂIÎOÔ ^', '˘': 'aăAĂ ˘', '°': 'uůUŮ °', '˛': 'aąeęAĄEĘ ˛', '˙': 'zżZŻ ˙', '´': 'nńcćyýaásślĺeérŕuúiízźoóNŃCĆYÝAÁSŚLĹEÉRŔUÚIÍZŹOÓ ´', '˝': 'uűoőUŰOŐ ˝', '¨': 'aäeëuüoöAÄEËUÜOÖ ¨', '¸': 'cçsştţCÇSŞTŢ ¸' }
    },
    {
        code: 'AR-SA'
        , name: 'Arabic (101)'
        , normal: 'ذ1234567890-=\\ضصثقفغعهخحجدشسيبلاتنمكطئءؤرلاىةوزظ'
        , shift: { 0: 'ّ!@#$%^&*)(_+|ًٌَُلإإ‘÷×؛<>ٍِ][لأأـ،/:"~ْ}{لآآ’,.؟' }
    },
    {
        code: 'AR-SA'
        , name: 'Arabic (102) AZERTY'
        , normal: '>&é"\'(-è_çà)=ذضصثقفغعهخحجدشسيبلاتنمكطئءؤرلاىةوزظ'
        , shift: { 0: '<1234567890°+ًٌَُّلإإ‘÷×؛}{\\', 28: '][لأأـ،/:"~ٍِْلآآ’,.؟' }
        , alt: { 4: '¤', 14: 'َّًّُّٌّ', 39: 'ِّٍّ' }
    },
    {
        code: 'AR-IQ'
        , name: 'Arabic'
        , normal: 'ذ1234567890-=\\ضصثقفغعهخحجدشسيبلاتنمكطئءؤرﻻىةورظ'
        , shift: { 0: 'ّ!@#$%^&*)(_+|ًٌَُﻹإ‘÷×؛<>ٍِ[]ﻷأـ،/:"~ْ{}ﻵآ’,.؟' }
    },
    {
        code: 'HY-AM'
        , name: 'Armenian Eastern'
        , normal: '՝:ձյ՛,-.«»օռժ\'խւէրտեըիոպչջասդֆքհճկլթփզցգվբնմշղծ'
        , shift: { 0: '՜1', 4: '349և()', 13: '՞' }
    },
    {
        code: 'HY-AM'
        , name: 'Armenian Western'
        , normal: '՝:ձյ՛,-.«»օռժ\'խվէրդեըիոբչջաստֆկհճքլթփզցգւպնմշղծ'
        , shift: { 0: '՜1', 4: '349և()', 13: '՞' }
    },
    {
        code: 'AZ'
        , name: 'Azeri Latin'
        , normal: '`1234567890-=\\qüertyuiopöğasdfghjklıəzxcvbnmçş.'
        , shift: { 0: '~!"Ⅶ;%:?*()_+/', 21: 'İ', 46: ',' }
    },
    {
        code: 'AZ'
        , name: 'Azeri Cyrillic'
        , normal: '`1234567890-=\\јүукенгшһзхҹфывапролджҝәчсмитғбө.'
        , shift: { 0: '~!"№;%:?*()_+/', 46: ',' }
    },
    {
        code: 'BE-BY'
        , name: 'Belarusian'
        , normal: 'ё1234567890-=\\йцукенгшўзх\'фывапролджэячсмітьбю.'
        , shift: { 1: '!"№;%:?*()_+/', 46: ',' }
    },
    {
        code: 'FR-BE'
        , name: 'Belgian (Comma)'
        , normal: '²&é"\'(§è!çà)-µazertyuiop^$qsdfghjklmùwxcvbn,;:='
        , shift: { 0: '³1234567890°_£', 24: '¨*', 36: '%', 43: '?./+' }
        , alt: { 1: '|@#{[^', 9: '{}', 13: '`', 16: '€', 24: '[]', 36: '´', 46: '~' }
        , dk: { '^': 'eêuûiîoôaâEÊUÛIÎOÔAÂ ^', '¨': 'eëuüiïyÿoöaäEËUÜIÏOÖAÄ ¨', '´': 'eéuúiíyýoóaáEÉUÚIÍYÝOÓAÁ ´', '`': 'eèuùiìoòaàEÈUÙIÌOÒAÀ `', '~': 'nñoõaãNÑOÕAÃ ~' }
    },
    {
        code: 'FR-BE'
        , name: 'Belgian French'
        , normal: '²&é"\'(§è!çà)-µazertyuiop^$qsdfghjklmùwxcvbn,;:='
        , shift: { 0: '³1234567890°_£', 24: '¨*', 36: '%', 43: '?./+' }
        , alt: { 1: '|@#{[^', 9: '{}', 13: '`', 16: '€', 24: '[]', 36: '´', 46: '~' }
        , dk: { '^': 'eêuûiîoôaâEÊUÛIÎOÔAÂ ^', '¨': 'eëuüiïyÿoöaäEËUÜIÏOÖAÄ ¨', '´': 'eéuúiíyýoóaáEÉUÚIÍYÝOÓAÁ ´', '`': 'eèuùiìoòaàEÈUÙIÌOÒAÀ `', '~': 'nñoõaãNÑOÕAÃ ~' }
    },
    {
        code: 'NL-BE'
        , name: 'Belgian (Period)'
        , normal: '²&é"\'(§è!çà)-µazertyuiop^$qsdfghjklmùwxcvbn,;:='
        , shift: { 0: '³1234567890°_£', 24: '¨*', 36: '%', 43: '?./+' }
        , alt: { 1: '|@#{[^', 9: '{}', 13: '`', 16: '€', 24: '[]', 36: '´', 46: '~' }
        , dk: { '^': 'eêuûiîoôaâEÊUÛIÎOÔAÂ ^', '¨': 'eëuüiïyÿoöaäEËUÜIÏOÖAÄ ¨', '´': 'eéuúiíyýoóaáEÉUÚIÍYÝOÓAÁ ´', '`': 'eèuùiìoòaàEÈUÙIÌOÒAÀ `', '~': 'nñoõaãNÑOÕAÃ ~' }
    },
    {
        code: 'BN-IN'
        , name: 'BN Inscript Improved'
        , normal: '‍১২৩৪৫৬৭৮৯০-ৃ\\ৌৈাীূবহগদজড়োে্িুপরকতচটৎংমনবলস,.য়'
        , shift: { 0: '‌', 9: '()ঃঋ|ঔঐআঈঊভঙঘধঝঢঞওএঅইউফঢ়খথছঠ?ঁণ', 43: 'শষ।য' }
    },
    {
        code: 'BN-IN'
        , name: 'Bengali (Inscript)'
        , normal: '১২৩৪৫৬৭৮৯০-ৃৌৈাীূবহগদজড়োে্িুপরকতচটংমনবলস,.য়'
        , shift: { 1: '!@', 4: 'র্জ্ঞত্রক্ষশ্র()ঃঋ', 14: 'ঔঐআঈঊভঙঘধঝঢঞওএঅইউফ', 33: 'খথছঠ', 38: 'ঁণ', 43: 'শষ', 46: 'য' }
    },
    {
        code: 'BN-IN'
        , name: 'Probhat Phonetic'
        , normal: '‍১২৩৪৫৬৭৮৯০-=‌দূীরটএুিওপেোাসডতগহজকল;\'য়শচআবনম,।্'
        , shift: { 0: '~!@#৳%^ঞৎ()_+॥ধঊঈড়ঠঐউইঔফৈৌঅষঢথঘঃঝখং:"যঢ়ছঋভণঙৃঁ?' }
    },
    {
        code: 'BN-BD'
        , name: 'Unijoy'
        , normal: '‌১২৩৪৫৬৭৮৯০-=ৎঙযডপটচজহগড়ৃুিা্বকতদ;\'্োেরনসম,./'
        , shift: { 0: '‍!@#৳%÷ঁ×()_+ঃংয়ঢফঠছঝঞঘঢ়', 26: '্রূীঅ।ভখথধ:"', 38: 'ৌৈলণষশ<>?' }
    },
    {
        code: 'BN-IN'
        , name: 'Bengali'
        , normal: '1234567890-ৃৌৈাীূবহগদজড়োে্িুপরকতচটংমনবলস,.য'
        , shift: { 3: '্রর্জ্রত্ষক্রশ্র()ঃঋ', 14: 'ঔঐআঈঊভঙঘধঝঢঞওএঅইউফ', 33: 'খথছঠ', 38: 'ঁণ', 43: 'শষ{য়' }
        , alt: { 1: '১২৩৪৫৬৭৮৯০', 12: 'ৢ', 14: 'ৗ', 17: 'ৣ', 24: 'ড়', 26: '৴৶৸ৢ', 32: 'ৰ', 38: '৺' }
        , shift_alt: { 12: 'ৠ', 17: 'ৡ', 24: 'ঢ়', 26: '৵৷৹ঌ', 32: 'ৱ' }
    },
    {
        code: 'BLA'
        , name: 'Blackfoot Phonetic'
        , normal: '`1234567890-=\\qwertyuiop[]asdfghjkl;\'zxcvbnm,᙮/'
        , shift: { 0: '~!@#$%^&*()_+|', 24: '{}', 35: ':"', 44: '<>?' }
        , 'cbk':/**
 * $Id$
 *
 * Blackfoot char processor
 *
 * This software is protected by patent No.2009611147 issued on 20.02.2009 by Russian Federal Service for Intellectual Property Patents and Trademarks.
 *
 * @author Konstantin Wiolowan
 * @copyright 2008-2009 Konstantin Wiolowan <wiolowan@mail.ru>
 * @version $Rev$
 * @lastchange $Author$ $Date$
 */
        new function () {
            var reNotBLA = /[^aehikmnopstwy]/
                , remap = {
                    i: 'ᖱ', 'ᐤi': 'ᑯ', 'ᐨi': 'ᒧ', 'ᘁi': 'ᖽ', 'ᐢi': 'ᒍ', 'ᐡi': 'ᖹ', 'ᔈi': 'ᓱ', yi: 'ᔪ', wi: 'ᖵ'
                    , 'ᖳi': 'ᖳᐟ', 'ᖰi': 'ᖰᐟ', 'ᖲi': 'ᖲᐟ', 'ᑫi': 'ᑫᐟ', 'ᑭi': 'ᑭᐟ', 'ᑲi': 'ᑲᐟ', 'ᒣi': 'ᒣᐟ', 'ᒥi': 'ᒥᐟ', 'ᒪi': 'ᒪᐟ', 'ᖿi': 'ᖿᐟ', 'ᖼi': 'ᖼᐟ', 'ᖾi': 'ᖾᐟ', 'ᒉi': 'ᒉᐟ', 'ᒋi': 'ᒋᐟ', 'ᒐi': 'ᒐᐟ', 'ᖻi': 'ᖻᐟ', 'ᖸi': 'ᖸᐟ', 'ᖺi': 'ᖺᐟ', 'ᓭi': 'ᓭᐟ', 'ᓯi': 'ᓯᐟ', 'ᓴi': 'ᓴᐟ', 'ᔦi': 'ᔦᐟ', 'ᔨi': 'ᔨᐟ', 'ᔭi': 'ᔭᐟ', 'ᖷi': 'ᖷᐟ', 'ᖴi': 'ᖴᐟ', 'ᖶi': 'ᖶᐟ'
                    , 'ᖳo': 'ᖳᐠ', 'ᖰo': 'ᖰᐠ', 'ᑫo': 'ᑫᐠ', 'ᑭo': 'ᑭᐠ', 'ᒣo': 'ᒣᐠ', 'ᒥo': 'ᒥᐠ', 'ᖿo': 'ᖿᐠ', 'ᖼo': 'ᖼᐠ', 'ᒉo': 'ᒉᐠ', 'ᒋo': 'ᒋᐠ', 'ᖻo': 'ᖻᐠ', 'ᖸo': 'ᖸᐠ', 'ᓭo': 'ᓭᐠ', 'ᓯo': 'ᓯᐠ', 'ᔦo': 'ᔦᐠ', 'ᔨo': 'ᔨᐠ', 'ᖷo': 'ᖷᐠ', 'ᖴo': 'ᖴᐠ'
                }
                , submap = {
                    //s:'Ꮝ'
                    //nah:'Ꮐ'
                    a: 'ᖳ', e: 'ᖰ', o: 'ᖲ'
                    , 'ᐤa': 'ᑫ', 'ᐤe': 'ᑭ', 'ᐤo': 'ᑲ'
                    , 'ᐨa': 'ᒣ', 'ᐨe': 'ᒥ', 'ᐨo': 'ᒪ'
                    , 'ᘁa': 'ᖿ', 'ᘁe': 'ᖼ', 'ᘁo': 'ᖾ'
                    , 'ᐢa': 'ᒉ', 'ᐢe': 'ᒋ', 'ᐢo': 'ᒐ'
                    , 'ᐡa': 'ᖻ', 'ᐡe': 'ᖸ', 'ᐡo': 'ᖺ'
                    , 'ᔈa': 'ᓭ', 'ᔈe': 'ᓯ', 'ᔈo': 'ᓴ'
                    , ya: 'ᔦ', ye: 'ᔨ', yo: 'ᔭ'
                    , wa: 'ᖷ', we: 'ᖴ', wo: 'ᖶ'
                    , 'ᐤy': 'ᐤy', 'ᐨy': 'ᐨy', 'ᘁy': 'ᘁy', 'ᐢy': 'ᐢy', 'ᐡy': 'ᐡy', 'ᔈy': 'ᔈy'
                    , 'ᐤs': 'ᐤs', 'ᐨs': 'ᐨs', 'ᘁs': 'ᘁs', 'ᐢs': 'ᐢs', 'ᐡs': 'ᐡs', 'ᔈs': 'ᔈs'
                    , 'ᐤw': 'ᐤw', 'ᐨw': 'ᐨw', 'ᘁw': 'ᘁw', 'ᐢw': 'ᐢw', 'ᐡw': 'ᐡw', 'ᔈw': 'ᔈw'
                    , p: 'ᐤ', t: 'ᐨ', k: 'ᘁ', m: 'ᐢ', n: 'ᐡ', s: 'ᔈ', h: 'ᑊ'
                    , 'ᑊk': 'ᐦ'
                    //tl:1, dl:1, ts:1, ds:1, qu:1, kw:1, gw:1, hn:1
                }
                , premap = {
                    'ᖲo': 'ᖲᖲ', 'ᑲo': 'ᑲᖲ', 'ᒪo': 'ᒪᖲ', 'ᖾo': 'ᖾᖲ', 'ᒐo': 'ᒐᖲ', 'ᖺo': 'ᖺᖲ', 'ᓴo': 'ᓴᖲ', 'ᔭo': 'ᔭᖲ', 'ᖶo': 'ᖶᖲ'
                }

            this.charProcessor = function (chr, buf) {
                if (chr == '\u0008') { // backspace
                    if (buf.length) {
                        return [buf.slice(0, -1), buf.length - 1]
                    }
                } else if (reNotBLA.test(chr)) {
                    return remap[buf + chr] || [buf + chr, 0]
                } else {
                    var str, res, cres, h = '';

                    if (buf.charAt(0) == 'ᐦ') {
                        h = 'ᑊ';
                        buf = 'ᘁ'
                    }

                    str = buf + chr
                    if (res = remap[str]) {
                        return [h + res, 0]
                    } else if (res = submap[str]) {
                        return [h + res, res.length]
                    } else if (res = premap[str]) {
                        return [h + res, 1];
                    } else if (res = submap[buf]) {
                        if (/[ᐤᐨᘁᐢᐡᔈ][syw][aeio]/.test(str)) {
                            res = str.charAt(0) + str.charAt(2)
                            return ([h + (remap[res] || submap[res]) + { s: 'ᐧ', y: 'ᑉ', w: '=' }[str.charAt(1)] //chr=='i'?0:1
                                , 0])
                        }
                        if (cres = remap[chr])
                            return [res + cres, 1];
                        else
                            return [h + res + chr, 1];
                    } else {
                        return [h + buf + (remap[chr] || submap[chr] || chr), 1]
                    }
                }
            }
        }
    },
    {
        code: 'BS-BA'
        , name: 'Bosnian'
        , normal: '¸1234567890\'+žqwertzuiopšđasdfghjklčćyxcvbnm,.-'
        , shift: { 0: '¨!"#$%&/()=?*', 44: ';:_' }
        , alt: { 1: '~ˇ^˘°˛`˙´˝¨¸¤\\|€', 24: '÷×', 29: '[]', 33: 'łŁ', 36: 'ß', 40: '@{}§<>' }
        , dk: { 'ˇ': 'nňcčdďsšlľeěrřtťzžNŇCČDĎSŠLĽEĚRŘTŤZŽ ˇ', '^': 'aâiîoôAÂIÎOÔ ^', '˘': 'aăAĂ ˘', '°': 'uůUŮ °', '˛': 'aąeęAĄEĘ ˛', '˙': 'zżZŻ ˙', '´': 'nńcćyýaásślĺeérŕuúiízźoóNŃCĆYÝAÁSŚLĹEÉRŔUÚIÍZŹOÓ ´', '˝': 'uűoőUŰOŐ ˝', '¨': 'aäeëuüoöAÄEËUÜOÖ ¨', '¸': 'cçsşCÇSŞ ¸' }
    },
    {
        code: 'BG'
        , name: 'Bulgarian (Latin)'
        , normal: '`1234567890-=\\qwertyuiop[]asdfghjkl;\'zxcvbnm,./'
        , shift: { 0: '~!@#$%^&*()_+|', 24: '{}', 35: ':"', 44: '<>?' }
    },
    {
        code: 'BG'
        , name: 'Bulgarian'
        , normal: '`1234567890-.(,уеишщксдзц;ьяаожгтнвмчюйъэфхпрлб'
        , shift: { 0: '~!?+"%=:/_№ІV)ы', 25: '§' }
    },
    {
        code: 'FR-CA'
        , name: 'Canadian French (Legacy)'
        , normal: '°1234567890-=àqwertyuiop^çasdfghjkl;èzxcvbnm,.é'
        , shift: { 1: '!"#$%?&*()_+', 35: ':', 44: '\'' }
        , alt: { 0: '¬¹@³¼½¾{[]}|¸`', 17: '¶', 19: '¥', 22: 'øþ°~æßðª', 35: '´', 37: '«»¢', 43: 'µ<>/' }
        , shift_alt: { 1: '¡²£¤', 9: '±', 11: '¿', 17: '®', 25: '¨', 27: '§', 39: '©', 43: 'º' }
        , dk: { '¸': 'cçCÇ', '^': 'aâeêuûiîoôAÂEÊUÛIÎOÔ ^', '~': 'nñaãoõNÑAÃOÕ ~', '¨': 'aäeëuüiïyÿoöAÄEËUÜIÏOÖ ¨', '´': 'aáeéuúiíyýoóAÁEÉUÚIÍYÝOÓ ´', '`': 'aàeèuùiìoòAÀEÈUÙIÌOÒ `' }
    },
    {
        code: 'EN-CA'
        , name: 'Canadian French'
        , normal: '#1234567890-=<qwertyuiop^¸asdfghjkl;`zxcvbnm,.é'
        , shift: { 0: '|!"/$%?&*()_+>', 25: '¨', 35: ':', 44: '\'' }
        , alt: { 0: '\\±@£¢¤¬¦²³¼½¾}', 22: '§¶[]', 35: '~{', 43: 'µ¯­´' }
        , dk: { '^': 'aâeêuûiîoôAÂEÊUÛIÎOÔ ^', '¸': 'cçCÇ ¸', '¨': 'aäeëuüiïyÿoöAÄEËUÜIÏOÖ ¨', '`': 'aàeèuùiìoòAÀEÈUÙIÌOÒ `', '´': 'aáeéuúiíyýoóAÁEÉUÚIÍYÝOÓ ´' }
    },
    {
        code: 'EN-CA'
        , name: 'Canadian Multilingual Standard'
        , normal: '/1234567890-=àqwertyuiop^çasdfghjkl;èzxcvbnm,.é'
        , shift: { 0: '\\!@#$%?&*()_+', 24: '¨', 35: ':', 44: '\'"' }
        , alt: { 0: '|', 4: '¤', 7: '{}[]', 12: '¬', 16: '€', 24: '`~', 35: '°', 37: '«»', 44: '<>' }
        , dk: { '^': 'cĉaâhĥjĵgĝsŝwŵeêuûiîyŷoôCĈAÂHĤJĴGĜSŜWŴEÊUÛIÎYŶOÔ ^', '¨': 'aäeëuüiïyÿoöAÄEËUÜIÏYŸOÖ ¨', '`': 'aàeèuùiìoòAÀEÈUÙIÌOÒ `', '~': 'nñaãuũiĩoõNÑAÃUŨIĨOÕ ~' }
    },
    {
        code: 'CE'
        , name: 'Chechen Cyrillic'
        , normal: 'ё1234567890-ъэяшертыуиопющасдфгчйкльжзхцвбнм,.І'
        , shift: { 1: '!@#$%^&*()_', 44: '<>' }
    },
    {
        code: 'CE'
        , name: 'Chechen Latin'
        , normal: 'äċçç̇ġẋq̇öņşü-ƶƖƿqwErtyuiopǝƖėasDfghjkl;\'zxCvbnm,./'
        , shift: { 8: 'ŋ', 11: '_', 13: 'UO', 24: 'ƏIE', 35: ':"', 44: '<>?' }
    },
    {
        code: 'CHR'
        , name: 'Cherokee Phonetic'
        , normal: '`1234567890-=\\qwertyuiop[]asdfghjkl;\'zxcvbnm,./'
        , shift: { 0: '~!@#$%^&*()_+|', 24: '{}', 35: ':"', 44: '<>?' }
        , 'cbk':/**
 * $Id$
 *
 * Cherokee char processor
 *
 * This software is protected by patent No.2009611147 issued on 20.02.2009 by Russian Federal Service for Intellectual Property Patents and Trademarks.
 *
 * @author Konstantin Wiolowan
 * @copyright 2008-2009 Konstantin Wiolowan <wiolowan@mail.ru>
 * @version $Rev$
 * @lastchange $Author$ $Date$
 */
        new function () {
            var reNotCHR = /[^adeghik-oqs-wyz]/
                , remap = {
                    a: 'Ꭰ', e: 'Ꭱ', i: 'Ꭲ', o: 'Ꭳ', u: 'Ꭴ', v: 'Ꭵ'
                    , ga: 'Ꭶ', ka: 'Ꭷ', ge: 'Ꭸ', gi: 'Ꭹ', go: 'Ꭺ', ge: 'Ꭻ', gv: 'Ꭼ', ke: 'Ꭸ', ki: 'Ꭹ', ko: 'Ꭺ', ke: 'Ꭻ', kv: 'Ꭼ'
                    , ha: 'Ꭽ', he: 'Ꭾ', hi: 'Ꭿ', ho: 'Ꮀ', hu: 'Ꮁ', hv: 'Ꮂ'
                    , la: 'Ꮃ', le: 'Ꮄ', li: 'Ꮅ', lo: 'Ꮆ', lu: 'Ꮇ', lv: 'Ꮈ'
                    , ma: 'Ꮉ', me: 'Ꮊ', mi: 'Ꮋ', mo: 'Ꮌ', mu: 'Ꮍ'
                    , hna: 'Ꮏ'
                    , na: 'Ꮎ', ne: 'Ꮑ', ni: 'Ꮒ', no: 'Ꮓ', nu: 'Ꮔ', nv: 'Ꮕ'
                    , qua: 'Ꮖ', que: 'Ꮗ', qui: 'Ꮘ', quo: 'Ꮙ', quu: 'Ꮚ', quv: 'Ꮛ'
                    , kwa: 'Ꮖ', kwe: 'Ꮗ', kwi: 'Ꮘ', kwo: 'Ꮙ', kwu: 'Ꮚ', kwv: 'Ꮛ'
                    , gwa: 'Ꮖ', gwe: 'Ꮗ', gwi: 'Ꮘ', gwo: 'Ꮙ', gwu: 'Ꮚ', gwv: 'Ꮛ'
                    //,sa:'Ꮝ',se:'Ꮞ',si:'Ꮟ',so:'Ꮠ',su:'Ꮡ',sv:'Ꮢ'
                    , 'Ꮝa': 'Ꮜ', 'Ꮝe': 'Ꮞ', 'Ꮝi': 'Ꮟ', 'Ꮝo': 'Ꮠ', 'Ꮝu': 'Ꮡ', 'Ꮝv': 'Ꮢ'
                    , da: 'Ꮣ', ta: 'Ꮤ', de: 'Ꮥ', te: 'Ꮦ', di: 'Ꮧ', ti: 'Ꮨ', 'do': 'Ꮩ', du: 'Ꮪ', dv: 'Ꮫ', to: 'Ꮩ', tu: 'Ꮪ', tv: 'Ꮫ'
                    , dla: 'Ꮬ', tla: 'Ꮭ', tle: 'Ꮮ', tli: 'Ꮯ', tlo: 'Ꮰ', tlu: 'Ꮱ', tlv: 'Ꮲ', dle: 'Ꮮ', dli: 'Ꮯ', dlo: 'Ꮰ', dlu: 'Ꮱ', dlv: 'Ꮲ'
                    , tsa: 'Ꮳ', tse: 'Ꮴ', tsi: 'Ꮵ', tso: 'Ꮶ', tsu: 'Ꮷ', tsv: 'Ꮸ'
                    , dsa: 'Ꮳ', dse: 'Ꮴ', dsi: 'Ꮵ', dso: 'Ꮶ', dsu: 'Ꮷ', dsv: 'Ꮸ'
                    , wa: 'Ꮹ', we: 'Ꮺ', wi: 'Ꮻ', wo: 'Ꮼ', wu: 'Ꮽ', wv: 'Ꮾ'
                    , ya: 'Ꮿ', ye: 'Ᏸ', yi: 'Ᏹ', yo: 'Ᏺ', yu: 'Ᏻ', yv: 'Ᏼ'
                }
                , submap = {
                    s: 'Ꮝ'
                    //,nah:'Ꮐ'
                    , tl: 1, dl: 1, ts: 1, ds: 1, qu: 1, kw: 1, gw: 1, hn: 1
                }

            this.charProcessor = function (chr, buf) {
                if (chr == '\u0008') { // backspace
                    if (buf.length) {
                        return [buf.slice(0, -1), buf.length - 1]
                    }
                } else if (reNotCHR.test(chr)) {
                    return remap[buf + chr] || [buf + chr, 0]
                } else {
                    var str = buf + chr
                        , res, cres;
                    if (res = remap[str]) {
                        return [res, 0];
                    } else if (res = submap[str]) {
                        switch (res) {
                            case 1:
                                return [str, 2];
                            default:
                                return [res, 1];
                        }
                    } else if (res = remap[buf]) {
                        if (cres = remap[chr])
                            return [res + cres, 1]
                        else
                            return [res + chr, 1]
                    } else {
                        return [buf + (remap[chr] || submap[chr] || chr), 1]
                    }
                }
            }
        }
    },
    {
        code: 'HR'
        , name: 'Croatian'
        , normal: '¸1234567890\'+žqwertzuiopšđasdfghjklčćyxcvbnm,.-'
        , shift: { 0: '¨!"#$%&/()=?*', 44: ';:_' }
        , alt: { 1: '~ˇ^˘°˛`˙´˝¨¸¤\\|€', 24: '÷×', 29: '[]', 33: 'łŁ', 36: 'ß', 40: '@{}§<>' }
        , dk: { 'ˇ': 'nňcčdďsšlľeěrřtťzžNŇCČDĎSŠLĽEĚRŘTŤZŽ ˇ', '^': 'aâiîoôAÂIÎOÔ ^', '˘': 'aăAĂ ˘', '°': 'uůUŮ °', '˛': 'aąeęAĄEĘ ˛', '˙': 'zżZŻ ˙', '´': 'nńcćyýaásślĺeérŕuúiízźoóNŃCĆYÝAÁSŚLĹEÉRŔUÚIÍZŹOÓ ´', '˝': 'uűoőUŰOŐ ˝', '¨': 'aäeëuüoöAÄEËUÜOÖ ¨', '¸': 'cçsşCÇSŞ ¸' }
    },
    {
        code: 'CS-CZ'
        , name: 'Czech Programmers'
        , normal: '`1234567890-=\\qwertyuiop[]asdfghjkl;\'zxcvbnm,./'
        , shift: { 0: '~!@#$%^&*()_+|', 24: '{}', 35: ':"', 44: '<>?' }
        , alt: { 0: ';+ěščřžýáíé=´¨', 16: '€', 24: 'ú)', 35: 'ů§', 44: '?:-' }
        , shift_alt: { 0: '°', 11: '%ˇ^', 24: '/(', 35: '"!', 44: '×÷_' }
        , dk: { '´': 'nńcćzźaásślĺeérŕuúiíyýoóNŃCĆZŹAÁSŚLĹEÉRŔUÚIÍYÝOÓ ´', 'ˇ': 'nňcčzždďsšlľeěrřtťNŇCČZŽDĎSŠLĽEĚRŘTŤ ˇ', '°': 'aåuůAÅUŮ °', '¨': 'aäeëuüiïyÿoöAÄEËUÜIÏYŸOÖ ¨', '^': 'aâeêuûiîoôAÂEÊUÛIÎOÔ ^' }
    },
    {
        code: 'CS-CZ'
        , name: 'Czech (QWERTY)'
        , normal: ';+ěščřžýáíé=´¨qwertyuiopú)asdfghjklů§zxcvbnm,.-'
        , shift: { 0: '°1234567890%ˇ\'', 24: '/(', 35: '"!', 44: '?:_' }
        , alt: { 0: '`!@#$%^&*()-=\\', 16: '€', 24: '[]', 35: ';¤', 44: '<>/' }
        , shift_alt: { 0: '~', 11: '_+|', 24: '{}', 35: ':^', 44: '×÷?' }
        , dk: { '´': 'nńcćzźaásślĺeérŕuúiíyýoóNŃCĆZŹAÁSŚLĹEÉRŔUÚIÍYÝOÓ ´', 'ˇ': 'nňcčzždďsšlľeěrřtťNŇCČZŽDĎSŠLĽEĚRŘTŤ ˇ', '^': 'aâeêuûiîoôAÂEÊUÛIÎOÔ ^', '°': 'aåuůAÅUŮ °', '¨': 'aäeëuüiïyÿoöAÄEËUÜIÏYŸOÖ ¨' }
    },
    {
        code: 'CS-CZ'
        , name: 'Czech'
        , normal: ';+ěščřžýáíé=´¨qwertzuiopú)asdfghjklů§yxcvbnm,.-'
        , shift: { 0: '°1234567890%ˇ\'', 24: '/(', 35: '"!', 44: '?:_' }
        , alt: { 1: '~ˇ^˘°˛`˙´˝¨¸¤\\|€', 24: '÷×', 27: 'đĐ[]', 33: 'łŁ$ß', 38: '#&@{}', 44: '<>*' }
        , dk: { 'ˇ': 'nňcčdďsšlľeěrřtťzžNŇCČDĎSŠLĽEĚRŘTŤZŽ ˇ', '^': 'aâeêuûiîoôAÂEÊUÛIÎOÔ ^', '˘': 'aăgğAĂGĞ ˘', '°': 'aåuůAÅUŮ °', '˛': 'aąeęuųiįAĄEĘUŲIĮ ˛', '`': 'aàeèuùiìoòAÀEÈUÙIÌOÒ `', '˙': 'eėiızżEĖIİZŻ ·', '´': 'nńcćyýaásślĺeérŕuúiízźoóNŃCĆYÝAÁSŚLĹEÉRŔUÚIÍZŹOÓ ´', '˝': 'uűoőUŰOŐ ˝', '¨': 'yÿaäeëuüiïoöYŸAÄEËUÜIÏOÖ ¨', '¸': 'nņcçgģsşlļkķrŗtţNŅCÇGĢSŞLĻKĶRŖTŢ ¸' }
    },
    {
        code: 'DA-DK'
        , name: 'Danish'
        , normal: '½1234567890+´\'qwertyuiopå¨asdfghjklæøzxcvbnm,.-'
        , shift: { 0: '§!"#¤%&/()=?`*', 25: '^', 44: ';:_' }
        , alt: { 2: '@£$€', 7: '{[]}', 12: '|', 16: '€', 25: '~', 43: 'µ' }
        , dk: { '´': 'aáeéuúiíyýoóAÁEÉUÚIÍYÝOÓ ´', '`': 'aàeèuùiìoòAÀEÈUÙIÌOÒ `', '¨': 'aäeëuüiïyÿoöAÄEËUÜIÏOÖ ¨', '^': 'aâeêuûiîoôAÂEÊUÛIÎOÔ ^', '~': 'nñaãoõNÑAÃOÕ ~' }
    },
    {
        code: 'AR-PRS'
        , name: 'Dari'
        , normal: '`١٢٣٤٥٦٧٨٩٠-=\\قوعرتىئءغپ[]اسدفگهجکل;\'زخچژبنم,./'
        , shift: { 0: '"!@#$%^&*()_+|ثأة', 18: 'طظلالا؟؛{}آصض', 31: 'ح', 35: ':"ذش', 44: '<>?' }
    },
    {
        code: 'HI-IN'
        , name: 'Devanagari - INSCRIPT'
        , normal: 'ॊ1234567890-ृॉौैाीूबहगदजड़ोे्िुपरकतचटॆंमनवलस,.य'
        , shift: { 0: 'ऒऍॅ्रर्ज्ञत्रक्षश्र()ःऋऑऔऐआईऊभङघधझढञओएअइउफऱखथछठऎँणऩऴळशष।य़' }
        , alt: { 1: '१२३४५६७८९०', 12: 'ॄ', 17: 'ॣ', 21: 'ग़', 23: 'ज़ड़', 29: 'ॢ', 33: 'क़', 35: '॒', 37: '॓', 39: '॔', 44: '॰॥' }
        , shift_alt: { 12: 'ॠ', 17: 'ॡ', 24: 'ढ़', 29: 'ऌ', 31: 'फ़', 33: 'ख़', 36: '॑', 38: 'ॐ', 45: 'ऽ' }
    },
    {
        code: 'DIN'
        , name: 'Dinka'
        , normal: '`1234567890-εŋqwertyuiopɔɣasdfghjkl;\'zxcvbnm,./'
        , shift: { 0: '~!@#$%^&*()_Ɛ', 35: ':"', 44: '<>?' }
    },
    {
        code: 'DIV-MV'
        , name: 'Divehi Phonetic'
        , normal: '`1234567890-=\\ްއެރތޔުިޮޕ][ަސދފގހޖކލ؛\'ޒ×ޗވބނމ،./'
        , shift: { 0: '~!@#$%^&*)(_+|ޤޢޭޜޓޠޫީޯ÷}{ާށޑﷲޣޙޛޚޅ:"ޡޘޝޥޞޏޟ><؟' }
        , alt: { 35: ';', 40: '‍‌‎‏,' }
    },
    {
        code: 'DIV-MV'
        , name: 'Divehi Typewriter'
        , normal: '`1234567890-=]ޫޮާީޭގރމތހލ[ިުްަެވއނކފﷲޒޑސޔޅދބށޓޯ'
        , shift: { 0: '~!@#$%^&*)(_+}×’“/:ޤޜޣޠޙ÷{<>.،"ޥޢޘޚޡ؛ޖޕޏޗޟޛޝ\\ޞ؟' }
        , alt: { 29: ',', 36: ';', 40: '‍‌‎‏' }
    },
    {
        code: 'NL'
        , name: 'Dutch'
        , normal: '@1234567890/°<qwertyuiop¨*asdfghjkl+´zxcvbnm,.-'
        , shift: { 0: '§!"#$%&_()\'?~>', 24: '^|', 35: '±`', 44: ';:=' }
        , alt: { 0: '¬¹²³¼½¾£{}', 11: '\\¸', 16: '€¶', 27: 'ß', 37: '«»¢', 43: 'µ', 45: '·' }
        , dk: { '~': 'nñaãoõNÑAÃOÕ ~', '¸': 'cçCÇ ¸', '¨': 'aäeëuüiïyÿoöAÄEËUÜIÏOÖ ¨', '^': 'aâeêuûiîoôAÂEÊUÛIÎOÔ ^', '´': 'aáeéuúiíyýoóAÁEÉUÚIÍYÝOÓ ´', '`': 'aàeèuùiìoòAÀEÈUÙIÌOÒ `' }
    },
    {
        code: 'DZ-BT'
        , name: 'Dzongkha'
        , normal: '༉༡༢༣༤༥༦༧༨༩༠༔།ཝཀཁགངིེོུཅཆཇཉཏཐདནཔཕབམཙཚཛཞཟའཡརལཤསཧཨ'
        , shift: { 0: '༊༄༅༆', 6: '༈༸༴༼༽ཿ༑ྭྐྑྒྔ྄ྀཻཽྕྖྗྙྟྠྡྣྤྥྦྨྩྪྫྮྯཱྱྲླྴྶྷ' }
        , alt: { 0: '࿑1234567890-=\\ྈྉ', 17: 'ྃ༚༛༜༝༞༟[]ཊཋཌཎ‹›༷ཾ༹;\'༓྾༃༏ཪྊྃཥ,./' }
        , shift_alt: { 0: '࿐!@#$%༁&*()_+ྺ', 17: 'ྂ', 21: '༗༘༙༾༿ྚྛྜྞ«»༵', 35: ':"༶྿྅ྻྼྋྙྃྵ<>?' }
        , caps: { 0: '࿑1234567890-=\\ྈྉ࿇ྃ༚༛༜༝༞༟[]ཊཋཌཎ‹›༷ཾ༹;\'༓྾༃༏ཪྊཥ,./' }
        , shift_caps: { 0: '࿐!@#$%༁&*()_+ྺ', 17: 'ྂ', 21: '༗༘༙༾༿ྚྛྜྞ«»༵', 35: ':"༶྿྅ྻྼྋྵ<>?' }
    },
    {
        code: 'ET-EE'
        , name: 'Estonian'
        , normal: 'ˇ1234567890+´\'qwertyuiopüõasdfghjklöäzxcvbnm,.-'
        , shift: { 0: '~!"#¤%&/()=?`*', 44: ';:_' }
        , alt: { 2: '@£$€', 7: '{[]}\\', 13: '½', 16: '€', 25: '§', 27: 'š', 36: '^ž' }
        , dk: { '´': 'nńcćzźsśeéoóNŃCĆZŹSŚEÉOÓ ´', '`': 'aàeèuùoòAÀEÈUÙOÒ `', '^': 'aâgĝeêuûiîAÂGĜEÊUÛIÎ ^', 'ˇ': 'cčzžsšCČZŽSŠ ˇ', '~': 'oõOÕ ~' }
    },
    {
        code: 'AM-ET'
        , name: 'Ethiopic WashRa'
        , normal: '`1234567890-=\\ቀወeረተኀሸየዐፐ«»አሰደፈገሀጀከለ፤፣ዘጠቸጸበነመ,።/'
        , shift: { 0: '~!@#$%^&*()_+|ቐ', 19: 'YUIOጰ{}Aሠዻ', 30: 'ጘሐ', 33: 'ኸ', 35: '፦፥ዠ', 39: 'ጨፀቨኘ', 44: '፠፨፧' }
        , 'cbk':/**
 * $Id$
 *
 * Ethiopian WashRa layout
 *
 * This software is protected by patent No.2009611147 issued on 20.02.2009 by Russian Federal Service for Intellectual Property Patents and Trademarks.
 *
 * @author Konstantin Wiolowan
 * @copyright 2008-2009 Konstantin Wiolowan <wiolowan@mail.ru>
 * @version $Rev$
 * @lastchange $Author$ $Date$
 */
        function (chr, buf) {
            var vow
                , str = ''
                , len = 0
                , convWashRa = { A: 'እ', U: 'ሽ', O: 'ዕ', I: 'ይ', Y: 'ኅ' }
                , vowelsWashRa = { e: 0, ',': 1, 'ይ': 2, 'እ': 3, 'ኅ': 4, 'ሽ': 5, 'ዕ': 6, '/': 7, '1': 9, '3': 10, '4': 11, '5': 12, '6': 13 };

            if (chr == '\u0008') { // backspace
                if (buf.length) {
                    str = buf.slice(0, -1);
                    len = buf.length - 1;
                }
            } else {
                chr = Langs.ET.conv[chr] || convWashRa[chr] || chr;
                if (chr == ' ') {
                    str = '፡';
                } else {
                    if (buf == '`') {
                        if (/[0-9]/.test(chr))
                            str = '፻፩፪፫፬፭፮፯፰፱'.charAt(chr);
                        else if ('`' == chr)
                            str = chr;
                        else
                            str = buf + chr;
                    } else if (buf == '~') {
                        if (/[0-9]/.test(chr))
                            str = '፼፲፳፴፵፶፷፸፹፺'.charAt(chr);
                        else if ('~' == chr)
                            str = chr;
                        else
                            sre = buf + chr;
                    } else {
                        vow = vowelsWashRa[chr] || vowelsWashRa[chr.toLowerCase()];
                        if (isNumber(vow) && buf) {
                            str = Langs.ET.cons[buf].charAt(vow);
                            if (!str || str == ' ') {
                                str = buf;
                                len = buf.length;
                            }
                        } else {
                            str = buf + chr;
                            if ('`' == str || '~' == str)
                                len = 1;
                            else
                                len = Langs.ET.cons[chr] ? 1 : 0;
                        }
                    }
                }
            }
            return [str, len];
        }
    },
    {
        code: 'AM-ET'
        , name: 'Ethiopic XTT'
        , normal: '`፩፪፫፬፭፮፯፰፱0-=\\ቀወeረተየuioፐጸፀaሰደፈገሀጀከለ፤አዘኀቸቨበነመ፣።/'
        , shift: { 0: '~፲፳፴፵፶፷፸፹፺)_+|ቐW', 18: 'ጠY', 23: 'ጰ{}', 27: 'ሸዻ', 30: 'ጘሐ', 33: 'ኸ', 35: '፥ዐዠሠጨ', 42: 'ኘ', 44: '«»?' }
        , alt: { 7: '፨፠', 14: 'ቈቘ', 27: 'ⶠ', 30: 'ጐ', 33: 'ኰዀ፦', 37: 'ⶰኈⶨⶸ', 46: '፧' }
        , 'cbk':/**
 * $Id$
 *
 * Ethiopian Xenotype XXT layout
 *
 * This software is protected by patent No.2009611147 issued on 20.02.2009 by Russian Federal Service for Intellectual Property Patents and Trademarks.
 *
 * @author Konstantin Wiolowan
 * @copyright 2008-2009 Konstantin Wiolowan <wiolowan@mail.ru>
 * @version $Rev$
 * @lastchange $Author$ $Date$
 */
        function (chr, buf) {
            var vow
                , str = ''
                , len = 0
                , vowelsXXT = { a: 1, i: 2, A: 3, e: 4, u: 5, o: 6, W: 7, Y: 8 };

            if (chr == '\u0008') { // backspace
                if (buf.length) {
                    str = buf.slice(0, -1);
                    len = buf.length - 1;
                }
            } else {
                chr = Langs.ET.conv[chr] || chr;
                if (chr == ' ') {
                    str = '፡';
                } else {
                    vow = vowelsXXT[chr] || vowelsXXT[chr.toLowerCase()];
                    if (isNumber(vow)) {
                        if (buf) {
                            str = Langs.ET.cons[buf].charAt(vow);
                            if (!str || str == ' ') {
                                str = buf;
                                len = buf.length;
                            }
                        } else {
                            str = Langs.ET.cons['እ'].charAt(vow) || buf + chr;
                        }
                    } else {
                        str = buf + chr;
                        len = Langs.ET.cons[chr] ? 1 : 0;
                    }
                }
            }
            return [str, len];
        }
    },
    {
        code: 'FO'
        , name: 'Faeroese'
        , normal: '½1234567890+´\'qwertyuiopåðasdfghjklæøzxcvbnm,.-'
        , shift: { 0: '§!"#¤%&/()=?`*', 44: ';:_' }
        , alt: { 2: '@£$€', 7: '{[]}', 12: '|', 16: '€', 24: '¨~', 36: '^', 43: 'µ' }
        , dk: { '´': 'aáeéuúiíyýoóAÁEÉUÚIÍYÝOÓ ´', '`': 'aàeèuùiìoòAÀEÈUÙIÌOÒ `', '¨': 'aäeëuüiïyÿoöAÄEËUÜIÏOÖ ¨', '~': 'nñaãoõNÑAÃOÕ ~', '^': 'aâeêuûiîoôAÂEÊUÛIÎOÔ ^' }
    },
    {
        code: 'SE'
        , name: 'Finnish with Sami'
        , normal: '§1234567890+´\'qwertyuiopå¨asdfghjklöäzxcvbnm,.-'
        , shift: { 0: '½!"#¤%&/()=?`*', 25: '^', 44: ';:_' }
        , alt: { 2: '@£$€', 7: '{[]}\\', 14: 'â', 16: '€', 18: 'ŧ', 21: 'ïõ', 25: '~ášđǥǧȟ', 33: 'ǩ', 35: 'øæž', 39: 'čǯʒŋµ' }
        , dk: { '´': 'nńcćzźaásślĺwẃeérŕåǻuúiíyýoóNŃCĆZŹAÁSŚLĹWẂEÉRŔÅǺUÚIÍYÝOÓøǿæǽØǾÆǼ ´', '`': 'aàwẁeèuùiìyỳoòAÀWẀEÈUÙIÌYỲOÒ `', '¨': 'aäwẅeëuüiïyÿoöAÄWẄEËUÜIÏYŸOÖ ¨', '^': 'cĉaâhĥjĵgĝsŝwŵeêuûiîyŷoôCĈAÂHĤJĴGĜSŜWŴEÊUÛIÎYŶOÔ ^', '~': 'nñaãuũiĩoõNÑAÃUŨIĨOÕ ~' }
    },
    {
        code: 'FI'
        , name: 'Finnish'
        , normal: '§1234567890+´\'qwertyuiopå¨asdfghjklöäzxcvbnm,.-'
        , shift: { 0: '½!"#¤%&/()=?`*', 25: '^', 44: ';:_' }
        , alt: { 2: '@£$€', 7: '{[]}\\', 16: '€', 25: '~', 43: 'µ' }
        , dk: { '´': 'aáeéuúiíyýoóAÁEÉUÚIÍYÝOÓ ´', '`': 'aàeèuùiìoòAÀEÈUÙIÌOÒ `', '¨': 'aäeëuüiïyÿoöAÄEËUÜIÏOÖ ¨', '^': 'aâeêuûiîoôAÂEÊUÛIÎOÔ ^', '~': 'nñaãoõNÑAÃOÕ ~' }
    },
    {
        code: 'FR'
        , name: 'French'
        , normal: '²&é"\'(-è_çà)=*azertyuiop^$qsdfghjklmùwxcvbn,;:!'
        , shift: { 1: '1234567890°+µ', 24: '¨£', 36: '%', 43: '?./§' }
        , alt: { 2: '~#{[|`\\^@]}', 16: '€', 25: '¤' }
        , dk: { '~': 'nñoõaãNÑOÕAÃ ~', '`': 'eèuùiìoòaàEÈUÙIÌOÒAÀ `', '^': 'eêuûiîoôaâEÊUÛIÎOÔAÂ ^', '¨': 'eëuüiïyÿoöaäEËUÜIÏOÖAÄ ¨' }
    },
    {
        code: 'EN-IE'
        , name: 'Gaelic'
        , normal: '`1234567890-=#qwertyuiop[]asdfghjkl;\'zxcvbnm,./'
        , shift: { 1: '!"£$%^&*()_+~', 24: '{}', 35: ':@', 44: '<>?' }
        , alt: { 0: '¦', 4: '€', 16: 'é', 19: 'ýúíó', 26: 'á' }
        , shift_alt: { 0: '¬' }
        , dk: { '\'': 'aáeéuúiíyýoóAÁEÉUÚIÍYÝOÓ \'', '`': 'aàeèuùiìoòAÀEÈUÙIÌOÒ `' }
    },
    {
        code: 'KA-GE'
        , name: 'Georgian'
        , normal: '„!?№§%:.;,/–=(ღჯუკენგშწზხცფძვთაპროლდჟჭჩყსმიტქბჰ'
        , shift: { 0: '“1234567890-+)' }
        , alt: { 18: 'ჱ', 24: 'ჴ', 26: 'ჶ', 28: 'ჳ', 42: 'ჲ', 46: 'ჵ' }
    },
    {
        code: 'DE'
        , name: 'German (IBM)'
        , normal: '^1234567890ß´#qwertzuiopü+asdfghjklöäyxcvbnm,.-'
        , shift: { 0: '°!"§$%&/()=?`\'', 25: '*', 44: ';:_' }
        , alt: { 2: '²³', 7: '{[]}\\', 14: '@', 16: '€', 25: '~', 43: 'µ' }
        , dk: { '´': 'yýaáeéuúiíoóYÝAÁEÉUÚIÍOÓ ´', '`': 'aàeèuùiìoòAÀEÈUÙIÌOÒ `', '^': 'aâeêuûiîoôAÂEÊUÛIÎOÔ ^' }
    },
    {
        code: 'DE'
        , name: 'German'
        , normal: '^1234567890ß´#qwertzuiopü+asdfghjklöäyxcvbnm,.-'
        , shift: { 0: '°!"§$%&/()=?`\'', 25: '*', 44: ';:_' }
        , alt: { 2: '²³', 7: '{[]}\\', 14: '@', 16: '€', 25: '~', 43: 'µ' }
        , dk: { '´': 'yýaáeéuúiíoóYÝAÁEÉUÚIÍOÓ ´', '`': 'aàeèuùiìoòAÀEÈUÙIÌOÒ `', '^': 'aâeêuûiîoôAÂEÊUÛIÎOÔ ^' }
    },
    {
        code: 'GLA-ANCIENT'
        , name: 'Glagolitic'
        , normal: 'ⱒⰷⱋⰼⱚⱛⱕⰺⱉⱙⱐⱏ※ⱑⱎⰵⱃⱅⱏⰹⱆⰹⱁⱂⱓⰶⰰⱄⰴⱇⰳⱍⰻⰽⰾ⁖ⰸⱈⱌⰲⰱⱀⰿⱔⱗⱘ'
        , shift: { 0: 'ⰚⰇⰛⰌⰪⰫⰥ', 8: 'ⰊⰙⰩⰠⰟⱜⰡⰞⰅⰓⰕⰟⰉⰖⰉⰑⰒⰣⰆⰀⰔⰄⰗⰃⰝⰋⰍⰎ', 36: '⁙ⰈⰘⰜⰂⰁⰐⰏⰤⰧⰩ' }
    },
    {
        code: 'GOT-ANCIENT'
        , name: 'Gothic'
        , normal: '𐌵𐍅𐌴𐍂𐍄𐌿𐌹𐍉𐍀𐍁𐍊𐌰𐍃𐌳𐍆𐌲𐌷𐌾𐌺𐌻𐌶𐍇𐍈𐌱𐌽𐌼𐌸'
    },
    {
        code: 'EL-GR'
        , name: 'Greek (220) Latin'
        , normal: '\\1234567890\']#qwertyuiop+}asdfghjkl΄¨zxcvbnm,.-'
        , shift: { 0: '|!"#$%&/()=?[@', 24: '*{', 35: '¨΅', 44: ';:_' }
        , alt: { 2: '²³£§¶', 8: '¤¦°±½¬', 16: '€', 24: '«»', 35: '΅΅' }
        , dk: { '΄': ' ΄', '¨': ' ¨', '΅': ' ΅' }
    },
    {
        code: 'EL-GR'
        , name: 'Greek (220)'
        , normal: '½1234567890\']#;ςερτυθιοπ+}ασδφγηξκλ΄¨ζχψωβνμ,.-'
        , shift: { 0: '±!"£$%&/()=?[@:~', 24: '*{', 35: '¨΅', 44: ';:_' }
        , alt: { 2: '²³£§¶', 8: '¤¦°±½¬', 16: '€®', 19: '¥', 24: '«»', 35: '΅΅', 39: '©' }
        , dk: { '΄': 'ωώαάηήεέιίυύοόΩΏΑΆΗΉΕΈΙΊΥΎΟΌ ΄', '¨': 'ιϊυϋΙΪΥΫ ¨', '΅': 'ιΐυΰ ΅' }
    },
    {
        code: 'EL-GR'
        , name: 'Greek (319) Latin'
        , normal: '\\1234567890\'+`qwertyuiop[]asdfghjkl´^zxcvbnm,.-'
        , shift: { 0: '|!"#$%&/()=?*@', 24: '{}', 35: '¨~', 44: ';:_' }
        , alt: { 16: '€' }
        , dk: { '´': 'aáeéuúiíyýoóAÁEÉUÚIÍYÝOÓ ´', '¨': 'aäeëuüiïyÿoöAÄEËUÜIÏOÖ ¨', '^': 'aâeêuûiîoôAÂEÊUÛIÎOÔ ^', '~': 'nñaãoõNÑAÃOÕ ~', '`': 'aàeèuùiìoòAÀEÈUÙIÌOÒ `' }
    },
    {
        code: 'EL-GR'
        , name: 'Greek (319)'
        , normal: '½1234567890\'+²·ςερτυθιοπ[]ασδφγηξκλ΄’ζχψωβνμ,.-'
        , shift: { 0: '±!"£$%¬/()=°*³―¦', 24: '«»', 35: '¨‘', 44: ';:_' }
        , alt: { 16: '€', 35: '΅' }
        , dk: { '΄': 'ωώαάηήεέιίυύοόΩΏΑΆΗΉΕΈΙΊΥΎΟΌ ΄', '¨': 'ιϊυϋΙΪΥΫ ¨', '΅': 'ιΐυΰ ΅' }
    },
    {
        code: 'EL-GR'
        , name: 'Greek Latin'
        , normal: '`1234567890-=\\qwertyuiop[]asdfghjkl;\'zxcvbnm,./'
        , shift: { 0: '~!@#$%^&*()_+|', 24: '{}', 35: ':"', 44: '<>?' }
        , alt: { 1: '¡²³¤€¼½¾‘’¥×¬äåé®þüúíóö«»áßð', 34: 'ø¶´æ', 39: '©', 42: 'ñµç', 46: '¿' }
        , shift_alt: { 1: '¹', 4: '£', 12: '÷¦', 27: '§', 35: '°¨', 39: '¢' }
        , dk: { '^': 'aâeêuûiîoôAÂEÊUÛIÎOÔ ^', '´': 'cçaáeéuúiíyýoóCÇAÁEÉUÚIÍYÝOÓ ´', '¨': 'aäeëuüiïyÿoöAÄEËUÜIÏYOÖ ¨', '`': 'aàeèuùiìoòAÀEÈUÙIÌOÒ `', '~': 'nñaãoõNÑAÃOÕ ~' }
    },
    {
        code: 'EL-GR'
        , name: 'Greek Polytonic'
        , normal: '~1234567890-=\\;ςερτυθιοπ[]ασδφγηξκλ΄\'ζχψωβνμ,./'
        , shift: { 0: '`!@#$%^&*()_+|:΅', 24: '{}', 35: '¨"', 44: '<>?' }
        , alt: { 0: '῁ϚϞϠ£§¶', 8: '¤¦°±½¬´', 16: '€®', 19: '¥', 24: '«»', 35: '΅᾿', 39: '©', 46: 'ι' }
        , shift_alt: { 2: '²³', 12: '῟῝', 25: '·', 36: '῾', 46: '῞' }
        , dk: { '-': '.¯αᾱιῑυῡΑᾹΙῙΥῩ -', '_': '.˘αᾰιῐυῠΑᾸΙῘΥῨ _', '=': 'ωὦ.῏αἆηἦιἶυὖΩὮΑἎΗἮΙἾ =', '+': 'ωὧ.῟αἇηἧιἷυὗΩὯΑἏΗἯΙἿΥὟ +', '½': 'ωᾦαᾆηᾖΩᾮΑᾎΗᾞ ½', '῟': 'ωᾧαᾇηᾗΩᾯΑᾏΗᾟ', ';': 'ωώ.´αάηήεέιίυύοόΩΏΑΆΗΉΕΈΙΊΥΎΟΌ ;', ':': '.¨ιϊυϋΙΪΥΫ :', '´': 'ωῴαᾴηῄ', '΅': '.΅ιΐυΰ ΅', '[': 'ωῶ.῀αᾶηῆιῖυῦ [', '{': 'ωῳ.ιαᾳηῃΩῼΑᾼΗῌ {', '«': 'ωῷαᾷηῇ «', ']': 'ωὼ.`αὰηὴεὲιὶυὺοὸΩῺΑᾺΗῊΕῈΙῚΥῪΟῸ ]', '}': '.· }', '»': 'ωῲαᾲηῂ »', '΄': 'ωώ.΄αάηήεέιίυύοόΩΏΑΆΗΉΕΈΙΊΥΎΟΌ ΄', '¨': '.¨ιϊυϋΙΪΥΫ ¨', '\'': 'ωὠ.᾿αἀηἠεἐρῤιἰυὐοὀΩὨΑἈΗἨΕἘΙἸΟὈ \'', '\"': 'ωὡ.῾αἁηἡεἑρῥιἱυὑοὁΩὩΑἉΗἩΕἙΡῬΙἹΥὙΟὉ "', '᾿': 'ωᾠαᾀηᾐΩᾨΑᾈΗᾘ', '῾': 'ωᾡαᾁηᾑΩᾩΑᾉΗᾙ', '~': '.΅ιΐυΰ ~', '`': '.῭ιῒυῢ `', '῁': '.῁ιῗυῧ ῁', '\\': 'ωὢ.῍αἂηἢεἒιἲυὒοὂΩὪΑἊΗἪΕἚΙἺΟὊ \\', '|': 'ωὣ.῝αἃηἣεἓιἳυὓοὃΩὫΑἋΗἫΕἛΙἻΥὛΟὋ |', '¬': 'ωᾢαᾂηᾒΩᾪΑᾊΗᾚ ¬', '῝': 'ωᾣαᾃηᾓΩᾫΑᾋΗᾛ', '/': 'ωὤ.῎αἄηἤεἔιἴυὔοὄΩὬΑἌΗἬΕἜΙἼΟὌ /', '?': 'ωὥ.῞αἅηἥεἕιἵυὕοὅΩὭΑἍΗἭΕἝΙἽΥὝΟὍ ?', 'ι': 'ωᾤαᾄηᾔΩᾬΑᾌΗᾜ', '῞': 'ωᾥαᾅηᾕΩᾭΑᾍΗᾝ' }
    },
    {
        code: 'EL-GR'
        , name: 'Greek'
        , normal: '`1234567890-=\\;ςερτυθιοπ[]ασδφγηξκλ΄\'ζχψωβνμ,./'
        , shift: { 0: '~!@#$%^&*()_+|:΅', 24: '{}', 35: '¨"', 44: '<>?' }
        , alt: { 2: '²³£§¶', 8: '¤¦°±½¬', 16: '€®', 19: '¥', 24: '«»', 35: '΅', 39: '©' }
        , dk: { '΅': 'ιΐυΰ ΅', '΄': 'ωώαάηήεέιίυύοόΩΏΑΆΗΉΕΈΙΊΥΎΟΌ ΄', '¨': 'ιϊυϋΙΪΥΫ ¨' }
    },
    {
        code: 'GU-IN'
        , name: 'Gujarati'
        , normal: '1234567890-ૃૉૌૈાીૂબહગદજડ઼ોે્િુપરકતચટંમનવલસ,.ય'
        , shift: { 1: 'ઍૅ્રર્જ્ઞત્રક્ષશ્ર()ઃઋઑઔઐઆઈઊભઙઘધઝઢઞઓએઅઇઉફ', 33: 'ખથછઠ', 38: 'ઁણ', 42: 'ળશષ।' }
        , alt: { 1: '૧૨૩૪૫૬૭૮૯૦', 12: 'ૄ', 45: '॥' }
        , shift_alt: { 12: 'ૠ', 38: 'ૐ', 45: 'ઽ' }
    },
    {
        code: 'HE-IL'
        , name: 'Hebrew'
        , normal: ';1234567890-=\\/\'קראטוןםפ][שדגכעיחלךף,זסבהנמצתץ.'
        , shift: { 0: '~!@#$%^&*)(_+|QWERTYUIOP}{ASDFGHJKL:"ZXCVBNM><?' }
        , alt: { 4: '₪', 11: 'ֿ', 16: '€', 20: 'װ', 31: 'ײױ' }
        , caps: { 35: ';\'', 44: ',./' }
        , shift_caps: { 0: 'ְֱֲֳִֵֶַָֹֻּׁׂ', 24: '[]', 35: 'ף', 44: 'תץ' }
    },
    {
        code: 'HI-IN'
        , name: 'Hindi (Inscript)'
        , normal: '`1234567890-ृ\\ौैाीूबहगदजड़ोे्िुपरकतचटॉंमनवलस,.य'
        , shift: { 0: '~ऍॅ्रजतकश()रऋ|औऐआईऊभङघधझढञओएअइउफऱखथछठ', 38: 'ँणVBळशष।य़' }
    },
    {
        code: 'HI-IN'
        , name: 'Hindi Traditional'
        , normal: '1234567890-ृॉौैाीूबहगदजड़ोे्िुपरकतचटंमनवलस,.य'
        , shift: { 1: 'ऍॅ्रर्ज्ञत्रक्षश्र()ःऋऑऔऐआईऊभङघधझढञओएअइउफऱखथछठ', 38: 'ँण', 42: 'ळशष।य़' }
        , alt: { 0: '`१२३४५६७८९०', 12: '=\\', 24: '[]', 35: ';\'', 46: '/' }
        , shift_alt: { 0: '~!@#$%^&*()_+|', 24: '{}', 35: ':"', 38: 'ॐ', 44: '<>?' }
    },
    {
        code: 'HU'
        , name: 'Hungarian 101-key'
        , normal: 'í123456789öüóűqwertyuiopőúasdfghjkléázxcvbnm,.-'
        , shift: { 1: '\'"+!%/=()', 44: '?:_' }
        , alt: { 0: '0~ˇ^˘°˛`˙´˝', 13: '\\\\|Ä§¤', 20: '€Í', 24: '÷×äđĐ[]', 32: 'íłŁ$ß>#&@{}<;>*' }
    },
    {
        code: 'HU'
        , name: 'Hungarian'
        , normal: '0123456789öüóűqwertzuiopőúasdfghjkléáyxcvbnm,.-'
        , shift: { 0: '§\'"+!%/=()', 44: '?:_' }
        , alt: { 1: '~ˇ^˘°˛`˙´˝¨¸¤\\|Ä', 20: '€Í', 24: '÷×äđĐ[]', 32: 'íłŁ$ß>#&@{}<;>*' }
        , dk: { 'ˇ': 'nňcčdďsšeěrřtťzžNŇCČDĎSŠEĚRŘTŤZŽ ˇ', '^': 'aâiîoôAÂIÎOÔ ^', '˘': 'aăAĂ ˘', '°': 'uůUŮ °', '˛': 'aąeęAĄEĘ ˛', '˙': 'zżZŻ ˙', '´': 'nńcćyýaásślĺeérŕuúiízźoóNŃCĆYÝAÁSŚLĹEÉRŔUÚIÍZŹOÓ ´', '˝': 'uűoőUŰOŐ ˝', '¨': 'aäeëuüoöAÄEËUÜOÖ ¨', '¸': 'cçsştţCÇSŞTŢ ¸' }
    },
    {
        code: 'IS'
        , name: 'Icelandic'
        , normal: '°1234567890ö-+qwertyuiopð\'asdfghjklæ´zxcvbnm,.þ'
        , shift: { 0: '¨!"#$%&/()=', 12: '_*', 25: '?', 36: '\'', 44: ';:' }
        , alt: { 5: '€', 7: '{[]}\\', 13: '`@', 16: '€', 25: '~', 36: '^', 43: 'µ' }
        , dk: { '´': 'aáeéuúiíyýoóAÁEÉUÚIÍYÝOÓ ´', '^': 'aâeêuûiîoôAÂEÊUÛIÎOÔ ^', '°': 'aåAÅ °', '¨': 'aäeëuüiïyÿoöAÄEËUÜIÏOÖ ¨', '`': 'aàeèuùiìoòAÀEÈUÙIÌOÒ `' }
    },
    {
        code: 'IU-IKU'
        , name: 'Inuktitut Phonetic'
        , normal: '`1234567890-=\\qwertyuiop[]asdfghjklł\'zxcvbnm,./'
        , shift: { 0: '~!@#$%^&*()_+|', 24: '{}', 31: 'ᕼ', 35: ':"', 41: 'ᖯ', 44: '<>?' }
        , 'cbk': Langs.IKU.charProcessor
    },
    {
        code: 'IU-IKU'
        , name: 'Inuktitut Syllabic'
        , normal: '`1234567890-=\\ᖃᐁᕋᑕᐂᐅᐃᐸ[]ᐊᓴᖕᒐᕼᔭᑲᓚᐧ\'ᖤᕙᖯᓇᒪ,.ᖤ'
        , shift: { 0: '~!@#$%^&*()_+|', 24: '{}', 35: ':"', 44: '<>?' }
        , 'cbk': Langs.IKU.charProcessor
    },
    {
        code: 'EN-IE'
        , name: 'Irish'
        , normal: '`1234567890-=#qwertyuiop[]asdfghjkl;\'zxcvbnm,./'
        , shift: { 0: '¬!"£$%^&*()_+~', 24: '{}', 35: ':@', 44: '<>?' }
        , alt: { 0: '¦', 4: '€', 16: 'é', 20: 'úíó', 26: 'á', 36: '´' }
        , shift_alt: { 36: '`' }
        , dk: { '´': 'aáeéuúiíyýoóAÁEÉUÚIÍYÝOÓ ´', '`': 'aàeèuùiìoòAÀEÈUÙIÌOÒ `' }
    },
    {
        code: 'IT'
        , name: 'Italian (142)'
        , normal: '\\1234567890\'ìùqwertyuiopè+asdfghjklòàzxcvbnm,.-'
        , shift: { 0: '|!"£$%&/()=?^§', 24: 'é*', 35: 'ç°', 44: ';:_' }
        , alt: { 3: '#', 5: '€', 7: '{[]}', 13: '`@', 16: '€', 25: '~' }
    },
    {
        code: 'IT'
        , name: 'Italian'
        , normal: '\\1234567890\'ìùqwertyuiopè+asdfghjklòàzxcvbnm,.-'
        , shift: { 0: '|!"£$%&/()=?^§', 24: 'é*', 35: 'ç°', 44: ';:_' }
        , alt: { 5: '€', 16: '€', 24: '[]', 35: '@#' }
        , shift_alt: { 24: '{}' }
    },
    {
        code: 'JA-JP'
        , name: 'Japanese'
        , normal: '`1234567890-=\\qwertyuiop[]asdfghjkl;\'zxcvbnm,./'
        , shift: { 0: '~!@#$%^&*()_+|', 24: '{}', 35: ':"', 44: '<>?' }
        , 'cbk': Langs.JP.processChar
    },
    {
        code: 'KN-IN'
        , name: 'Kannada'
        , normal: 'ೊ1234567890-ೃೌೈಾೀೂಬಹಗದಜಡೋೇ್ಿುಪರಕತಚಟೆಂಮನವಲಸ,.ಯ'
        , shift: { 0: 'ಒ', 3: '್ರರ್ಜ್ಞತ್ರಕ್ಷಶ್ರ()ಃಋ', 14: 'ಔಐಆಈಊಭಙಘಧಝಢಞಓಏಅಇಉಫಱಖಥಛಠಎ', 39: 'ಣ', 42: 'ಳಶಷ|' }
        , alt: { 1: '೧೨೩೪೫೬೭೮೯೦', 12: 'ೄ', 15: 'ೖ', 27: 'ೕ' }
        , shift_alt: { 12: 'ೠ', 17: 'ೡ', 29: 'ಌ', 31: 'ೞ' }
    },
    {
        code: 'KK-KZ'
        , name: 'Kazakh'
        , normal: '("әіңғ,.үұқөһ\\йцукенгшщзхъфывапролджэячсмитьбю№'
        , shift: { 0: ')!', 6: ';:', 13: '/', 46: '?' }
    },
    {
        code: 'KM'
        , name: 'Khmer (NIDA 1.0)'
        , normal: '«១២៣៤៥៦៧៨៩០ឥឲឮឆឹេរតយុិោផៀឪាសដថងហ្កលើ់ឋខចវបនមុំ។៊'
        , shift: { 0: '»!ៗ"៛%៍័៏()៌=ឭឈឺែឬទួូីៅភឿឧាំៃឌធអះញគឡោះ៉ឍឃជេះពណំុះ៕?' }
        , alt: { 0: '‍‌@៑$€៙៚*{}x៎\\ៜ៝ឯឫឨ', 21: 'ឦឱឰឩឳ', 33: 'ឝ', 35: '៖ៈ', 41: 'ឞ', 44: ',./' }
        , shift_alt: { 1: '៱៲៳៴៵៶៷៸៹៰', 14: '᧠᧡᧢᧣᧤᧥᧦᧧᧨᧩᧪᧫᧬᧭᧮᧯᧰᧱᧲᧳᧴᧵᧶᧷᧸᧹᧺᧻᧼᧽᧾᧿' }
    },
    {
        code: 'KO-KR'
        , name: '2 Beolsik'
        , normal: '~1234567890-=\\ㅂㅈㄷㄱㅅㅛㅕㅑㅐㅔ[]ㅁㄴㅇㄹㅎㅗㅓㅏㅣ;\'ㅋㅌㅊㅍㅠㅜㅡ,./'
        , shift: { 0: '`!@#$%^&*()_+|ㅃㅉㄲㄲㅆ', 22: 'ㅒㅖ{}', 35: ':"', 44: '<>?' }
        , 'cbk': Langs.KR.charProcessor
    },
    {
        code: 'KO-KR'
        , name: '3 Beolsik'
        , normal: '~ㅎㅆㅂㅛㅠㅑㅖㅢㅜㅋ)>:ㅅㄹㅕㅐㅓㄹㄷㅁㅊㅍ(<ㅇㄴㅣㅏㅡㄴㅇㄱㅈㅂㅌㅁㄱㅔㅗㅜㅅㅎ,.ㅗ'
        , shift: { 0: '`ㄲㄺㅈㄿㄾ=""\'~;+\\ㅍㅌㄵㅀㄽ56789%/ㄷㄶㄼㄻㅒ01234"ㅊㅄㅋㄳ?-"\'', 46: '!' }
        , 'cbk': Langs.KR.charProcessor
    },
    {
        code: 'KO-KR'
        , name: 'Ru-Kor'
        , normal: 'ё1234567890-=\\йцукенгшщзхъфывапролджэячсмитьбю.'
        , shift: { 1: '!"№;%:?*()_+/', 46: ',' }
        , 'cbk':/**
 * $Id$
 *
 * Korean phonetic IME
 *
 * This software is protected by patent No.2009611147 issued on 20.02.2009 by Russian Federal Service for Intellectual Property Patents and Trademarks.
 *
 * @author Konstantin Wiolowan
 * @copyright 2007-2009 Konstantin Wiolowan <wiolowan@mail.ru>
 * @version $Rev$
 * @lastchange $Author$ $Date$
 */
        function (chr, buf) {
            var Ru2Kor = { '-': '-', 'а': 'ㅏ', 'А': 'ㅏ', 'б': 'ㅂ', 'Б': 'ㅃ', 'в': 'ㅗ', 'В': 'ㅗ', 'г': 'ㄱ', 'Г': 'ㄲ', 'д': 'ㄷ', 'Д': 'ㄸ', 'е': 'ㅔ', 'Е': 'ㅔ', 'ё': 'ㅛ', 'Ё': 'ㅕ', 'ж': 'ㅈ', 'Ж': 'ㅈ', 'з': 'ㅈ', 'З': 'ㅈ', 'и': 'ㅣ', 'И': 'ㅣ', 'й': 'ㅣ', 'Й': 'ㅣ', 'к': 'ㄱ', 'К': 'ㄲ', 'л': 'ㄹ', 'Л': 'ㄹ', 'м': 'ㅁ', 'М': 'ㅁ', 'н': 'ㄴ', 'Н': 'ㅇ', 'о': 'ㅗ', 'О': 'ㅓ', 'п': 'ㅂ', 'П': 'ㅃ', 'р': 'ㄹ', 'Р': 'ㄹ', 'с': 'ㅅ', 'С': 'ㅆ', 'т': 'ㄷ', 'Т': 'ㄸ', 'у': 'ㅜ', 'У': 'ㅜ', 'ф': 'ㅍ', 'Ф': 'ㅍ', 'х': 'ㅎ', 'Ч': 'ㅎ', 'ц': 'ㅉ', 'Ц': 'ㅉ', 'ч': 'ㅈ', 'Ч': 'ㅉ', 'ш': 'ㅅ', 'Ш': 'ㅅ', 'щ': 'ㅅ', 'Щ': 'ㅅ', 'ъ': 'ъ', 'ы': 'ㅡ', 'Ы': 'ㅡ', 'ь': 'ㅓ', 'Ь': 'ㅓ', 'э': 'ㅐ', 'Э': 'ㅐ', 'ю': 'ㅠ', 'Ю': 'ㅠ', 'я': 'ㅑ', 'Я': 'ㅑ' }
                , RuVowels = "ьЬаАеЕёЁиИйЙОоуУыЫэЭюЮяЯ"
                , Ru2KorJotVowels = "ㅕㅕㅑㅑㅖㅖㅕㅛㅣㅣㅣㅣㅕㅛㅠㅠㅡㅡㅒㅒㅠㅠㅑㅑ"
                , Korean = Langs.KR
                , CVC = Korean.parseHangul(buf)
            if (CVC == null) {
                var kor, jamo
                if ((kor = Ru2Kor[chr]) && (jamo = Korean.Jamo[kor])) {
                    var flagged = '\u0448\u0428\u0439\u0419\u0432\u0412'.indexOf(chr)
                    if (flagged >= 0) Korean.flags |= parseInt('112244'.charAt(flagged), 16)
                    if (jamo[0] & 1) {// V
                        return [String.fromCharCode(50500 + jamo[1]), 1]
                    }
                }
            } else {
                switch (chr) {
                    case '-': // -
                        Korean.flags = 0
                        return [buf, 0]
                    case '\u044a': // tv.znak
                        if (CVC && CVC[2] && CVC[2] == 4)// n->ng
                            return [String.fromCharCode(CVC[0] + CVC[1] + 21), 1]
                        else return [buf, buf && 1 || 0]
                        break
                    /*      case '\u044c': //m.znak
                                        return [buf, buf && 1 || 0]
                                        break
                    */
                    case '\u0445': // h
                        var pos = '\u3142\u3137\u3148\u3131'.indexOf(buf) // p t c k
                        if (pos != -1) return ['\u314d\u314c\u314a\u314b'.charAt(pos), 1]
                        else if (CVC[2]) switch (CVC[2]) {
                            case 1: return [String.fromCharCode(CVC[0] + CVC[1] + 24), 1] // k>kh
                            case 7: return [String.fromCharCode(CVC[0] + CVC[1] + 25), 1] // t>th
                            case 17: return [String.fromCharCode(CVC[0] + CVC[1] + 26), 1] // p>ph
                            case 22: return [String.fromCharCode(CVC[0] + CVC[1] + 23), 1] // j>ch
                            case 11: return [String.fromCharCode(CVC[0] + CVC[1] + 14), 1] // lp>lph
                        }
                        break
                    case '\u0436': // zh
                        if (buf == '\u3148' || buf == '\u3137') return ['\u3148', 1]
                        else if (CVC[2]) {
                            if (CVC[2] == 22) return [buf, 1];
                            else if (CVC[2] == 7) return [String.fromCharCode(CVC[0] + CVC[1] + 22), 1]
                        }
                        break
                    case '\u0448': case '\u0428': // sh
                        Korean.flags = 1
                        return [buf + '\u3145', 1]
                        break
                    case '\u0439': case '\u0419': // yot
                        //debugger              
                        if (CVC[1] == -1 || CVC[2]) Korean.flags = 2 //s-y, sas-y
                        break
                    case '\u0432': case '\u0412': //w
                        Korean.flags = 4
                        break
                    default:
                        if (CVC && (Korean.flags & 1 && CVC[1] == -1 || Korean.flags & 2 && CVC[2] == 0)) {//sha, rya
                            var vow
                            if ((vow = RuVowels.indexOf(chr)) != -1) {//vowel
                                Korean.flags &= ~3
                                return Korean.charProcessor(Ru2KorJotVowels.charAt(vow), Korean.CV2C[(CVC[0] - 44032) / 588], [CVC[0], -1, 0])
                            }
                        }
                }
            }
            return Korean.charProcessor(Ru2Kor[chr] || chr, buf, CVC, 1)
        }
    },
    {
        code: 'AR-KU'
        , name: 'Kurdish Arabic'
        , normal: '`١٢٣٤٥٦٧٨٩٠-=\\قوهرتییئىئۆپ[]ئاسدفگهجكل;\'زخچڤبنم,./'
        , shift: { 0: '~!@#$٪^&*()_+|ثشئى̌ڒطێوووۊ', 24: '{}اصذ', 30: 'غحژ', 34: 'ڵ:"ظ', 39: 'ضعلالا̌ء<>?' }
    },
    {
        code: 'KU'
        , name: 'Kurdish Cyrillic'
        , normal: '\'1234567890әъэqwертöуиопшщасдфгhйкльжзхчвбнм,.;'
        , shift: { 0: '"!@#$%^&*()', 44: '<>:' }
    },
    {
        code: 'KU'
        , name: 'Kurdish Latin'
        , normal: '`æîûçéêíşùú-=\\qwertyuiop[]asdfghjkl;\'zxcvbnm,./'
        , shift: { 0: '~', 11: '_+|', 24: '{}', 35: ':"', 44: '<>?' }
    },
    {
        code: 'KY-KG'
        , name: 'Kyrgyz Cyrillic'
        , normal: 'ё1234567890-=\\йцукенгшщзхъфывапролджэячсмитьбю.'
        , shift: { 1: '!"№;%:?*()_+/', 46: ',' }
        , alt: { 16: 'ү', 19: 'ң', 32: 'ө' }
    },
    {
        code: 'LA'
        , name: 'Lakhota Standard'
        , normal: '`1234567890-=\\ǧweštyuiop[]asdŋghȟkl;\'zžčvbnm,./'
        , shift: { 0: '~!@#$%^&*()_+|', 24: '{}', 32: 'Ȟ', 35: ':"', 44: '<>?' }
        , 'cbk':/**
 * $Id$
 *
 * Lakhota char processor
 *
 * This software is protected by patent No.2009611147 issued on 20.02.2009 by Russian Federal Service for Intellectual Property Patents and Trademarks.
 *
 * @author Konstantin Wiolowan
 * @copyright 2008-2009 Konstantin Wiolowan <wiolowan@mail.ru>
 * @version $Rev$
 * @lastchange $Author$ $Date$
 */
        function (chr, buf) {
            if (chr == '\u0008') { // backspace
                if (buf.length) {
                    return [buf.slice(0, -1), buf.length - 1]
                }
            } else if (/[^A-z']/.test(chr)) {
                return Langs.LA.remap[buf + chr] || [buf + chr, 0]
            } else { //non backspace
                return Langs.LA.remap[buf + chr] || [buf + chr, 1]
            }
        }
    },
    {
        code: 'LO-LAO'
        , name: 'Lao SengKeo'
        , normal: '@ຢຟໂຖຸູຄຕຈຂຊໍ\\ົໄຳພະິີຣນຍບລັຫກດເ້່າສວງຜປແອຶືທມໃຝ'
        , shift: { 0: '©໑໒໓໔໌ຼ໕໖໗໘໙ໍ່ໝົ້໐້ຳ-+ິ້ີ້ຮ່ຳຽ-/ັ້;.,:໊໋!?%', 37: '&(ຯໜຶ້ື້ໆ"$)' }
    },
    {
        code: 'ES-MX'
        , name: 'Latin American'
        , normal: '|1234567890\'¿}qwertyuiop´+asdfghjklñ{zxcvbnm,.-'
        , shift: { 0: '°!"#$%&/()=?¡]', 24: '¨*', 36: '[', 44: ';:_' }
        , alt: { 0: '¬', 11: '\\', 13: '`@', 25: '~', 36: '^' }
        , dk: { '´': 'aáeéuúiíyýoóAÁEÉUÚIÍYÝOÓ ´', '¨': 'aäeëuüiïyÿoöAÄEËUÜIÏOÖ ¨', '^': 'aâeêuûiîoôAÂEÊUÛIÎOÔ ^', '`': 'aàeèuùiìoòAÀEÈUÙIÌOÒ `' }
    },
    {
        code: 'LV'
        , name: 'Latvian (QWERTY)'
        , normal: '`1234567890-=°qwertyuiop[]asdfghjkl;\'zxcvbnm,./'
        , shift: { 0: '~!@#$%^&*()_+|', 24: '{}', 35: ':"', 44: '<>?' }
        , alt: { 0: '­ «»€', 6: '’', 11: '–', 16: 'ēŗ', 20: 'ūīõ', 26: 'āš', 30: 'ģ', 33: 'ķļ', 36: '´ž', 39: 'č', 42: 'ņ' }
        , shift_alt: { 4: '§°', 7: '±×', 11: '—', 36: '¨' }
        , dk: { '´': 'nńcćzźsśeéoóNŃCĆZŹSŚEÉOÓ ´', '¨': 'aäuüoöAÄUÜOÖ ¨', '~': 'oõOÕ ~', '°': 'zżaågġeėZŻAÅEĖ °' }
    },
    {
        code: 'LV'
        , name: 'Latvian'
        , normal: '­1234567890-fķūgjrmvnzēčžhšusildatec´ņbīkpoā,.ļ'
        , shift: { 0: '?!«»$%/&×()_', 36: '°', 44: ';:' }
        , alt: { 1: '«', 4: '€"’', 8: ':', 11: '–=', 14: 'qģ', 17: 'ŗwy', 24: '[]', 34: '€', 38: 'x', 40: 'ķ', 42: 'õ', 44: '<>' }
        , shift_alt: { 2: '@#$~^±', 11: '—;', 24: '{}', 36: '¨' }
        , dk: { '~': 'oõOÕ ~', '´': 'oósścćeénńzźOÓSŚCĆEÉNŃZŹ ´', '°': 'aåeėgġzżAÅEĖZŻ °', '¨': 'oöaäuüOÖAÄUÜ ¨' }
    },
    {
        code: 'LT'
        , name: 'Lithuanian IBM'
        , normal: '`!"/;:,.?()_+|ąžertyuiopį“asdfghjklųėzūcvbnmčšę'
        , shift: { 0: '~1234567890-=\\', 25: '”' }
        , alt: { 7: '{[]}', 16: '€' }
    },
    {
        code: 'LT'
        , name: 'Lithuanian'
        , normal: '`ąčęėįšųū90-ž\\qwertyuiop[]asdfghjkl;\'zxcvbnm,./'
        , shift: { 0: '~', 9: '()_', 13: '|', 24: '{}', 35: ':"', 44: '<>?' }
        , alt: { 1: '12345678', 12: '=', 16: '€' }
        , shift_alt: { 1: '!@#$%^&*', 12: '+' }
    },
    {
        code: 'LB-LU'
        , name: 'Luxembourgish '
        , normal: '§1234567890\'^$qwertzuiopè¨asdfghjkléàyxcvbnm,.-'
        , shift: { 0: '°+"*ç%&/()=?`£', 24: 'ü!', 35: 'öä', 44: ';:_' }
        , alt: { 1: '¦@#°§¬|¢', 11: '´~}', 16: '€', 24: '[]', 36: '{' }
        , dk: { '´': 'yýaáeéuúiíoóYÝAÁEÉUÚIÍOÓ ´', '^': 'aâeêuûiîoôAÂEÊUÛIÎOÔ ^', '`': 'aàeèuùiìoòAÀEÈUÙIÌOÒ `', '~': 'nñaãoõNÑAÃOÕ ~', '¨': 'yÿaäeëuüiïoöAÄEËUÜIÏOÖ "' }
    },
    {
        code: 'MK'
        , name: 'Macedonian'
        , normal: '`1234567890-=жљњертѕуиопшѓасдфгхјклчќзџцвбнм,./'
        , shift: { 0: '~!„“’%‘&*()_+', 44: ';:?' }
        , alt: { 16: '€', 24: 'Ђђ', 29: '[]', 35: 'Ћћ', 40: '@{}§' }
    },
    {
        code: 'ML-IN'
        , name: 'Malayalam'
        , normal: 'ൊ1234567890-ൃൌൈാീൂബഹഗദജഡോേ്ിുപരകതചടെംമനവലസ,.യ'
        , shift: { 0: 'ഒ', 3: '്ര', 7: 'ക്ഷ', 9: '()ഃഋ', 14: 'ഔഐആഈഊഭങഘധഝഢഞഓഏഅഇഉഫറഖഥഛഠഎ', 39: 'ണ', 41: 'ഴളശഷ' }
        , alt: { 1: '൧൨൩൪൫൬൭൮൯൦', 14: 'ൗ' }
        , shift_alt: { 12: 'ൠ', 17: 'ൡ', 28: 'ഌ' }
    },
    {
        code: 'MT'
        , name: 'Maltese 47-key'
        , normal: 'ċ1234567890-=żqwertyuiopġħasdfghjkl;\'zxcvbnm,./'
        , shift: { 1: '!@€$%^&*()_+', 35: ':"', 44: '<>?' }
        , alt: { 0: '`', 3: '£', 13: '\\', 16: 'è', 20: 'ùìò', 24: '[]à' }
        , shift_alt: { 0: '~', 13: '|', 24: '{}' }
    },
    {
        code: 'MT'
        , name: 'Maltese 48-key'
        , normal: 'ċ1234567890-=#qwertyuiopġħasdfghjkl;\'zxcvbnm,./'
        , shift: { 1: '!"€$%^&*()_+~', 35: ':@', 44: '<>?' }
        , alt: { 0: '`', 3: '£', 16: 'è', 20: 'ùìò', 24: '[]à' }
        , shift_alt: { 0: '¬', 24: '{}' }
    },
    {
        code: 'MI-NZ'
        , name: 'Maori-Dvorak (Two-Handed)'
        , normal: '`1234567890[]\\\',.pyfgcrl/=aoeuidhtns-;qjkxbmwvz'
        , shift: { 0: '~!@#$%^&*(){}|"<>', 24: '?+', 36: '_:' }
        , dk: { '`': 'aāeēuūiīoō``AĀEĒUŪIĪOŌ ~' }
    },
    {
        code: 'MI-NZ'
        , name: 'Maori'
        , normal: '`1234567890-=\\qwertyuiop[]asdfghjkl;\'zxcvbnm,./'
        , shift: { 0: '~!@#$%^&*()_+|', 24: '{}', 35: ':"', 44: '<>?' }
        , dk: { '`': 'aāeēuūiīoō``AĀEĒUŪIĪOŌ ~' }
    },
    {
        code: 'MR-IN'
        , name: 'Marathi'
        , normal: '१२३४५६७८९०-ृॉौैाीूबहगदजड़ोे्िुपरकतचटंमनवलस,.य'
        , shift: { 1: 'ऍॅ्रर्ज्ञत्रक्षश्र()ःऋऑऔऐआईऊभङघधझढञओएअइउफऱखथछठ', 38: 'ँण', 42: 'ळशष।य़' }
        , alt: { 0: '`1234567890', 12: '=\\', 24: '[]', 35: ';\'', 46: '/' }
        , shift_alt: { 0: '~!@#$%^&*()_+|', 24: '{}', 35: ':"ऽॐ', 44: '<>?' }
    },
    {
        code: 'MN'
        , name: 'Mongolian Cyrillic'
        , normal: '=№-"₮:._,%?ещ\\фцужэнгшүзкъйыбөахролдпячёсмитьвю'
        , shift: { 0: '+1234567890', 13: '|' }
    },
    {
        code: 'MN'
        , name: 'Mongolian Cyrillic (QWERTY)'
        , normal: '=!ыёү:;[]()шщ\\өеэртюуиопяъасдфгхжклйьзчцвбнм,./'
        , shift: { 0: '+№', 5: '-*&₮_=', 13: '|', 44: '<>?' }
    },
    {
        code: 'NE-NP'
        , name: 'Nepali '
        , normal: 'ञज्ञघङझछटठडढण(.्रत्रधभचतथगषयउृेबकमानजवपिसुशहअखदलफ,।र'
        , shift: { 0: 'ञ्१२३४५६७८९०)ं्ोध्भ्च्त्थ्ग्क्षइएर्ैब्क्म्ँन्ज्व्प्ीस्ूश्ह्ऋख्द्ल्ः?श्ररू' }
        , alt: { 1: '1234567890', 12: '+', 23: 'ऊ', 25: 'औ', 39: 'आ' }
    },
    {
        code: 'SE-NO'
        , name: 'Norwegian with Sami'
        , normal: '|1234567890+\\\'qwertyuiopå¨asdfghjkløæzxcvbnm,.-'
        , shift: { 0: '§!"#¤%&/()=?`*', 25: '^', 44: ';:_' }
        , alt: { 2: '@£$€', 7: '{[]}', 12: '´', 14: 'â', 16: '€', 18: 'ŧ', 21: 'ïõ', 25: '~ášđǥǧȟ', 33: 'ǩ', 35: 'öäž', 39: 'čǯʒŋµ' }
        , dk: { '`': 'aàwẁeèuùiìyỳoòAÀWẀEÈUÙIÌYỲOÒ `', '´': 'nńcćzźaáøǿæǽsślĺwẃeérŕåǻuúiíyýoóNŃCĆZŹAÁØǾÆǼSŚLĹWẂEÉRŔÅǺUÚIÍYÝOÓ ´', '¨': 'aäwẅeëuüiïyÿoöAÄWẄEËUÜIÏYŸOÖ ¨', '^': 'cĉaâhĥjĵgĝsŝwŵeêuûiîyŷoôCĈAÂHĤJĴGĜSŜWŴEÊUÛIÎYŶOÔ ^', '~': 'nñaãuũiĩoõNÑAÃUŨIĨOÕ ~' }
    },
    {
        code: 'NB-NO'
        , name: 'Norwegian'
        , normal: '|1234567890+\\\'qwertyuiopå¨asdfghjkløæzxcvbnm,.-'
        , shift: { 0: '§!"#¤%&/()=?`*', 25: '^', 44: ';:_' }
        , alt: { 2: '@£$€', 7: '{[]}', 12: '´', 16: '€', 25: '~', 43: 'µ' }
        , dk: { '`': 'aàeèuùiìoòAÀEÈUÙIÌOÒ `', '´': 'aáeéuúiíyýoóAÁEÉUÚIÍYÝOÓ ´', '¨': 'aäeëuüiïyÿoöAÄEËUÜIÏOÖ ¨', '^': 'aâeêuûiîoôAÂEÊUÛIÎOÔ ^', '~': 'nñaãoõNÑAÃOÕ ~' }
    },
    {
        code: 'IR-ANCIENT'
        , name: 'Ogham'
        , normal: 'ᚕᚖᚗᚘᚙ ᚉᚍᚓᚏᚈᚒᚔᚑᚚᚐᚄᚇᚃᚌᚆᚂᚎᚙᚉᚁᚅᚋ᚛᚜'
    },
    {
        code: 'AR-EG'
        , name: 'Pashto-FSI'
        , normal: 'ﷲ١٢٣٤٥٦٧٨٩٠­=؛قويرتېعئوپطصاسدفږهجکل;\'زخچځبنم،./'
        , shift: { 0: 'ة![]﴾٪^﴿*()-+ۀؤىړټ', 20: 'غۍۋ­ظضآشډﭪګحژگﻻ:"ذښثڅﱣڼً«»؟' }
        , alt: { 0: 'ّﱣﱠﱢﱟﱡﱞٌُُْٰٔإأآٱًٍَِﻻـ' }
    },
    {
        code: 'PL'
        , name: 'Polish (214)'
        , normal: '˛1234567890+\'óqwertzuiopżśasdfghjklłąyxcvbnm,.-'
        , shift: { 0: '·!"#¤%&/()=?*ź', 24: 'ńć', 36: 'ę', 44: ';:_' }
        , alt: { 1: '~ˇ^˘°˛`·´˝¨¸', 14: '\\¦', 20: '€', 24: '÷×', 27: 'đĐ', 35: '$ß', 40: '@{}§<>' }
        , dk: { 'ˇ': 'nňcčdďsšeěrřtťzžNŇCČDĎSŠEĚRŘTŤZŽ ˇ', '^': 'aâiîoôAÂIÎOÔ ^', '˘': 'aăAĂ ˘', '°': 'uůUŮ °', '˛': 'aąeęAĄEĘ ˛', '·': 'zżZŻ ·', '´': 'nńcćyýaásślĺeérŕuúiízźoóNŃCĆYÝAÁSŚLĹEÉRŔUÚIÍZŹOÓ ´', '˝': 'uűoőUŰOŐ ˝', '¨': 'aäeëuüoöAÄEËUÜOÖ ¨', '¸': 'cçsştţCÇSŞTŢ ¸' }
    },
    {
        code: 'PL'
        , name: 'Polish (Programmers)'
        , normal: '`1234567890-=\\qwertyuiop[]asdfghjkl;\'zxcvbnm,./'
        , shift: { 0: '~!@#$%^&*()_+|', 24: '{}', 35: ':"', 44: '<>?' }
        , alt: { 16: 'ę', 20: '€', 22: 'ó', 26: 'ąś', 34: 'ł', 37: 'żźć', 42: 'ń' }
        , dk: { '~': 'nńcćxźzżaąsślłeęoóNŃCĆXŹZŻAĄSŚLŁEĘOÓ ~' }
    },
    {
        code: 'PT-BR'
        , name: 'Portuguese (Brazilian ABNT2)'
        , normal: '\'1234567890-=]qwertyuiop´[asdfghjklç~zxcvbnm,.;'
        , shift: { 0: '"!@#$%¨&*()_+}', 24: '`{', 36: '^', 44: '<>:' }
        , alt: { 1: '¹²³£¢¬', 12: '§º/?°', 25: 'ª', 39: '₢' }
        , dk: { '¨': 'aäeëuüiïyÿoöAÄEËUÜIÏOÖ ¨', '´': 'aáeéuúiíyýoóAÁEÉUÚIÍYÝOÓ ´', '`': 'aàeèuùiìoòAÀEÈUÙIÌOÒ `', '~': 'nñaãoõNÑAÃOÕ ~', '^': 'aâeêuûiîoôAÂEÊUÛIÎOÔ ^' }
    },
    {
        code: 'PT-BR'
        , name: 'Portuguese (Brazilian ABNT)'
        , normal: '\'1234567890-=]qwertyuiop´[asdfghjklç~zxcvbnm,.;'
        , shift: { 0: '"!@#$%¨&*()_+}', 24: '`{', 36: '^', 44: '<>:' }
        , alt: { 1: '¹²³£¢¬', 12: '§º/?°', 25: 'ª', 39: '₢' }
        , dk: { '¨': 'aäeëuüiïyÿoöAÄEËUÜIÏOÖ ¨', '´': 'aáeéuúiíyýoóAÁEÉUÚIÍYÝOÓ ´', '`': 'aàeèuùiìoòAÀEÈUÙIÌOÒ `', '~': 'nñaãoõNÑAÃOÕ ~', '^': 'aâeêuûiîoôAÂEÊUÛIÎOÔ ^' }
    },
    {
        code: 'PT'
        , name: 'Portuguese'
        , normal: '\\1234567890\'«~qwertyuiop+´asdfghjklçºzxcvbnm,.-'
        , shift: { 0: '|!"#$%&/()=?»^', 24: '*`', 36: 'ª', 44: ';:_' }
        , alt: { 2: '@£§€', 7: '{[]}', 16: '€', 24: '¨]' }
        , dk: { '¨': 'aäeëuüiïyÿoöAÄEËUÜIÏOÖ ¨', '´': 'aáeéuúiíyýoóAÁEÉUÚIÍYÝOÓ ´', '`': 'aàeèuùiìoòAÀEÈUÙIÌOÒ `', '~': 'nñaãoõNÑAÃOÕ ~', '^': 'aâeêuûiîoôAÂEÊUÛIÎOÔ ^' }
    },
    {
        code: 'PA-IN'
        , name: 'Punjabi'
        , normal: '1234567890-ੌੈਾੀੂਬਹਗਦਜਡ਼ੋੇ੍ਿੁਪਰਕਤਚਟੰਮਨਵਲਸ,.ਯ'
        , shift: { 0: '੍ਹ੍ਵ੍ਯ੍ਰੱ', 9: '()', 14: 'ਔਐਆਈਊਭਙਘਧਝਢਞਓਏਅਇਉਫ', 33: 'ਖਥਛਠ', 38: 'ਂਣ', 41: 'ੲਲ਼ਸ਼', 45: '।' }
        , alt: { 1: '੧੨੩੪੫੬੭੮੯੦', 21: 'ਗ਼', 23: 'ਜ਼ੜ', 31: 'ਫ਼', 33: 'ਖ਼', 41: 'ੳ', 45: '॥' }
        , shift_alt: { 38: 'ੴ' }
    },
    {
        code: 'RO'
        , name: 'Romanian'
        , normal: ']1234567890+\'âqwertzuiopăîasdfghjklşţyxcvbnm,.-'
        , shift: { 0: '[!"#¤%&/()=?*', 44: ';:_' }
        , alt: { 1: '~ˇ^˘°˛`·´˝¨¸', 14: '\\|', 24: '÷×', 27: 'đĐ', 33: 'łŁ$ß', 40: '@{}§<>' }
    },
    {
        code: 'FY-ANCIENT'
        , name: 'Anglo-Frisian'
        , normal: 'ᛢᚫᛇᛠᛥᚸᚺᛤᛡᛟ᛭ᛩᚹᛖᚱᛏᚣᚢᛁᚩᛈᚪᛋᛞᚠᚷᚻᛄᛣᛚᛉᛪᚳᛝᛒᚾᛗ᛬᛫ᚦ'
        , shift: { 18: 'ᛥ', 30: 'ᚸᚺ', 33: 'ᛤ', 39: 'ᛣ', 42: 'ᛝ' }
    },
    {
        code: 'DE-ANCIENT'
        , name: 'Elder Futhark'
        , normal: '᛭ᛇᚹᛖᚱᛏᚺᚢᛁᛟᛈᚨᛊᛞᚠᚷᚻᛃᚲᛚᛉᛜᛝᛒᚾᛗ᛬᛫ᚦ'
    },
    {
        code: 'DA-ANCIENT'
        , name: 'Younger Futhark'
        , normal: 'ᛮᛯᛰ᛭ᚬᚥᛂᚱᛏᛦᚢᛁᚮᛔᚧᛅᛋᛑᚠᚵᚼᛨᚴᛚᛎᛪᛍᚡᛒᚾᛘ᛫ᚦ'
        , shift: { 14: 'ᚭ', 18: 'ᛐᛧᚤ', 26: 'ᛆᛌ', 31: 'ᚽ', 41: 'ᛓᚿᛙ' }
    },
    {
        code: 'RU'
        , name: 'Russian_Qwerty'
        , normal: 'ё1234567890-=\\йцукенгшщзхъфывапролджэячсмитьбю.'
        , shift: { 1: '!"№;%:?*()_+/', 46: ',' }
        , alt: { 0: '`', 14: 'QWERTYUIOP[]ASDFGHJKL;\'ZXCVBNM,.' }
    },
    {
        code: 'RU'
        , name: 'Russian ЯЖЕРТЫ'
        , normal: 'ю1234567890-=эяжертыуиопшщасдфгчйкл;\'зхцвбнм,./'
        , shift: { 1: '!ъЪ$%ёЁ*()_+', 35: ':"', 44: '<>?' }
    },
    {
        code: 'RU'
        , name: 'Russian Translit'
        , normal: 'ё1234567890-ъэяшертыуиопющасдфгчйкльжзхцвбнм;.='
        , shift: { 1: '№!/":«»?()_', 44: '\',%' }
    },
    {
        code: 'RU'
        , name: 'Russian (Typewriter)'
        , normal: '|№-/":,._?%!;)йцукенгшщзхъфывапролджэячсмитьбюё'
        , shift: { 0: '+1234567890=\\(' }
    },
    {
        code: 'RU'
        , name: 'Russian'
        , normal: 'ё1234567890-=\\йцукенгшщзхъфывапролджэячсмитьбю.'
        , shift: { 1: '!"№;%:?*()_+/', 46: ',' }
    },
    {
        code: 'SE'
        , name: 'Sami Extended Finland-Sweden'
        , normal: '§1234567890+´đášertŧuiopåŋasdfghjklöäzčcvbnm,.-'
        , shift: { 0: '½!"#¤%&/()=?`', 44: ';:_' }
        , alt: { 0: '|', 2: '@£$€', 7: '{[]}\\', 13: '\'qw€', 19: 'y', 21: 'ïõ', 24: '¨~â', 30: 'ǧǥ', 33: 'ǩ', 35: 'øæʒx', 43: 'µ<>' }
        , shift_alt: { 13: '*', 24: '^ˇ' }
        , dk: { '´': 'nńcćzźaásślĺeérŕåǻuúiíoóNŃCĆZŹAÁSŚLĹEÉRŔÅǺUÚIÍOÓøǿæǽwẃyýØǾÆǼWẂYÝ ´', '`': 'aàeèuùiìoòAÀEÈUÙIÌOÒwẁyỳWẀYỲ `', '¨': 'aäeëuüiïoöAÄEËUÜIÏOÖwẅyÿWẄYŸ ¨', '^': 'cĉaâhĥjĵgĝsŝeêuûiîoôCĈAÂHĤJĴGĜSŜEÊUÛIÎOÔwŵyŷWŴYŶ ^', '~': 'nñaãuũiĩoõNÑAÃUŨIĨOÕ ~', 'ˇ': 'nňcčzžhȟgǧdďsšlľkǩeěrřtťNŇCČZŽHȞGǦDĎSŠLĽKǨEĚRŘTŤʒǯƷǮ ˇ' }
    },
    {
        code: 'SE-NO'
        , name: 'Sami Extended Norway'
        , normal: '|1234567890+\\đášertŧuiopåŋasdfghjkløæzčcvbnm,.-'
        , shift: { 0: '§!"#¤%&/()=?`', 44: ';:_' }
        , alt: { 2: '@£$€', 7: '{[]}', 12: '´\'qw€', 19: 'y', 21: 'ïõ', 24: '¨~â', 30: 'ǧǥ', 33: 'ǩ', 35: 'öäʒx', 43: 'µ<>' }
        , shift_alt: { 13: '*', 24: '^ˇ' }
        , dk: { '`': 'aàeèuùiìoòAÀEÈUÙIÌOÒwẁyỳWẀYỲ `', '´': 'nńcćzźaáøǿæǽsślĺeérŕåǻuúiíoóNŃCĆZŹAÁØǾÆǼSŚLĹEÉRŔÅǺUÚIÍOÓwẃyýWẂYÝ ´', '¨': 'aäeëuüiïoöAÄEËUÜIÏOÖwẅyÿWẄYŸ ¨', '^': 'cĉaâhĥjĵgĝsŝeêuûiîoôCĈAÂHĤJĴGĜSŜEÊUÛIÎOÔwŵyŷWŴYŶ ^', '~': 'nñaãuũiĩoõNÑAÃUŨIĨOÕ ~', 'ˇ': 'nňcčzžhȟgǧdďsšlľkǩeěrřtťNŇCČZŽHȞGǦDĎSŠLĽKǨEĚRŘTŤʒǯƷǮ ˇ' }
    },
    {
        code: 'SA-IN'
        , name: 'Sanskrit Romanized'
        , normal: 'आ१२३४५६७८९०-=।टडेरतयुिोपऋऌअसदउगहजकल.ऽशइचवबनमएओ्'
        , shift: { 0: 'ॐ॒॑!?\'"<>()_+॥ठढैृथञूीौफॠॡाषधऊघःझखॢ,॰ङईछळभणंऐऔ‍' }
        , alt: { 0: '॔', 8: '*[]', 13: '\\', 15: 'ड़ॅॄ', 19: 'य़', 22: 'ॉफ़', 29: '÷ग़ज़क़ॣ:़', 38: '×', 40: 'ऴ', 42: 'ऩँऍऑ‌' }
        , shift_alt: { 0: '॓', 9: '{}', 13: '/', 15: 'ढ़ॆऱ', 22: 'ॊ', 33: 'ख़', 35: ';◌', 43: 'ऎऒ​' }
    },
    {
        code: 'SR-SP'
        , name: 'Serbian (Cyrillic)'
        , normal: '`1234567890\'+жљњертзуиопшђасдфгхјклчћѕџцвбнм,.-'
        , shift: { 0: '~!"#$%&/()=?*', 44: ';:_' }
        , alt: { 16: '€', 44: '<>' }
        , dk: { '\'': 'гѓкќГЃКЌ \'' }
    },
    {
        code: 'SR-SP'
        , name: 'Serbian (Latin)'
        , normal: '‚1234567890\'+žqwertzuiopšđasdfghjklčćyxcvbnm,.-'
        , shift: { 0: '~!"#$%&/()=?*', 44: ';:_' }
        , alt: { 1: '~ˇ^˘°˛`˙´˝¨¸¤\\|€', 24: '÷×', 29: '[]', 33: 'łŁ', 36: 'ß', 40: '@{}§<>' }
        , dk: { 'ˇ': 'nňcčdďsšlľeěrřtťzžNŇCČDĎSŠLĽEĚRŘTŤZŽ ˇ', '^': 'aâiîoôAÂIÎOÔ ^', '˘': 'aăAĂ ˘', '°': 'uůUŮ °', '˛': 'aąeęAĄEĘ ˛', '˙': 'zżZŻ ˙', '´': 'nńcćyýaásślĺeérŕuúiízźoóNŃCĆYÝAÁSŚLĹEÉRŔUÚIÍZŹOÓ ´', '˝': 'uűoőUŰOŐ ˝', '¨': 'aäeëuüoöAÄEËUÜOÖ ¨', '¸': 'cçsşCÇSŞ ¸', '‚': 'cçsşCÇSŞ ‚' }
    },
    {
        code: 'SK'
        , name: 'Slovak (QWERTY)'
        , normal: ';+ľščťžýáíé=´ňqwertyuiopúäasdfghjklô§zxcvbnm,.-'
        , shift: { 0: '°1234567890%ˇ)', 24: '/(', 35: '"!', 44: '?:_' }
        , alt: { 1: '~ˇ^˘°˛`˙´˝¨¸¤\\|€', 23: '\'÷×', 27: 'đĐ[]', 33: 'łŁ$ß>#&@{}', 44: '<>*' }
        , dk: { 'ˇ': 'nňcčzždďsšlľeěrřtťNŇCČZŽDĎSŠLĽEĚRŘTŤ ˇ', '^': 'aâiîoôAÂIÎOÔ ^', '˘': 'aăAĂ ˘', '°': 'uůUŮ °', '˛': 'aąeęAĄEĘ ˛', '˙': 'zżZŻ ˙', '´': 'nńcćzźaásślĺeérŕuúiíyýoóNŃCĆZŹAÁSŚLĹEÉRŔUÚIÍYÝOÓ ´', '˝': 'uűoőUŰOŐ ˝', '¨': 'aäeëuüoöAÄEËUÜOÖ ¨', '¸': 'cçsştţCÇSŞTŢ ¸' }
    },
    {
        code: 'SK'
        , name: 'Slovak'
        , normal: ';+ľščťžýáíé=´ňqwertzuiopúäasdfghjklô§yxcvbnm,.-'
        , shift: { 0: '°1234567890%ˇ)', 24: '/(', 35: '"!', 44: '?:_' }
        , alt: { 1: '~ˇ^˘°˛`˙´˝¨¸¤\\|€', 23: '\'÷×', 27: 'đĐ[]', 33: 'łŁ$ß>#&@{}', 44: '<>*' }
        , dk: { 'ˇ': 'nňcčdďsšlľeěrřtťzžNŇCČDĎSŠLĽEĚRŘTŤZŽ ˇ', '^': 'aâiîoôAÂIÎOÔ ^', '˘': 'aăAĂ ˘', '°': 'uůUŮ °', '˛': 'aąeęAĄEĘ ˛', '˙': 'zżZŻ ·', '´': 'nńcćyýaásślĺeérŕuúiízźoóNŃCĆYÝAÁSŚLĹEÉRŔUÚIÍZŹOÓ ´', '˝': 'uűoőUŰOŐ ˝', '¨': 'aäuüoöAÄUÜOÖ ¨', '¸': 'cçsştţCÇSŞTŢ ¸' }
    },
    {
        code: 'SL-SI'
        , name: 'Slovenian'
        , normal: '¸1234567890\'+žqwertzuiopšđasdfghjklčćyxcvbnm,.-'
        , shift: { 0: '¨!"#$%&/()=?*', 44: ';:_' }
        , alt: { 1: '~ˇ^˘°˛`˙´˝¨¸¤\\|€', 24: '÷×', 29: '[]', 33: 'łŁ', 36: 'ß', 40: '@{}§<>' }
        , dk: { 'ˇ': 'nňcčdďsšlľeěrřtťzžNŇCČDĎSŠLĽEĚRŘTŤZŽ ˇ', '^': 'aâiîoôAÂIÎOÔ ^', '˘': 'aăAĂ ˘', '°': 'uůUŮ °', '˛': 'aąeęAĄEĘ ˛', '˙': 'zżZŻ ˙', '´': 'nńcćyýaásślĺeérŕuúiízźoóNŃCĆYÝAÁSŚLĹEÉRŔUÚIÍZŹOÓ ´', '˝': 'uűoőUŰOŐ ˝', '¨': 'aäeëuüoöAÄEËUÜOÖ ¨', '¸': 'cçsşCÇSŞ ¸' }
    },
    {
        code: 'ES'
        , name: 'Spanish Variation'
        , normal: '\'1234567890-¨´qwertyuiop÷`asdfghjklñçzxcvbnm,.='
        , shift: { 0: '·ª"/()¡!¿?₧+', 24: '×', 44: ';:%' }
        , alt: { 0: '\\|@#¼½¬_#§\\*~}', 16: '€', 24: '[]$&@[]|£±', 35: '~{', 45: '^' }
        , dk: { '¨': 'aäeëuüiïyÿoöAÄEËUÜIÏOÖ ¨', '~': 'nñaãoõNÑAÃOÕ ~', '`': 'aàeèuùiìoòAÀEÈUÙIÌOÒ `', '´': 'aáeéuúiíyýoóAÁEÉUÚIÍOÓ ´', '^': 'aâeêuûiîoôAÂEÊUÛIÎOÔ ^' }
    },
    {
        code: 'ES'
        , name: 'Spanish'
        , normal: 'º1234567890\'¡çqwertyuiop`+asdfghjklñ´zxcvbnm,.-'
        , shift: { 0: 'ª!"·$%&/()=?¿', 24: '^*', 36: '¨', 44: ';:_' }
        , alt: { 0: '\\|@#~€¬', 13: '}', 16: '€', 24: '[]', 36: '{' }
        , dk: { '~': 'nñaãoõNÑAÃOÕ ~', '`': 'aàeèuùiìoòAÀEÈUÙIÌOÒ `', '^': 'aâeêuûiîoôAÂEÊUÛIÎOÔ ^', '´': 'aáeéuúiíyýoóAÁEÉUÚIÍYÝOÓ ´', '¨': 'aäeëuüiïyÿoöAÄEËUÜIÏOÖ ¨' }
    },
    {
        code: 'SE'
        , name: 'Swedish with Sami'
        , normal: '§1234567890+´\'qwertyuiopå¨asdfghjklöäzxcvbnm,.-'
        , shift: { 0: '½!"#¤%&/()=?`*', 25: '^', 44: ';:_' }
        , alt: { 2: '@£$€', 7: '{[]}\\', 14: 'â', 16: '€', 18: 'ŧ', 21: 'ïõ', 25: '~ášđǥǧȟ', 33: 'ǩ', 35: 'øæž', 39: 'čǯʒŋµ' }
        , dk: { '´': 'nńcćzźaásślĺwẃeérŕåǻuúiíyýoóNŃCĆZŹAÁSŚLĹWẂEÉRŔÅǺUÚIÍYÝOÓøǿæǽØǾÆǼ ´', '`': 'aàwẁeèuùiìyỳoòAÀWẀEÈUÙIÌYỲOÒ `', '¨': 'aäwẅeëuüiïyÿoöAÄWẄEËUÜIÏYŸOÖ ¨', '^': 'cĉaâhĥjĵgĝsŝwŵeêuûiîyŷoôCĈAÂHĤJĴGĜSŜWŴEÊUÛIÎYŶOÔ ^', '~': 'nñaãuũiĩoõNÑAÃUŨIĨOÕ ~' }
    },
    {
        code: 'SV-SE'
        , name: 'Swedish'
        , normal: '§1234567890+´\'qwertyuiopå¨asdfghjklöäzxcvbnm,.-'
        , shift: { 0: '½!"#¤%&/()=?`*', 25: '^', 44: ';:_' }
        , alt: { 2: '@£$€', 7: '{[]}\\', 16: '€', 25: '~', 43: 'µ' }
        , dk: { '´': 'aáeéuúiíyýoóAÁEÉUÚIÍYÝOÓ ´', '`': 'aàeèuùiìoòAÀEÈUÙIÌOÒ `', '¨': 'aäeëuüiïyÿoöAÄEËUÜIÏOÖ ¨', '^': 'aâeêuûiîoôAÂEÊUÛIÎOÔ ^', '~': 'nñaãoõNÑAÃOÕ ~' }
    },
    {
        code: 'FR-CH'
        , name: 'Swiss French'
        , normal: '§1234567890\'^$qwertzuiopè¨asdfghjkléàyxcvbnm,.-'
        , shift: { 0: '°+"*ç%&/()=?`£', 24: 'ü!', 35: 'öä', 44: ';:_' }
        , alt: { 1: '¦@#°§¬|¢', 11: '´~}', 16: '€', 24: '[]', 36: '{' }
        , dk: { '´': 'yýaáeéuúiíoóYÝAÁEÉUÚIÍOÓ ´', '^': 'aâeêuûiîoôAÂEÊUÛIÎOÔ ^', '`': 'aàeèuùiìoòAÀEÈUÙIÌOÒ `', '~': 'nñaãoõNÑAÃOÕ ~', '¨': 'yÿaäeëuüiïoöAÄEËUÜIÏOÖ "' }
    },
    {
        code: 'DE-CH'
        , name: 'Swiss German'
        , normal: '§1234567890\'^$qwertzuiopü¨asdfghjklöäyxcvbnm,.-'
        , shift: { 0: '°+"*ç%&/()=?`£', 24: 'è!', 35: 'éà', 44: ';:_' }
        , alt: { 1: '¦@#°§¬|¢', 11: '´~}', 16: '€', 24: '[]', 36: '{' }
        , shift_caps: { 24: 'È', 35: 'ÉÀ' }
        , dk: { '´': 'yýaáeéuúiíoóYÝAÁEÉUÚIÍOÓ ´', '^': 'aâeêuûiîoôAÂEÊUÛIÎOÔ ^', '`': 'aàeèuùiìoòAÀEÈUÙIÌOÒ `', '~': 'nñaãoõNÑAÃOÕ ~', '¨': 'yÿaäeëuüiïoöAÄEËUÜIÏOÖ ¨' }
    },
    {
        code: 'SYR-SY'
        , name: 'Syriac Phonetic'
        , normal: '܏1234567890-=܆ܩܘܖܪܬܝܜܥܧܦ][ܐܣܕܔܓܗܛܟܠܚܞܙܨܤܫܒܢܡ܀.܇'
        , shift: { 0: '̮!̥̊݉♰♱܊»)(«+:ܑܱܴܷܻܾܰܳܶܺܽ݀݁̈̄̇̃݊ـ̤̱̣̰ܸܼܹ݂ܲܵܿ،؛؟' }
        , alt: { 0: 'ّ܁܂܃܄܅܈܉܋܌܍┌┐', 14: 'ًٌَُ̭ٓٔ݇݃݅', 26: 'ٍِٖءٰٕ݈݄݆', 38: 'ْ', 40: '‍‌‎‏' }
    },
    {
        code: 'SYR-SY'
        , name: 'Syriac'
        , normal: '܏1234567890-=܆ܔܨܖܩܦܜܥܗܞܚܓܕܫܣܝܒܠܐܬܢܡܟܛ][ܤܪܧ܀.ܘܙ܇'
        , shift: { 0: '̮!̥̊݉♰♱܊»)(«+:ܑܱܴܷܻܾܰܳܶܺܽ݀݁̈̄̇̃݊ـ̤̱̣̰ܸܼܹ݂ܲܵܿ،؛؟' }
        , alt: { 0: 'ّ܁܂܃܄܅܈܉܋܌܍┌┐', 14: 'ًٌَُ̭ٓٔ݇݃݅', 26: 'ٍِٖءٰٕ݈݄݆', 38: 'ْ', 40: '‍‌‎‏' }
    },
    {
        code: 'TL'
        , name: 'Tagalog - Tausug'
        , normal: 'ñ1234567890-=ãqwertyuiop[]asdfghjkl;\'zxcvbnm,./'
        , shift: { 1: '!@#$%^&*()_+', 24: '{}', 35: ':"', 44: '<>?' }
    },
    {
        code: 'TA-IN'
        , name: 'Tamil'
        , normal: 'ொ1234567890-ௌைாீூபஹகதஜடஞோே்ிுபரகதசடெமநவலஸ,.ய'
        , shift: { 0: 'ஒ', 6: 'த்ரக்ஷஷ்ர', 11: 'ஃ', 14: 'ஔஐஆஈஊ', 20: 'ங', 23: 'ச', 26: 'ஓஏஅஇஉ', 32: 'ற', 37: 'எ', 39: 'ணனழளஷஷஸ்ரீ' }
        , alt: { 1: '௧௨௩௪௫௬௭௮௯௰௱௲' }
    },
    {
        code: 'TT-RU'
        , name: 'Tatar'
        , normal: 'һ1234567890-=\\йөукенгшәзхүфывапролдңэячсмитҗбю.'
        , shift: { 1: '!"№;%:?*()_+/', 46: ',' }
        , alt: { 0: 'ё', 2: '@#$', 7: '[]{}', 15: 'ц', 22: 'щ', 25: 'ъ', 35: 'ж\'', 43: 'ь<>' }
    },
    {
        code: 'TE-IN'
        , name: 'Telugu'
        , normal: 'ొ1234567890-ృౌైాీూబహగదజడోే్ిుపరకతచటెంమనవలస,.య'
        , shift: { 0: 'ఒ', 3: '్ర', 5: 'జ్ఞత్రక్షశ్ర()ఃఋ', 14: 'ఔఐఆఈఊభఙఘధఝఢఞఓఏఅఇఉఫఱఖథఛఠఎఁణ', 42: 'ళశష' }
        , alt: { 1: '౧౨౩౪౫౬౭౮౯౦', 12: 'ౄ', 15: 'ౖ', 27: 'ౕ' }
        , shift_alt: { 12: 'ౠ', 17: 'ౡ', 29: 'ఌ' }
    },
    {
        code: 'TH'
        , name: 'Thai Kedmanee'
        , normal: '_ๅ/-ภถุึคตจขชฃๆไำพะัีรนยบลฟหกดเ้่าสวงผปแอิืทมใฝ'
        , shift: { 0: '%+๑๒๓๔ู฿๕๖๗๘๙ฅ๐"ฎฑธํ๊ณฯญฐ,ฤฆฏโฌ็๋ษศซ.()ฉฮฺ์?ฒฬฦ' }
    },
    {
        code: 'TH'
        , name: 'Thai Pattachote'
        , normal: '_=๒๓๔๕ู๗๘๙๐๑๖็ตยอร่ดมวแใฌ้ทงกัีานเไขบปลหิคสะจพ'
        , shift: { 0: '฿+"/,?ุ_.()-%ํ๊ฤๆญษึฝซถฒฯฦ๋ธำณ์ืผชโฆฑฎฏฐภัศฮฟฉฬ' }
    },
    {
        code: 'TH'
        , name: 'Thai'
        , normal: '_ๅ/-ภถุึคตจขชฃๆไำพะัีรนยบลฟหกดเ้่าสวงผปแอิืทมใฝ'
        , shift: { 0: '%+๑๒๓๔ู฿๕๖๗๘๙ฅ๐"ฎฑธํ๊ณฯญฐมฤฆฏโฌ็๋ษศซใ()ฉฮฺ์?ฒฬฦ' }
    },
    {
        code: 'TR'
        , name: 'Turkish F'
        , normal: '+1234567890/-xfgğıodrnhpqwuieaütkmlyşjövcçzsb.,'
        , shift: { 0: '*!"^$%&\'()=?_', 27: 'İ', 45: ':;' }
        , alt: { 0: '¬¹²#¼½¾{[]}\\|`@', 17: '¶', 19: '¥', 22: 'ø£¨~æß€', 35: '´', 37: '«»¢', 43: 'µ×÷­' }
        , shift_alt: { 1: '¡', 3: '³¤', 11: '¿', 17: '®', 27: '§', 29: 'ª', 37: '<>©', 43: 'º' }
        , dk: { '^': 'uûaâeêiîıîoôUÛAÂEÊİÎIÎOÔ ^', '¨': 'uüaäeëyÿiïıïoöUÜAÄEËİÏIÏOÖ ¨', '~': 'aãnñoõAÃNÑOÕ ~', '´': 'uúaáeéiíıíoóUÚAÁEÉİÍIÍOÓ ´', '`': 'uùaàeèiìıìoòUÙAÀEÈİÌIÌOÒ `' }
    },
    {
        code: 'TR'
        , name: 'Turkish Q'
        , normal: '"1234567890*-,qwertyuıopğüasdfghjklşizxcvbnmöç.'
        , shift: { 0: 'é!\'^+%&/()=?_;', 36: 'İ', 46: ':' }
        , alt: { 0: '<>£#$½', 7: '{[]}\\|`@', 16: '€', 24: '¨~æß', 35: '´' }
        , shift_alt: { 21: 'İ' }
        , dk: { '^': 'aâiîeêuûıîoôAÂİÎEÊUÛIÎOÔ ^', '¨': 'aäiïeëuüıïoöAÄİÏEËUÜIÏOÖ ¨', '~': 'nñaãoõNÑAÃOÕ ~', '´': 'aáiíeéuúıíoóAÁİÍEÉUÚIÍOÓ ´', '`': 'aàiìeèuùıìoòAÀİÌEÈUÙIÌOÒ `' }
    },
    {
        code: 'TK'
        , name: 'Turkmen Cyrillic'
        , normal: 'ё\'!$&(җңөүә-ъэяшертыуиопющасдфгчйкльжзхцвбнм,.;'
        , shift: { 1: '"@%*)', 11: '_', 44: '<>:' }
    },
    {
        code: 'UG'
        , name: 'Uighur Arabic'
        , normal: '`١٢٣٤٥٦٧٨٩٠-=\\قشېرتيۇیوپ[]ڧسدفگهجكل;\'زخچۋبنم,./'
        , shift: { 0: '~!@#$٪^&*()_+|', 20: 'ۈ،ۆ؛{}ه', 30: 'غ', 32: '؟لالا:"ژ', 42: 'ڭ', 44: '<>?' }
    },
    {
        code: 'UG'
        , name: 'Uighur Cyrillic'
        , normal: 'ёқңғүөҗәһ\'(-ъэяшертыуиопющасдфгчйкльжзхцвбнм,.;'
        , shift: { 9: '")_', 44: '<>:' }
    },
    {
        code: 'UG'
        , name: 'Uighur Latin'
        , normal: 'ä1234567890-öüqwErtyuiop[]asDfghjkl;\'zxCvbnm,./'
        , shift: { 1: '!@#$%^&*()_', 24: '{}', 35: ':"', 44: '<>?' }
    },
    {
        code: 'CY-GB'
        , name: 'United Kingdom Extended'
        , normal: '`1234567890-=#qwertyuiop[]asdfghjkl;\'zxcvbnm,./'
        , shift: { 0: '¬!"£$%^&*()_+~', 24: '{}', 35: ':@', 44: '<>?' }
        , alt: { 0: '¦', 2: '¨', 4: '€', 6: '^', 13: '~', 15: 'ẃé', 19: 'ýúíó', 26: 'á', 36: '´', 39: 'ç' }
        , shift_alt: { 36: '`' }
        , dk: { '¨': 'aäwẅeëuüiïyÿoöAÄWẄEËUÜIÏYŸOÖ ¨', '^': 'aâwŵeêuûiîyŷoôAÂWŴEÊUÛIÎYŶOÔ ^', '´': 'aáwẃeéuúiíyýoóAÁWẂEÉUÚIÍYÝOÓ ´', '`': 'aàwẁeèuùiìyỳoòAÀWẀEÈUÙIÌYỲOÒ `', '~': 'nñaãoõNÑAÃOÕ ~' }
    },
    {
        code: 'EN-GB'
        , name: 'UK Qwerty-Maltron'
        , normal: '`1234567890-=#qwertyuiop[]asdfghjkl;\'zxcvbnm,./'
        , shift: { 0: '¬!"£$%^&*()_+~', 24: '{}', 35: ':@', 44: '<>?' }
        , alt: { 0: '¦', 2: '¨', 4: '€', 6: '^', 13: '~', 15: 'ẃé', 19: 'ýúíó', 26: 'á', 36: '´', 39: 'ç' }
        , shift_alt: { 36: '`' }
        , caps: { 13: 'r', 15: 'pycb[]vmuzl', 27: 'nisf\'#dtho.jg;e\\/wkx' }
        , shift_caps: { 19: '{}', 31: '@~', 37: '>', 40: ':', 42: '|?' }
        , dk: { '¨': 'aäwẅeëuüiïyÿoöAÄWẄEËUÜIÏYŸOÖ ¨', '^': 'aâwŵeêuûiîyŷoôAÂWŴEÊUÛIÎYŶOÔ ^', '´': 'aáwẃeéuúiíyýoóAÁWẂEÉUÚIÍYÝOÓ ´', '`': 'aàwẁeèuùiìyỳoòAÀWẀEÈUÙIÌYỲOÒ `', '~': 'nñaãoõNÑAÃOÕ ~' }
    },
    {
        code: 'EN-GB'
        , name: 'United Kingdom'
        , normal: '`1234567890-=#qwertyuiop[]asdfghjkl;\'zxcvbnm,./'
        , shift: { 0: '¬!"£$%^&*()_+~', 24: '{}', 35: ':@', 44: '<>?' }
        , alt: { 0: '¦', 4: '€', 16: 'é', 20: 'úíó', 26: 'á' }
    },
    {
        code: 'EN-GB'
        , name: 'UK International'
        , normal: '`1234567890-=#qwertyuiop[]asdfghjkl;\'zxcvbnm,./'
        , shift: { 0: '¬!"£$%^&*()_+~', 24: '{}', 35: ':@', 44: '<>?' }
        , alt: { 0: '¦¡²³€¤¼½¾‘’¥×', 14: 'åẃé®þýúíóöªºáßð', 34: 'ø¶´æ', 39: '©', 42: 'ñµç', 46: '¿' }
        , shift_alt: { 1: '¹¨', 11: '±÷', 24: '«»', 27: '§', 35: '°', 39: '¢' }
        , dk: { '\"': 'aäeëiïoöuüwẅyÿAÄEËIÏOÖUÜWẄYŸ "', '^': 'aâeêiîoôuûwŵyŷAÂEÊIÎOÔUÛWŴYŶ ^', '\'': 'aáeéiíoóuúyýwẃcçCÇAÁEÉIÍOÓUÚYÝWẂ \'', '`': 'aàwẁeèuùiìyỳoòAÀWẀEÈUÙIÌYỲOÒ `', '~': 'nñaãoõNÑAÃOÕ ~' }
    },
    {
        code: 'EN-GB'
        , name: 'United Kingdom-Dvorak'
        , normal: '`1234567890-=#/,.pyfgcrl[]aoeuidhtns\';qjkxbmwvz'
        , shift: { 0: '¬!"£$%^&*()_+~?<>', 24: '{}', 36: '@:' }
        , alt: { 0: '¦', 4: '€' }
    },
    {
        code: 'UK-UA'
        , name: 'Ukrainian Translit'
        , normal: 'ё1234567890-ґєяшертiуиопющасдфгчйкльжзхцвбнмї.='
        , shift: { 1: '!"№;%:?*()_', 45: ',+' }
    },
    {
        code: 'UK-UA'
        , name: 'Ukrainian'
        , normal: 'ё1234567890-=\\йцукенгшщзхїфівапролджєячсмитьбю.'
        , shift: { 1: '!"№;%:?*()_+/', 46: ',' }
        , alt: { 20: 'ґ' }
    },
    {
        code: 'UR-PK'
        , name: 'Urdu Arabic'
        , normal: '`١٢٣٤٥٦٧٨٩٠-=ڍقصيرتٿعڳوپڇچاسدفگهجڪلکڱزخطڀبنم،.ئ'
        , shift: { 0: '~!ٰءِءَءُ^۽ﯗ()_+ٺَضِڙٽثغهُڦڃڄآشڊلا̈هگحهجه:؛ـذّظاًٻڻ۾“”؟' }
    },
    {
        code: 'UR-PK'
        , name: 'Urdu'
        , normal: '`1234567890-=\\طصھدٹپتبجح][مورنلہاکی؛\'قفےسشغع،۔/'
        , shift: { 0: '~!@#$٪^ۖ٭)(_+|ظضذڈثّۃـچخ}{ژزڑںۂءآگي:"‍‌ۓ‎ؤئ‏><؟' }
    },
    {
        code: 'EN-US'
        , name: 'United States-Dvorak left'
        , normal: '`[]/pfmlj4321\\;qbyurso.65=-kcdtheaz87\'xgvwni,09'
        , shift: { 0: '~{}?', 9: '$#@!|:', 22: '>^%+_', 35: '*&"', 44: '<)(' }
    },
    {
        code: 'EN-US'
        , name: 'United States-Dvorak right'
        , normal: '`1234jlmfp/[]\\56q.orsuyb;=78zaehtdck-90x,inwvg\''
        , shift: { 0: '~!@#$', 10: '?{}|%^', 17: '>', 24: ':+&*', 36: '_()', 40: '<', 46: '"' }
    },
    {
        code: 'EN-US'
        , name: 'United States-Dvorak'
        , normal: '`1234567890[]\\\',.pyfgcrl/=aoeuidhtns-;qjkxbmwvz'
        , shift: { 0: '~!@#$%^&*(){}|"<>', 24: '?+', 36: '_:' }
    },
    {
        code: 'EN-US'
        , name: 'United States-International'
        , normal: '`1234567890-=\\qwertyuiop[]asdfghjkl;\'zxcvbnm,./'
        , shift: { 0: '~!@#$%^&*()_+|', 24: '{}', 35: ':"', 44: '<>?' }
        , alt: { 1: '¡²³¤€¼½¾‘’¥×¬äåé®þüúíóö«»áßð', 34: 'ø¶´æ', 39: '©', 42: 'ñµç', 46: '¿' }
        , shift_alt: { 1: '¹', 4: '£', 12: '÷¦', 27: '§', 35: '°¨', 39: '¢' }
        , dk: { '^': 'aâeêuûiîoôAÂEÊUÛIÎOÔ ^', '\'': 'cçaáeéuúiíyýoóCÇAÁEÉUÚIÍYÝOÓ \'', '\"': 'aäeëuüiïyÿoöAÄEËUÜIÏOÖ "', '`': 'aàeèuùiìoòAÀEÈUÙIÌOÒ `', '~': 'nñaãoõNÑAÃOÕ ~' }
    },
    {
        code: 'EN-US'
        , name: 'US English + Cyrillic'
        , normal: '`1234567890-=\\qwertyuiop[]asdfghjkl;\'zxcvbnm,./'
        , shift: { 0: '~!@#$%^&*()_+|', 24: '{}', 35: ':"', 44: '<>?' }
        , alt: { 0: '‘‚©¤€°', 7: '¬', 9: '¶№–†¦', 16: 'є', 18: 'ћ', 20: 'ўї', 27: 'ѕђґѓ', 32: 'јќљ', 37: 'џ', 42: 'њµ“”·' }
        , shift_alt: { 0: '’„®£§‰', 11: '—‡±', 43: '™«»•' }
        , caps: { 0: 'ё', 14: 'йцукенгшщзхъфывапролджэячсмитьбю.' }
        , shift_caps: { 2: '"№;', 6: ':?', 13: '/', 46: ',' }
    },
    {
        code: 'EN-US'
        , name: 'US'
        , normal: '`1234567890-=\\qwertyuiop[]asdfghjkl;\'zxcvbnm,./'
        , shift: { 0: '~!@#$%^&*()_+|', 24: '{}', 35: ':"', 44: '<>?' }
    },
    {
        code: 'UZ'
        , name: 'Uzbek Cyrillic'
        , normal: 'ё1234567890ғҳ\\йцукенгшўзхъфқвапролджэячсмитьбю.'
        , shift: { 1: '!"№;%:?*()', 13: '/', 46: ',' }
    },
    {
        code: 'VI-VN'
        , name: 'Vietnamese'
        , normal: '`ăâêộ̀̉̃́đ-₫\\qwertyuiopươasdfghjkl;\'zxcvbnm,./'
        , shift: { 0: '~', 11: '_+|', 35: ':"', 44: '<>?' }
        , alt: { 1: '1234567890', 12: '=', 24: '[]' }
        , shift_alt: { 0: '~!@#$%^&*()_+|', 24: '{}', 35: ':"', 44: '<>?' }
    },
    {
        code: 'MYA-MM'
        , name: 'Zawgyi Myanmar'
        , normal: '`၁၂၃၄၅၆၇၈၉၀-=၏ဆတနမအပကငသစဟ]ေ်ိ္ါ့ျုူးဒဖထခလဘညာယ.။'
        , shift: { 0: '~ဍ႑ဋ၌%/ရဂ()×+႒ွ်ၽႊႏၽြႊ႔႕ႈဥဏဧ}ဗွီၤြံဲဳဴၚဓဇဌဃဠႀၿၾဝဈ၊' }
        , dk: { ']': '--×_==++ဟ[ဧ{]]}}၏\\႒|း;ၚ:ဒ\'ဓ"ယ,ဝ<..ဈ>။/၊?``~~၁1ဍ!၂2႑@၃3ဋ#၄4၌$၅5%%၆6/^၇7ရ&၈8ဂ*၉9((၀0))  ', '`': 'ဘၻညဉလႅခၡထၳဖၹျႃိႎဒၵ်ၽ္ႍုႉတၱနၷမၼစၥကၠင၍အဤပၸသႆဆၦဂၢရ႐၄၎၅ဩဋၬ၁ၮ၀ဝ  ၿႁဃၣဇၨၾႂဗၺဲႄီႌဓၶွႇၤႋႏ႖ဏၰဥၪႊဣ%ဪ)ဦ၃႗ဌၭ×÷-​႔႕ဈၩဝၯယဎ', '~': 'ဆၧတၲထၴညၫဘ႓' }
    }
];

