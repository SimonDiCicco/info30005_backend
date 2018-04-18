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

    res.render('Home.html');
});
var names = ["admin"];

window.onclick=function(event){

    res.render('ComingSoon.ejs')

};
/***********************************************************************/
//Local Data storage


/******************************************************************/
function userSignUp(){

}
function companySignUp(){
/*get data from html add to arraylist open newpage with usernamespecified*/
}




function login(){
    var num = Math.floor(Math.random()*10)+1;

        if( num >5){
            window.location= 'userProfile.html';
            document.getElementById("UserFullName").value = "Bob Shmif";

        }else{
            window.location = 'companyProfile.html';
            document.getElementById("CompanyName").value = "CardBoard Enthusiasts";

        }










}
function clearContent(id){
    document.getElementById(id).value = '';
}
function addJob(){
    window.location = 'JobPost.html';
}

function postJob(){

    var job = {
        title: document.getElementById('jobTitle').valueOf(),
        description: document.getElementById('jobDesc').valueOf(),
        email: document.getElementById('jobEmail').valueOf()
    };
    //jobs.push(job);
    window.location = 'companyProfile.html';
}
    /* Submit and save data entered*/

function goHome(){
    window.location = 'Home.html';
}
function goJobs(){
    window.location = 'jobs.html';
}
function goCompanies(){
    window.location = 'companies.html';
}
function goTraining(){
    window.location = 'training.html';
}
function goExperience(){
    window.location = 'experiences.html';

}
function goUserSignup() {
    window.location = 'userSignup.html';
}
function goCompanySignup(){
    window.location = 'companySignup.html';
}
function goToProfile(elementid){
    //check username in db
    //username = document.getElementById(elementid).valueOf();
    //if user go to userPage
    window.location='userProfile.html';
    //if company go to companyPage
    //window.location='companyProfile';
}
function goToCompanyProfile(){
    window.location ='companyProfile.html'
}

//For use with controller and router
//app.use(router);
//app.get('/test', controller.test());


//Listen for heroku server port
app.listen(PORT,function(){
    console.log('server started');

})
