require("dotenv").config();
const express = require("express");
const defaultRouter = require("./routes/default");
const fetchRouter = require("./routes/fetch");

const PORT = process.env.PORT || 3000;
const app = express();

// middleware
// Client -> Middleware -> Server -> Client
app.use(express.json());
app.use(defaultRouter);
app.use(fetchRouter);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Connected at Port: ${PORT}`);
});

module.exports = app;