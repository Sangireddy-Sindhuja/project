const express = require('express');
const router = express.Router();
const Program = require('../models/Program');

router.get('/', async (req, res) => {
  const programs = await Program.find();
  res.json(programs);
});

router.post('/add', async (req, res) => {
  const { title, description, category, date } = req.body;
  const newProgram = new Program({ title, description, category, date });
  await newProgram.save();
  res.status(201).json(newProgram);
});

module.exports = router;