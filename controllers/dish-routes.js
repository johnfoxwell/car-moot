const router = require('express').Router();
const path = require('path');

// Get route
router.get('/', async (req, res) => {
  // Here, index.html is rendered
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

module.exports = router;
