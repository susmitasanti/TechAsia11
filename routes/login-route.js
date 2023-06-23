var express = require('express');
// const app = express();
var router = express.Router();
var db = require('../db');
const bcrypt = require('bcryptjs')
const { setSessionEmail } = require('./sessionHandler.js');

var email=''
router.get('/', function (req, res, next) {
  res.render('D:/TechAsia11/views/login.ejs', {alert: false})
});
router.post('/', async function (req, res, next) {
  const result = await db.query(
    `SELECT * FROM registration WHERE email='${req.query.email}';`
  );

  if (result.length === 0) {
    console.log(result)
    console.log("User not found.")
  }
  else {
    const user = result[0];
    const passwordCompare = await bcrypt.compare(`${req.query.password}`, user.password);
    console.log(user);
    console.log("User found")
    console.log(passwordCompare)
    if (passwordCompare) {
      console.log("Logged in.");
      email = req.query.email;
      req.session.email = email;
      req.session.authorized = true;
      setSessionEmail(email);
      console.log("req.session.email:", req.session.email); // Check the value
      res.redirect('/user-profile');
    }
    else {
      console.log("Login fail.");
    }

  }

});
module.exports = router;
