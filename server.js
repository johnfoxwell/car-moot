// Imports
const express = require("express");

// Add port
const PORT = process.env.PORT || 3001;

// App represents the api we are creating
const app = express();

// Use the index file in public folder for homepage
app.use(express.static('public'));

// Get route for home page
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Listen
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);