const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors());

const apiKey = '6b29d7158039c22af8fcd52569ff9a77';  // Store securely, e.g., in .env
const baseUrl = 'https://api.adbumedia.com';  // Confirm actual URL

app.get('/api/offers', async (req, res) => {
    try {
        const response = await axios.get(`${baseUrl}/offers`, {
            headers: { 'Authorization': `Bearer ${apiKey}` }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch offers' });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));