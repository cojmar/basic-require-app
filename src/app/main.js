define(function (require) {
    require('css!assets/css/main');
    var $ = require('jquery');    
    var app ={
        messages:require('./messages'),
        print:require('print'),
        init:function(){               
            $('body').append(app.messages.getHello());
            app.print('App Init Ok');
        }
    };
    $(function(){
        app.init();
        //app.print(require('text!assets/css/main.css'));
    })        
});
