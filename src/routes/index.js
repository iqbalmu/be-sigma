const express = require('express');
const tesController = require('../controllers/tes-controller');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tes', tesController.tes)

module.exports = router;
