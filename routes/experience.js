var express = require('express');
var router = express.Router();
const pageTitle = 'Experience';
router.get('/', function(req, res, next) {
  const searchParams = req.query;
  let relatedParams = [];
    if(searchParams){
      console.debug('parameter route triggered:', searchParams);
      relatedParams = relatedSearchParams(searchParams, req.experiences);
    }
    res.render('experience', { 
        title: `Daniel Frank | ${pageTitle}`,
        experiences: req.experiences,
        search: relatedParams,
        }
      );
});

function relatedSearchParams(searchParams, experiences){
  console.debug(`Called relatedSearchParams`)
  var relatedSearchParams= [];
  Object.keys(searchParams).forEach(key=>{
      experiences.forEach(exp =>{
        description = exp.description.split(' ');
        if(description.includes(searchParams[key]) ){
          relatedSearchParams.push(searchParams[key]);
        }
        
        exp.duties.forEach(duty =>{
          var duty = duty.duty.split(/[\s,]+/).filter(Boolean);
          console.debug(`duty array: ${duty}`);
          if(duty.includes(searchParams[key])){
            relatedSearchParams.push(searchParams[key]);
          }
        })
      })
  });
  return relatedSearchParams;
}

module.exports = router;
