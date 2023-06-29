var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/', async function (req, res, next) {
  res.render('D:/TechAsia11/views/admin-profile.ejs')

});
router.post('/', async function (req, res, next) {


});
module.exports = router;
