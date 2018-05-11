
const express = require('express');
const router = express.Router();
const controller = require('../Controllers/controller');



router.get('/',controller.renderComingSoon);

router.get('/test',controller.test);

/*Front End Routes*/

router.get('/home',controller.goHome);

router.get('/companies/:user', controller.goCompanies);     //get all companies
router.get('/training/:user', controller.goTraining);
router.get('/experiences/:user', controller.goExperiences);
router.get('/userSignup', controller.goUserSignUp);     //Post addJobSeeker, re-direct to jobs
router.get('/companySignup', controller.goCompanySignUp); ////Post addCompany, re-direct to jobs
router.get('/jobs/:user', controller.goJobs);     //Get getAllJobs
router.get('/jobPost/:user', controller.goJobPost);       //post addJob, re-direct to jobs
//router.get('/companyProfile/:Company', controller.goCompanyProfile);   //get PostedJobs, get Company
//router.get('/userProfile/:Username', controller.goUserProfile);       //get AppliedJobs, get JobSeeker
router.get('/Profile/:user', controller.goProfile); //calls either company or user profile

/*REST API*/
/*PULL*/

router.get('/api/companydb',controller.getAllCompanies);
router.get('/api/jobsdb',controller.getAllJobs);
router.get('/api/appliedJobs',controller.getAppliedJobs);
router.get('/api/postedJobs',controller.getPostedJobs);
router.get('/api/numberApplicants',controller.getnumberApplicants);

/*POST*/

router.post('/api/apply/:username',controller.JobApply);               //Still to be completed
router.post('/api/addJobSeeker',controller.addJobSeeker);
router.post('/api/addJob',controller.addJob);
router.post('/api/addCompany',controller.addCompany);

module.exports = router;