var express = require('express');
var router = express.Router();
const VotingType = require('../models/VotingType');

/* CRUD VOTING TYPES */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
