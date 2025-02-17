var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('experience', { 
        title: 'Daniel Frank | Experience',
        skills: req.skills,
        techs: req.techs,
        accomplishments: req.accomplishments,
        experiences: req.experiences
        }
      );
});

module.exports = router;
