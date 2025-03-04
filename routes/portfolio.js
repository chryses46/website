var express = require('express');
var router = express.Router();
const pageTitle = 'Portfolio';

router.get('/', function(req, res, next) {
    res.render('portfolio', { 
        title:  `Daniel Frank | ${pageTitle}`,
        pageTitle: pageTitle
        }
      );
});

module.exports = router;
