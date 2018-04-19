/***************************************************/
const express = require('express');
const app = express();

//const controller = require('./Controllers/controller');


//const router = require('./routes/routes');
//Set View engine
app.set('view engine','ejs');
app.use(express.static('public'));
//Heroku server port
const PORT = process.env.PORT || 3000;
/*******************************************************************/
//Coming soon page render
app.get('/', function(req,res){
    res.render('ComingSoon.ejs');
});


/*
Data model
----------
name: string
interests: string
experiences: string
profPicURL: string
jobs: [{// put details here}, {}, {}, ...]
*/


const fakeUsers = [{
    name: "John Smith",
    interests: "I love cycling, and spending time with family.",
    experiences: " I have have some experience as a sales attendant at Big W."
}];


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
    res.render('jobs.ejs');
});
app.get('/jobPost', function(req,res){
    res.render('JobPost.ejs');
});
app.get('/companyProfile', function(req,res){
    res.render('companyProfile.ejs');
});

app.get('/users/:profileID', function(req, res) {
   console.log('request for profileID ' + req.params.profileID);

   res.render('userProfile.ejs', {
       user: fakeUsers[0]
   });
});


app.listen(PORT,function(){
    console.log('server started');

});
/*
window.onclick=function(event){

    res.render('ComingSoon.ejs')

};*/
/***********************************************************************/
//Local Data storage
/*
username = ["admin"];
password = ["password"];
*/
/******************************************************************/
//

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

//For use with controller and router
//app.use(router);
//app.get('/test', controller.test());


//Listen for heroku server port

