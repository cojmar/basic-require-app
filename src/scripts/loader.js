require.config({
    baseUrl: "./",
    map: {
        "*": {
            "text": "lib/require-text",
            "css":"lib/require-css",
        }        
    },
    paths: {
        requireLib:"lib/require.min",
        app_main:"scripts/main",
        jquery: "lib/jquery.min"    
    },
    shim: {          
        app_main: {           
            deps: [                
                "jquery",
                "requireLib"
            ]
        }
    }    
});
require([  
    "requireLib",
    "app_main"       
]);