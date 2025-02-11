var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Daniel Frank | Senior Software Engineer',
    skills: req.skills,
    techs: req.techs,
    }
  );
});

module.exports = router;
