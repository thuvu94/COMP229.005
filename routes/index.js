var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index.controller');

/* GET Home page. */
router.get('/', indexController.home);

/* GET About Me page. */
router.get('/about', indexController.about);

/* GET Projects page. */
router.get('/projects', indexController.projects);

/* GET Services page. */
router.get('/services', indexController.services);

/* GET Contact me page. */
router.get('/contact', indexController.contact);

/* GET Log in page. */
router.get('/login', indexController.login);



module.exports = router;
