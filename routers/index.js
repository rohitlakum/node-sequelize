const express = require('express');
const router = express.Router();
const authRouter = require('./auth.routers');

// Routes
router.use('/auth', authRouter)

router.get("/test", (req, res) => {
    res.status(200).json({ message: "Hello Node Sequelize" })
})

module.exports = router