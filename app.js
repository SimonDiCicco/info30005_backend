/***************************************************/
const express = require('express');
const app = express();


const router = require('./routes/routes');
//Set View engine
app.set('view engine','ejs');
app.use(express.static('public'));
//Heroku server port
const PORT = process.env.PORT || 3000;
/*******************************************************************/



app.use(router);




app.get('/home', function(req,res){
    res.render('Home.ejs');
});

app.get('/companies', function(req,res){
    res.render('companies.ejs');
});

app.get('/training', function(req,res){
    res.render('training.ejs');
});

app.get('/experiences', function(req,res){
    res.render('experiences.ejs');
});

app.get('/userSignup', function(req,res){
    res.render('userSignup.ejs');
});

app.get('/companySignup', function(req,res){
    res.render('companySignUp.ejs');
});

app.get('/jobs', function(req,res){
    res.render('jobs.ejs',{
        jobs:fakeJobs
    });
});
app.get('/jobPost', function(req,res){
    res.render('JobPost.ejs');
});
app.get('/companyProfile', function(req,res){
    var num = Math.floor(Math.random()*5);
    res.render('companyProfile.ejs',{
        company: fakeCompanies[num],
        job:fakeJobs[num]

    });
});

app.get('/userProfile', function(req, res) {

    res.render('userProfile.ejs',{
       user: fakeUsers[0]
    });




});


app.listen(PORT,function(){
    console.log('server started');

});


//Uploading Images
//Reading and uploading an image file
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
                .width(150)
                .height(200);
        };

        reader.readAsDataURL(input.files[0]);
    }
}




//Mongo DB database connecttion
var mongoose = require('mongoose');
frontierdb = mongoose.connect('mongodb://frontierdb:frontier@ds163119.mlab.com:63119/frontierdb');

var db = mongoose.connection;

db.on('error', console.error.bind(console,'connection error:'));
db.once('open', function(){
    // we have connected successfully
});
