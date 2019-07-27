(function (factory) {
    'use strict';        
    if (typeof define === 'function' && define.amd) {   
        define(['css!assets/css/main','text!assets/css/main.css'],function(){console.log(arguments)});             
        factory();
    }else{
         factory();
    }
}(function () {        
    var obj ={
        init:function(){   
            $('body').append("Hellow world311");
        }
    };
    $(function(){
        obj.init();
    })    
    return obj;
}));