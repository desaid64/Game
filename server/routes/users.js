var express = require('express');
var router = express.Router();
const db = require("../src/config/db.js");

// Get user info
router.get('/:userID', function(req, res, next) {
  const sql = 'Call getUserById(?);'
  db.query(sql, [req.params.userID],(err, results) => {
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
router.post('/end', function(req, res, next) {
  const sql = `CALL endGame(?,?);`
  db.query(sql, [req.body.userID,req.body.answer],(err, results) => {
    if (err) throw err;
    res.json(results[0][0]);
  });
});
module.exports = router;
