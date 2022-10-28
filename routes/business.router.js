var express = require('express');
var router = express.Router();
let businessController = require('../controllers/business.controller');

/*Get inventory listing. */
router.get('/business', businessController.businessList);

module.exports = router;
