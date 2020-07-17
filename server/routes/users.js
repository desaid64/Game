var express = require('express');
var router = express.Router();
const db = require("../src/config/db.js");

// Get user info
router.get('/', function(req, res, next) {
  const sql = `select * from GameUser;`
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results[0][0]);
  });
});

//start game
router.post('/start', function(req, res, next) {
  const sql = `CALL startGame();`
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results[0][0]);
  });
});

//end game
router.get('/end/:userID', function(req, res, next) {
  const sql = `CALL endGame(?);`
  db.query(sql, [req.params.userID],(err, results) => {
    if (err) throw err;
    res.json(results[0][0]);
  });
});
module.exports = router;
