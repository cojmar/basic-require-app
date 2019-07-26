(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(jQuery);
    }
} (function ($) {
    var obj ={
        init:function(){
            console.log('app init ok');
        }
    };   

    $(function(){
        obj.init();
    })    
    return obj;
}));