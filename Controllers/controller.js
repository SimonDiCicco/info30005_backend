



var mongoose = require('mongoose');
require('../models/companydb');
require('../models/Jobsdb');
require('../models/JobSeeker');
var Job = mongoose.model('Jobsdb');
var JobSeeker = mongoose.model('JobSeeker');
var Company = mongoose.model('companydb');


/*Front End route calls*/
module.exports.renderComingSoon = function(req,res){
    res.render('ComingSoon.ejs');
};
module.exports.test = function(req, res){
    res.send('Just Testing');
};
module.exports.goHome = function(req,res){
    res.render('Home.ejs');
};
module.exports.goCompanies = function(req,res){
    res.render('companies.ejs');
};
module.exports.goTraining = function(req,res){
    res.render('training.ejs');
};
module.exports.goExperiences = function(req,res){
    res.render('experiences.ejs');
};
module.exports.goUserSignUp = function(req,res){
    res.render('userSignup.ejs');
};
module.exports.goCompanySignUp = function(req,res){
    res.render('companySignUp.ejs');
};
module.exports.goJobs = function(req,res){
    res.render('jobs.ejs');
};
module.exports.goJobPost = function(req,res){
    res.render('JobPost.ejs');
};
module.exports.goCompanyProfile = function(req,res) {
    res.render('companyProfile.ejs');
};
module.exports.goUserProfile = function(req, res) {
    res.render('userProfile.ejs');
};


/*REST API */
module.exports.getAllJobs = function(req, res){
    Job.find(
        function(err,Job){
            res.send(Job);
        });
};
module.exports.getAllCompanies = function(req, res){
    Company.find(
        function(err,Company){
        res.send(Company);
    });
};
module.exports.getAppliedJobs = function(req,res){

    Job.find({applicants:{$all:"5ae7c29e992b51311002e864"}},
        function(err,Job){
        if(err){
            console.log("Couldn't find anything");

        }
            res.send(Job);
    });

};
module.exports.getPostedJobs = function(req,res){
    Company.find({CompanyName: "Big W"},{Jobs:1,_id:0},
        function(err,companyJobs) {
            if(err){
                console.log("Couldn't find anything");

            }
            var jobs = JSON.stringify(companyJobs);
            var job = JSON.parse(jobs);
            for(var i = 1; i<job[0].Jobs.length;i++){
                console.log(job[0].Jobs.length);
                Job.find({_id:job[0].Jobs[i]},
                    function(err,job){
                    if(err){
                        console.log("an error occurred");
                    }else{
                        console.log(job);

                    }

                });

            }
            res.send("done");



        });

};
module.exports.getnumberApplicants = function(req,res){
    /*for each job listed when link is clicked, alert will show applicants with name*/
    Job.find({title: "Pick Paker", company: "Cardboard Enthusiasts"},{ applicants:1,_id:0},
        function(err,jobApplicants){

            var apps = JSON.stringify(jobApplicants);
            var app = JSON.parse(apps);
            console.log(app);
            var applicants = app[0].applicants.length;
            console.log(applicants);
            JobSeeker.find({_id:app[0].applicants[0]},{Firstname:1,Lastname:1},
                function(err,applicants){
                    for(var i = 0; i<applicants.length;i++){
                        console.log("FirstName: " +applicants[i].Firstname);
                        console.log("LastName: " +applicants[i].Lastname);
                    }

                });

        });
};
/* Still to be completed
module.exports.JobApply = function(req,res){

    JobSeeker.find({Fistname:"John"},{_id:1},
        function(err,user){
            user = JSON.parse(JSON.stringify(user));
            console.log(user);
            Job.findOneAndUpdate(
                {company:"CardBoard Enthusiasts"},
                {$push: {"applicants":user[0]._id}},
                function (err,raw) {
                    if(err){
                        console.log("update company not successful");
                    }
                    res.send("done")
                });
    });
};*/
module.exports.addJobSeeker = function(req, res) {
    var seeker = new JobSeeker(
        {

            "Firstname": "Frank",
            "Lastname": "F",
            "Username": "frank1",
            "Password": "password",
            "Experiences": "swimmer for 6 months",
            "Interests": "Enjoy playing soccer and tennis."
        }
    );

    seeker.save(function(err,newSeeker){
        if(!err){
            res.send(newSeeker);
        }else{
            res.sendStatus(400);
        }
    });
};

module.exports.addJob = function(req, res) {
    console.log("starting add job");
    var job = new Job(
        {

            /*Input elements to be inserted*/
            "title":"Sales Attendant",
            "company":"Big W",
            "description":"Process payments, deal with customers, have knowledge of products.",
            "applicants" : [""]

        }
    );

    console.log("created schema model");
    job.save(function(err,newJob){
        if(!err){
            res.send(newJob._id);
            Company.findOneAndUpdate(
                {CompanyName:"Big W"},
                {$push: {"Jobs":newJob._id}},
                function (err,raw) {
                    if(err){
                        console.log("update company not successful");
                    }

                    
                }
            );
        }else{
            res.sendStatus(400);
        }
    });
    console.log("saved schema");

};
module.exports.addCompany = function(req, res) {
    var company = new Company(
        {
            "CompanyName":"Costco",
            "Description":"Bulk buying at its best",
            "Jobs":[""]

        }
    );
    company.save(function(err,newCompany){
        if(!err){
            res.send(newCompany);
        }else{
            res.sendStatus(400);
        }
    });


};


