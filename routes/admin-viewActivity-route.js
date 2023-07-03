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
        WHERE r.email='${req.query.email}');`
  );
  res.render('D:/TechAsia11/views/admin-viewActivity.ejs', { users: result });
});
router.post('/',requireLogin, async function(req, res, next){
    res.redirect(`/admin-viewActivity?email=${req.query.email}`)
})
module.exports = router;