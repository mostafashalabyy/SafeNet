const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/scan-url", async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: "URL is required" });

  try {
    const response = await axios.post(
      "https://www.virustotal.com/api/v3/urls",
      { url },
      {
        headers: {
          "x-apikey": process.env.VIRUSTOTAL_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    const analysisId = response.data.data.id;
    const result = await axios.get(
      `https://www.virustotal.com/api/v3/analyses/${analysisId}`,
      {
        headers: { "x-apikey": process.env.VIRUSTOTAL_API_KEY },
      }
    );

    res.json(result.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to scan URL" });
  }
});

module.exports = router;
