const express = require('express');
const router = express.Router();
// Note for tutorial writer if he doesn't fix "./Character"
const Character = require('./character');

router.get('/', async (req, res) => {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;