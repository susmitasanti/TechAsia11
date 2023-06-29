var express = require('express');
var router = express.Router();
var db = require('../db');
const { getSessionEmail } = require('./sessionHandler.js');
const { requireLogin } = require('./middleware')

router.get('/', requireLogin, async function (req, res, next) {

  const result = await db.query(
    `SELECT * FROM statistics WHERE phone1=
      (SELECT phone
        FROM registration as r
        WHERE r.email='${getSessionEmail()}');`
  );
  res.render('D:/TechAsia11/views/user-dashboard.ejs', { users: result });
});
module.exports = router;


