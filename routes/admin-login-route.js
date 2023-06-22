var express = require('express');
const app = express();
var router = express.Router();
var db = require('../db');
const bcrypt = require('bcryptjs')
const { setSessionEmail } = require('./sessionHandler.js');


router.get('/', function (req, res, next) {
  res.render('D:/TechAsia11/views/admin-login.ejs')
});
router.post('/', async function (req, res, next) {
  const result = await db.query(
    `SELECT * FROM admin WHERE username='${req.query.username}';`
  );

  if (result.length === 0) {
    console.log(result)
    console.log("User not found.")
  }
  else {
    const user = result[0];
    // const passwordCompare = await bcrypt.compare(`${req.query.password}`, user.password);
    console.log(user);
    console.log("User found")
    // console.log(passwordCompare)
    if (req.query.password===user.password) {
      console.log("Logged in.");
      const username = req.query.username;
      req.session.username = username;
      req.session.authorized = true;
      setSessionEmail(username);
      console.log("req.session.username:", req.session.username); // Check the value
      res.redirect('/admin-dashboard');
      // res.render('D:/TechAsia11/views/admin-dashboard.ejs')

    //   const email = req.query.email;
    //   req.session.email = email;
    //   req.session.authorized = true;
    //   setSessionEmail(email);
    }
    else {
      console.log("Login fail.");
    }

  }

});
module.exports = router;
