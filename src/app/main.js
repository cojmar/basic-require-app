define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var messages = require('./messages');    
    // Load library/vendor modules using
    // full IDs, like:
    var print = require('print');
    

    require('jquery');
    require('css!assets/css/main');

    var obj ={
        init:function(){   
            print(messages.getHello());
            $('body').append(messages.getHello());
        }
    };
    $(function(){
        obj.init();
    })    
    return obj;

});
