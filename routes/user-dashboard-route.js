var express = require('express');
var router = express.Router();
var db = require('../db');
const { getSessionEmail } = require('./sessionHandler.js');
const {requireLogin} = require('./middleware')

// router.get('/', function(req, res, next){
//         console.log(getSessionEmail());
//         res.render('D:/TechAsia11/views/dashboard.ejs', { sessionEmail: getSessionEmail() });
// })

router.get('/', requireLogin, async function (req, res, next) {
  // if (getSessionEmail() != 'Admin@gmail.com') {
    const result = await db.query(
      `SELECT * FROM registration WHERE email='${getSessionEmail()}';`
    );
    res.render('D:/TechAsia11/views/user-dashboard.ejs', { users: result });
  // }
  // else {
  //   const result = await db.query(
  //     `SELECT * FROM registration;`
  //   );
  //   res.render('D:/TechAsia11/views/dashboard.ejs', { users: result });
  // }

});
module.exports = router;


