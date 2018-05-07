
const express = require('express');
const router = express.Router();
const controller = require('../Controllers/controller');



router.get('/',controller.renderComingSoon);

router.get('/test',controller.test);

/*Front End Routes*/

router.get('/home',controller.goHome);
router.get('/companies', controller.goCompanies);
router.get('/training', controller.goTraining);
router.get('/experiences', controller.goExperiences);
router.get('/userSignup', controller.goUserSignUp);
router.get('/companySignup', controller.goCompanySignUp);
router.get('/jobs', controller.goJobs);
router.get('/jobPost', controller.goJobPost);
router.get('/companyProfile', controller.goCompanyProfile);
router.get('/userProfile', controller.goUserProfile);

/*REST API*/
/*PULL*/
router.get('/api/companydb',controller.getAllCompanies);
router.get('/api/jobsdb',controller.getAllJobs);
router.get('/api/appliedJobs',controller.getAppliedJobs);
router.get('/api/postedJobs',controller.getPostedJobs);
router.get('/api/numberApplicants',controller.getnumberApplicants);

/*POST*/

router.post('/api/apply',controller.JobApply);               //Still to be completed
router.post('/api/addJobSeeker',controller.addJobSeeker);
router.post('/api/addJob',controller.addJob);
router.post('api/addCompany',controller.addCompany);




module.exports = router;