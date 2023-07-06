var express = require('express');
var router = express.Router();
var db = require('../db');
const { setSessionUsername, getSessionUsername } = require('./admin-sessionHandler.js');
const { admin_requireLogin } = require("./admin-middleware")

router.get('/', admin_requireLogin, async function (req, res, next) {
  res.render('D:/TechAsia11/views/admin-changePassword.ejs', { alert: 'changed' });
});

router.post('/', async function (req, res, next) {
  if (req.query.change == 'true') {
    db.query(`UPDATE admin SET password = '${req.query.newPassword}' WHERE username='${getSessionUsername()}';`)
  }
  else{
    res.render('D:/TechAsia11/views/admin-changePassword.ejs', { alert: 'error' });
  }
});

module.exports = router;