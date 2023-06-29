var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/', function (req, res, next) {

});

router.post('/', async function (req, res, next) {

  const result = await db.query(
    `INSERT INTO statistics(phone1, on_off, count, session_time, mac_id, time, date)
     VALUES 
     ('${req.query.phone}','${req.query.on_off}','${req.query.count}','${req.query.session_time}','${req.query.mac_id}', CURRENT_TIME(), CURDATE());`
  );

  let message = 'Error adding statistics';

  if (result.affectedRows) {
    message = 'Statistics added successfully';
    console.log({ message: message })
    res.send("Wohooo")


  }
});
module.exports = router;

