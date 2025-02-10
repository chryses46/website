const express = require('express');
const router = express.Router();
const SampleModel = require('../models/sampleModel');

router.get('/', async (req, res) => {
  const samples = await SampleModel.findAll();
  res.render('index', { title: 'Sample Data', samples });
});

module.exports = router;