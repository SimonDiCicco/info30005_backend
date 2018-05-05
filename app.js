/***************************************************/
const express = require('express');
const app = express();

//const controller = require('./Controllers/controller');


const router = require('./routes/routes');
//Set View engine
app.set('view engine','ejs');
app.use(express.static('public'));
//Heroku server port
const PORT = process.env.PORT || 3000;
/*******************************************************************/
//Coming soon page render


app.use(router);
/*
Data model
----------
Users---
name: string
interests: string
experiences: string
profPicURL: string
jobs: [{// put details here}, {}, {}, ...]
*/


const fakeUsers = [{
    name: "John Shmuf",
    username: "john1",
    password: "shmuf",
    interests: "I love cycling, and spending time with family.",
    experiences: " I have have some experience as a sales attendant at Big W."
}];
const fakeJobs = [
    {
        title: "Pick Packer, CardBoard Enthusiasts",
        description: "Pick items based on a checklist order, pick at your own rate, accuracy is important."
    },
    {
        title: "Librarian, Hampshire Council",
        description: "Sorting of books, magazines and DVDs. Handling customer questions about location of books within the library."
    },
    {
        title: "Data Entry, Tennis Australia",
        description: "Entry of generic sports data, based on input and real life game-play."
    },
    {
        title: "HR Assistant, Ernst and Young",
        description: "Scanning and printing of documents and council approved plans."
    },

    {
        title: "Sales attendant, Big W",
        description: "Facing of shelves, replenishment of stock and customer service."
    },

    {
        title: "Full Time truck loader, CardBoard Enthusiasts",
        description: "Assist in preparing pallets for transportation. This involves wrapping them and ensuring the contents are stable."
    }



];
const fakeCompanies= [
    {
        name:"CardBoard Enthusiasts",
        description:"Delivery quality cardboard since 1977. We provide many additional products as well. Check us out!"
    },
    {
        name:"Hampshire Council",
        description:"We put our residents first."
    },
    {
        name:"Tennis Australia",
        description:"We strive to be inviting, and focus on encouragement within the competitive world of sport."
    },
    {
        name:"Ernst and Young",
        description:"We push the boundaries of the workforce."
    },
    {
        name:"Big W",
        description:"We are focused on delivering excellent customer service."
    }
];


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


//Mongo DB database connecttion
var mongoose = require('mongoose');
frontierdb = mongoose.connect('mongodb://frontierdb:frontier@ds163119.mlab.com:63119/frontierdb');

var db = mongoose.connection;

db.on('error', console.error.bind(console,'connection error:'));
db.once('open', function(){
    // we have connected successfully
});
