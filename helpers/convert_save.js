const { Parser } = require("@json2csv/plainjs");
const fs = require("fs");

const convertToCSV = (jsonData, filePath) => {
    try {
        const parseJsonToCSV = new Parser();

        const CSVData = parseJsonToCSV.parse(jsonData);

        fs.writeFileSync(filePath, CSVData);
    } catch (error) {
        throw new Error(`Error occurred while converting json file to csv ${error.message}`);
    }
}

module.exports = convertToCSV;