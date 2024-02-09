// app.js
const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

const CHATGPT_API_KEY = "YOUR_CHATGPT_API_KEY"; // Replace with your API key

app.post("/generate-quote", async (req, res) => {
  const { theme } = req.body;

  if (!theme) {
    return res.status(400).json({ error: "Theme parameter is required." });
  }

  try {
    const chatGptResponse = await axios.post(
      "https://api.openai.com/v1/engines/davinci-codex/completions",
      {
        prompt: `Generate an inspirational quote about ${theme}`,
        max_tokens: 50,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${CHATGPT_API_KEY}`,
        },
      }
    );

    const quote = chatGptResponse.data.choices[0].text.trim();
    res.json({ quote });
  } catch (error) {
    console.error("Error generating quote:", error.message);
    res.status(500).json({ error: "Failed to generate quote." });
  }
});

// ... remaining code ...

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
