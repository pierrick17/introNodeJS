var request = require('request');
var rp = require('request-promise');






rp('http://www.google.com')
    .then(function (result){
        console.log(result)
    });
    
    