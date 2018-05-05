
const express = require('express');
const router = express.Router();
const controller = require('../Controllers/controller');



router.get('/',controller.renderComingSoon);

router.get('/test',controller.test);
router.get('/companydb',controller.getAllCompanies);
router.get('/jobsdb',controller.getAllJobs);



/*API Server*/
/*
router.post('/api',controller.createJob);
router.get('api/job',controller.findAllJobs);
router.get('api/')
*/
module.exports = router;