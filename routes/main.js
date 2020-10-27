const express = require('express');
const router = express.Router();
const mainPageController = require('../controllers/mainController');

router.get('/',mainPageController.fetchPersonData);

module.exports=router;