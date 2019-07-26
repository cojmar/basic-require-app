require.config({
    paths: {
        app_main:'../scripts/main',
        jquery: '../lib/jquery.min'    
    },
    shim: {        
        app_main: {
            exports: 'app_main',
            deps: [
                'jquery'
            ]
        }
    }
});
require([   
    'app_main'
], function(app_main) {    
    
});