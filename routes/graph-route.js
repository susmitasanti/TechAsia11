var express = require('express');
var router = express.Router();
var db = require('../db');
const Chart = require('chart.js');
// const canvas = document.getElementById('myChart');
// const ctx = canvas.getContext('2d');

router.get('/', function (req, res, next) {


});
router.post('/', async function (req, res, next) {
    // const result = await db.query(
    //     `SELECT on_off, time FROM statistics WHERE email='${req.query.email}';`
    // );
    const query = 'SELECT on_off, time FROM statistics WHERE date=2023-06-23';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return;
        }
        console.log('Fetched data:', results);
    });

    const labels = results.map((row) => row.on_off);
    const data = results.map((row) => row.time);

    res.render('D:/TechAsia11/views/myChart.ejs', {})




});




module.exports = router;
