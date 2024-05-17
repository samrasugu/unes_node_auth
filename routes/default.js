const express = require("express");
const defaultRouter = express.Router();

defaultRouter.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

module.exports = defaultRouter;