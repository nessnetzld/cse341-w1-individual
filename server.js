const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

// Static files from frontend folder
app.use(express.static(path.join(__dirname, "..", "frontend")));

// Route root for index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
});

// Initialize the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
