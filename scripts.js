const express = require('express')

const app = express()

app.get('*', function(req, res){
    res.end('Hello World');
    });
    
    app.listen(4000, function(){
    console.log('The server is running, ' +
    ' please open your browser at http://localhost:%s',
    port);
    });


    
