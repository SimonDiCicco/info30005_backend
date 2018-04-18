
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


//Local Data storage
var jobs = [];
var users =  [];
var companies = [];



//Coming soon page render
app.get('/',function(req,res){
    res.render('ComingSoon.ejs');
});

app.get('/home',function(req,res){
    res.render('Home.html');
})


window.onclick=function(event){

       res.render('ComingSoon.ejs')

}
function userSignUp(){

}
function companySignUp(){
/*get data from html add to arraylist open newpage with usernamespecified*/
}

var names = new Array(6);
var name = "admin";
names.push(name);
var passwords = ["admin","simon"];
function login(){
    var user = {
        fullname: "Bob Shmaf",
        username: "admin",
        password: "admin"
    };



    var username = document.getElementById("uname").valueOf();
    var pword = document.getElementById("pword").valueOf();
    console.log(username.value);
    console.log(names[0]);

        if(usernames[0] == username.value){
            if(passwords[0].toString() == pword.toString()){

                window.location = 'userProfile.html';
                document.getElementById("UserFullName").value = "Admin Login";

            }
        }

    /*
    for(var i = 0; i<users.length; i++){
        if(users[i].username.valueOf() == username.valueOf()){
           if(users[i].password.valueOf() == pword.valueOf()){

               window.location = 'userProfile.html';
               document.getElementById("UserFullName").value = users[i].fullname;

           }
        }
    }
    for(var i = 0; i<companies.length; i++){
        if(companies[i].username == username){
            if(companies[i].password == pword){
                window.location = 'companyProfile.html';
            }

        }
    }
*/

}
function clearContent(id){
    document.getElementById(id).value = '';
}

function postJob(){

    var job = {
        title: document.getElementById('jobTitle').valueOf(),
        description: document.getElementById('jobDesc').valueOf(),
        email: document.getElementById('jobEmail').valueOf()
    };
    jobs.push(job);
    window.location = 'companyProfile.html';
}
    /* Submit and save data entered*/

function goHome(){
    window.location = 'Home.html';
}
function goJobs(){
    window.location = '';
}
function goCompanies(){
    window.location = '';
}
function goTraining(){
    window.location = '';
}
function goExperience(){
    window.location = '';

}function goToProfile(elementid){
    //check username in db
    //username = document.getElementById(elementid).valueOf();
    //if user go to userPage
    window.location='userProfile.html';
    //if company go to companyPage
    //window.location='companyProfile';
}

//For use with controller and router
//app.use(router);
//app.get('/test', controller.test());


//Listen for heroku server port
app.listen(PORT,function(){
    console.log('server started');

})
