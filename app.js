/***************************************************/
const express = require('express');
const app = express();

const controller = require('./Controllers/controller');
//Obtain Modal Form
const modalForm = document.getElementById('id1');
//const router = require('./routes/routes');
//Set View engine
app.set('view engine','ejs');
app.use(express.static('public'));
//Heroku server port
const PORT = process.env.PORT || 3000;
/*******************************************************************/
//Coming soon page render
app.get('/',function(req,res){
    res.render('ComingSoon.ejs');
});

app.get('/home',function(req,res){

    res.render('Home.ejs');
});


window.onclick=function(event){

    res.render('ComingSoon.ejs')

};
/***********************************************************************/
//Local Data storage
/*
username = ["admin"];
password = ["password"];
*/
/******************************************************************/
function userSignUp(){
    /*
    var uname = document.getElementById("newUsername").value;
    var pword = document.getElementById("newPassword").value;

    this.username.push(uname);
    this.password.push(pword);
    console.log(this.username);
    console.log(this.password);
*/
    goJobs();

}

function companySignUp(){
/*get data from html add to arraylist open newpage with usernamespecified*/
}




function login(){
    console.log(username);
        var uname = document.getElementById("uname").value;
        var pword = document.getElementById("pword").value;
        console.log(uname);
        console.log(pword);

        for(var i = 0; i<username.length;i++){
            if (username[i] === uname){
                if(password[i] === pword){
                    goJobs();
                }
            }
        }

}
function clearContent(id){
    document.getElementById(id).value = '';
}
function addJob(){
    window.location = 'JobPost.ejs';
}

function postJob(){

    var job = {
        title: document.getElementById('jobTitle').valueOf(),
        description: document.getElementById('jobDesc').valueOf(),
        email: document.getElementById('jobEmail').valueOf()
    };
    //jobs.push(job);
    window.location = 'companyProfile.ejs';
}
    /* Submit and save data entered*/

function goHome(){
    window.location = 'Home.ejs';
}
function goJobs(){
    window.location = 'jobs.ejs';
}
function goCompanies(){
    window.location = 'companies.ejs';
}
function goTraining(){
    window.location = 'training.ejs';
}
function goExperience(){
    window.location = 'experiences.ejs';

}
function goUserSignup() {
    window.location = 'userSignup.ejs';
}
function goCompanySignup(){
    window.location = 'companySignup.html';
}
function goToProfile(elementid){
    //check username in db
    //username = document.getElementById(elementid).valueOf();
    //if user go to userPage
    if((Math.floor(Math.random() *2)+1) === 1){
        window.location='userProfile.ejs'
    }else{
        window.location ='companyProfile.ejs';
    }

    //if company go to companyPage
    //window.location='companyProfile';
}
function goToCompanyProfile(){
    window.location ='companyProfile.ejs';
}

//For use with controller and router
//app.use(router);
//app.get('/test', controller.test());


//Listen for heroku server port
app.listen(PORT,function(){
    console.log('server started');

});
