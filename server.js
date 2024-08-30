// server.js - Basic server setup with Express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'src' directory
app.use(express.static("src"));

// Serve the main index.html on the root route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/index.html");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

