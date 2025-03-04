var express = require('express');
var router = express.Router();
const pageTitle = 'Home';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: `Daniel Frank | ${pageTitle}`,
    skills: req.skills,
    techs: req.techs,
    accomplishments: req.accomplishments,
    experiences: req.experiences,
    pageTitle: pageTitle
    }
  );
});

module.exports = router;
