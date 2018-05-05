



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


