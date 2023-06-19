var express = require('express');
var router = express.Router();
var db = require('../db');
const { getSessionEmail } = require('./sessionHandler.js');

// router.get('/', function(req, res, next){
//         console.log(getSessionEmail());
//         res.render('D:/TechAsia11/views/dashboard.ejs', { sessionEmail: getSessionEmail() });
// })

router.get('/', async function (req, res, next) { 
    const result = await db.query(
      `SELECT * FROM registration;`
    );
    res.render('D:/TechAsia11/views/admin-dashboard.ejs', { users: result });
  

});
module.exports = router;


