


const express = require('express');
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
    res.render('Home.ejs',{user:req.params.user});
};
module.exports.goCompanies = function(req,res){


    Company.find(
        function(err,Company){

            res.render('companies.ejs',{companies:Company, company:req.params.user});
        });

};
module.exports.goTraining = function(req,res){
    res.render('training.ejs',{user:req.params.user});
};
module.exports.goExperiences = function(req,res){
    res.render('experiences.ejs',{user:req.params.user});
};
module.exports.goUserSignUp = function(req,res){
    res.render('userSignup.ejs');
};
module.exports.goCompanySignUp = function(req,res){
    res.render('companySignUp.ejs');
};
module.exports.goJobs = function(req,res){


    Job.find(
        function(err,Job){
            if(err){
                console.log("Couldn't find anything");
            }else{

                res.render('jobs.ejs',{jobs:Job, user:req.params.user});
            }

        });
};
module.exports.goJobPost = function(req,res){
    JobSeeker.find({Username:req.params.user},
        function(err,user){
            console.log(user);
            if(user.length === 0){
                //Not a Seeker, they are a company:
                res.render('JobPost.ejs',{user:req.params.user});
            }else{
               res.redirect(303,'/jobs/'+req.params.user);

            }
        });

};
module.exports.goCompanyProfile = function(req,res) {
    /*
    res.render('companyProfile.ejs');
    document.getElementById("CompanyName").innerHTML=req.params.Company;
    */
    Job.find({company: req.params.Company},{title:1,description:1},
        function(err,companyJobs) {
            if(err){
                console.log("Couldn't find anything");

            }
            console.log(companyJobs);
            Company.find({CompanyName: req.params.Company},
                function(err,company){
                    res.render('companyProfile.ejs',{jobs:companyJobs, company:company});
                });


    });
};
module.exports.goUserProfile = function(req, res) {

    JobSeeker.find({Username: req.params.Username},
        function(err,user){
            console.log(user[0]._id);
            Job.find({applicants:{$all:user[0]._id.toString()}},
                function(err,Job){
                    if(err){
                        console.log("Couldn't find anything");

                    }
                    console.log(Job);
                    res.render('userProfile.ejs',{jobs:Job, user:user[0]});

                });

        });


};
module.exports.goProfile = function(req,res){

    JobSeeker.find({Username:req.params.user},
        function(err,user){
            console.log(user);
            if(user.length === 0){
                //Not a Seeker, they are a company:
                console.log("They are a Company!!");
                Job.find({company: req.params.user},{title:1,description:1},
                    function(err,companyJobs) {
                        if(err){
                            console.log("Couldn't find anything");

                        }
                        console.log("found jobs");
                        Company.find({CompanyName: req.params.user},
                            function(err,company){
                                if(err){
                                    console.log("Couldn't find anything");
                                }
                                console.log("About to render profile");

                                res.render('companyProfile.ejs',{jobs:companyJobs, company:company});
                            });


                    });

            }else{
                //They are a Seeker
                console.log("They are a Seeker");
                Job.find({applicants:{$all:user[0]._id.toString()}},
                    function(err,Job){
                        if(err){
                            console.log("Couldn't find anything");

                        }

                        res.render('userProfile.ejs',{jobs:Job, user:user[0]});



                    });

            }
        });





};


/*REST API */

module.exports.getAllJobs = function(req, res){
    Job.find(
        function(err,Job){
            console.log(Job[0].title);
            res.send({jobs: Job});
        });
};
module.exports.getAllCompanies = function(req, res){
    Company.find(
        function(err,Company){
        res.send({companies:Company});

    });
};
module.exports.getAppliedJobs = function(req,res){
    // User ID: "5ae7c29e992b51311002e864"
    Job.find({applicants:{$all:"5aee709def36953e40c7cce5"}},{company:1,description:1},
        function(err,Job){
        if(err){
            console.log("Couldn't find anything");

        }
            res.send({jobs:Job});
    });

};
module.exports.getPostedJobs = function(req,res){
    Job.find({company: "Big W"/*req.body.company*/},{title:1,description:1},
        function(err,companyJobs) {
            if(err){
                console.log("Couldn't find anything");

            }




           res.send({jobs:posted});

            });

};
module.exports.getnumberApplicants = function(req,res){
    /*for each job listed when link is clicked, alert will show applicants with name*/
    Job.find({title: req.body.title, company: req.body.company},{ applicants:1,_id:0},
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

module.exports.JobApply = function(req,res){

    JobSeeker.find({Username:req.params.username},
        function(err,user){

            if(user.length === 1) {


                console.log(req.params.username);
                JobSeeker.find({Username: req.params.username}, {_id: 1},
                    function (err, user) {
                        user = JSON.parse(JSON.stringify(user));
                        console.log(user);
                        console.log(user[0]._id);
                        console.log(req.body);
                        Job.findOneAndUpdate(
                            {company: req.body.CompanyName, title: req.body.title},
                            {$push: {"applicants": user[0]._id}},
                            function (err, raw) {
                                if (err) {
                                    console.log("update company not successful");
                                }

                                //alert( "You have successfully applied to work for "+req.body.CompanyName);
                                console.log("You have successfully applied to work for " + req.body.CompanyName);
                                res.redirect('/Profile/'+req.params.username);
                            });
                    });
            }else{

                res.redirect('/jobs/'+req.params.username);
            }

    });

};

// pull of username
//if error
// display error
// if success
// login


module.exports.addJobSeeker = function(req, res) {
    console.log(req.body);
    var seeker = new JobSeeker(
        {

            "Firstname": req.body.firstName,
            "Lastname": req.body.lastName,
            "Username": req.body.username,
            "Password": req.body.password,
            "Experiences": req.body.experiences,
            "Interests": req.body.interests
        }
    );

    seeker.save(function(err,newSeeker){
        if(!err){
            res.redirect('/jobs/'+req.body.username);
            //res.send(newSeeker);
        }else{
            res.sendStatus(400);
        }
    });


};

module.exports.addJob = function(req, res) {
    console.log(req.body);
    var job = new Job(
        {


            "title":req.body.jobTitle,
            "company":req.body.company,
            "description":req.body.jobDesc,
            "applicants" : []

        }
    );

    console.log("created schema model");
    job.save(function(err,newJob){
        if(!err){

            Company.findOneAndUpdate(
                {CompanyName:req.body.company},
                {$push: {"Jobs":newJob._id}},
                function (err,raw) {
                    if(err){
                        console.log("update company not successful");
                    }
                    res.redirect('/jobs/'+req.body.company);
                    
                }
            );
        }else{
            res.sendStatus(400);
        }
    });
    console.log("saved schema");

};
module.exports.addCompany = function(req, res) {
    console.log(req.body);
    var check = 0;
    if(req.body.checkboxes1){
        check++;
    }
    if(req.body.checkboxes2){
        check++;
    }
    if(req.body.checkboxes3){
        check++;
    }
    if(req.body.checkboxes4){
        check++;
    }
    if(req.body.checkboxes5){
        check++;
    }
    var company = new Company(
        {
            "CompanyName":req.body.CompanyName,
            "Description":req.body.Description,
            "Username":req.body.username,
            "Password":req.body.password,
            "Jobs":[],
            "Rating":check


        }
    );

    company.save(function(err,newCompany){
        if(!err){
            res.redirect('/jobs/'+newCompany.CompanyName);
        }else{
            res.sendStatus(400);
        }
    });


};

module.exports.login = function(req, res){

//username
    //password
    //CompanyCheck
    //SeekerCheck
    if(req.body.CompanyCheck){
        Company.find({Username:req.body.username, Password:req.body.password},
            function(err,company){
                if(company.length === 1){
                    res.redirect('/jobs/'+req.body.username);
                }else{
                    res.redirect('/home');
                }
            });


    }else if(req.body.SeekerCheck){
        JobSeeker.find({Username:req.body.username, Password:req.body.password},
            function(err, user){
            if(user.length === 1){
                res.redirect('/jobs/'+req.body.username);
            }else{
                res.redirect('/home');
            }
            });

    }
};

