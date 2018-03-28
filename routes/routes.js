
const express = require('express');
const router = express.Router();
const controller = require('../Controllers/controller');



router.get('/',controller.renderComingSoon());

router.get('/test',controller.test());

module.exports = router;