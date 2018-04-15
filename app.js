
const express = require('express');
const app = express();
const controller = require('./Controllers/controller');
//const router = require('./routes/routes');
//Set View engine
app.set('view engine','ejs');
app.use(express.static('public'));
//Heroku server port
const PORT = process.env.PORT || 3000;

//Coming soon page render
app.get('/',function(req,res){
    res.render('ComingSoon.ejs');
});
app.get('/home',function(req,res){
    res.render('Home.ejs');
})

//For use with controller and router
//app.use(router);
//app.get('/test', controller.test());


//Listen for heroku server port
app.listen(PORT,function(){
    console.log('server started');

})