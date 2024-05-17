require("dotenv").config();
const express = require("express");
const fetchRouter = express.Router();
const fetchData = require("../helpers/fetch");
const convertSaveCSV = require("../helpers/convert_save");

const endpoint = process.env.ENDPOINT_URL;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const filePath = './csvfile.csv';

fetchRouter.get("/fetch_file", async (req, res) => {
    try {
        // get json file from endpoint
        const jsonData = await fetchData(endpoint, username, password);

        //  convert json file to csv and save it locally
        convertSaveCSV(jsonData, filePath);

        res.send("JSON file converted to csv successfully. File at ./csvfile.csv");
    } catch (error) {
        console.log(`Error occurred while converting json file to csv ${error.message}`);
        res.status(500).send("An error occurred");
    }
});

module.exports = fetchRouter;