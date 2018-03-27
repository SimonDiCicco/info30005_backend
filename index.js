
const express = require('express');
const app = express();


//Set View engine
app.set('view engine','ejs');

//Heroku server port
const PORT = process.env.PORT || 3000;

//get route
app.get('/',function(req,res){
    res.render('ComingSoon');

})

//start server
app.listen(3000,function(){
    console.log('server started');

})