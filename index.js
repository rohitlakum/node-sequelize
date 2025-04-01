const express = require('express');
const app = express();
const indexRoute = require('./routers/index');
const { PORT } = require('./config/env');

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
const SERVER_PORT = PORT || 5000;
app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`);
});