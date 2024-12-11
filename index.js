// index.js or app.js
const express = require('express');
const axios = require('axios');
const app = express();

// Proxy endpoint
app.get('/proxy/swagger.json', async (req, res) => {
    try {
        const response = await axios.get('https://horoscope-app-api.vercel.app/api/v1/swagger.json');
        res.json(response.data);  // Forward the Swagger JSON data
    } catch (error) {
        res.status(500).send('Error fetching Swagger JSON');
    }
});

// Listen on a port (Render uses port 10000 for apps by default)
app.listen(process.env.PORT || 10000, () => {
    console.log('Proxy server running');
});
