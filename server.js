// Imports
const express = require("express");
const path = require("path");

//Express App
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public')));
// Route
app.use(require("./controllers/dish-routes"));

// Listen
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);