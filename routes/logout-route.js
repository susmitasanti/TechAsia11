
var express = require('express');
const app = express();
var router = express.Router();
var db = require('../db');
const bcrypt = require('bcryptjs')
const { setSessionEmail } = require('./sessionHandler.js');


router.get('/', function (req, res, next) {
  res.render('D:/TechAsia11/views/login.ejs')
});

router.post('/', async function (req, res, next) {
    // app.get('/logout', (req, res) => {
        req.session.destroy((err) => {
          if (err) {
            console.log(err);
          }
          console.log("Chala byee")
          // res.render('D:/TechAsia11/views/login.ejs')
          // res.redirect('http:/localhost:3000/logout')
        });
      // });

});
module.exports = router;
