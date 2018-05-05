



var mongoose = require('mongoose');
require('../models/companydb');
require('../models/Jobsdb');
require('../models/JobSeeker');
var Job = mongoose.model('Jobsdb');
var JobSeeker = mongoose.model('JobSeeker');
var Company = mongoose.model('companydb');

module.exports.renderComingSoon = function(req,res){
    res.render('ComingSoon.ejs');
};

module.exports.test = function(req, res){
    res.send('Just Testing');
};

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

module.exports.addJobSeeker = function(req, res) {
    var seeker = new JobSeeker(
        {
            "Firstname": "Simon",
            "Lastname": "D",
            "Username": "sdi",
            "Password": "password",
            "Experiences": "Waiter for 6 months",
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
    var job = new Job(
        {
            "title":"Sales Attendant",
            "company":"Big W",
            "description":"Process payments, deal with customers, have knowledge of products.",
            "applicants": [""]

        }
    );
    job.save(function(err,newJob){
        if(!err){
            res.send(newJob);
        }else{
            res.sendStatus(400);
        }
    });


};
module.exports.addCompany = function(req, res) {
    var company = new Company(
        {
            "CompanyName":"Costco",
            "Description":"Bulk buying at its best",
            "Jobs":[]

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


