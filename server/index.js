// backend/index.js
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // Allow Vite frontend to access APIs
app.use(express.json()); // For parsing JSON bodies

// Example API
app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello from Node.js backend!" });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Backend server running at http://localhost:${PORT}`);
});
