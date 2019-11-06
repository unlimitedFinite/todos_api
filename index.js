var express = require('express'),
    app = express();
    port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.send("hi there from express!")
});

app.listen(port, function(){
  console.log('App is running on port: ' + port);
})
