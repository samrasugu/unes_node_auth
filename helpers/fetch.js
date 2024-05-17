const axios = require("axios")

const fetch = async(endpoint, username, password) => {
    try {
        const res = await axios.get(endpoint, {
            auth: {
                username: username,
                password: password
            }
        });
        return res.data;
    } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`); 
    }
}

module.exports = fetch;