var express = require('express');
var app = express();

app.get('/stops-result', function (req, res) {
    response = {
        pickup_location:"NED Stop",
        dropoff_location:"Urdu Uni Stop",
        pickup_time:"10:00 AM",
        dropoff_time:"10:30 AM",

     };
     console.log(response);
     res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})