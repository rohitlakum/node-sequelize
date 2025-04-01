require('dotenv').config()
const express = require('express');
const app = express();
const indexRoute = require('./routers/index');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Global route
app.use("/api/v1", indexRoute)

// Route not found
app.use("*", (req, res) => {
    res.status(404).json({ message: "Route not found" })
})

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});