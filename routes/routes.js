
const express = require('express');
const router = express.Router();
const controller = require('../Controllers/controller');



router.get('/',controller.renderComingSoon);

router.get('/test',controller.test);



/*REST API*/
router.get('/api/companydb',controller.getAllCompanies);
router.get('/api/jobsdb',controller.getAllJobs);
router.get('/api/appliedJobs',controller.getAppliedJobs);

router.post('/api/addJobSeeker',controller.addJobSeeker);
router.post('/api/addJob',controller.addJob);
router.post('api/addCompany',controller.addCompany);




module.exports = router;