const express = require("express");
const app = express();
const port = 3000; // Set your desired port number
require("dotenv").config();

app.use(express.json());
const axios = require("axios");

app.post("/chat", async (req, res) => {
  const { message } = req.body;
  try {
    const response = await axios.post(
      process.env.apiUrl,
      {
        prompt: message,
        max_tokens: 150,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.apiKey}`,
        },
      }
    );

    const reply = response.data.choices[0].text.trim();
    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(port, () => {
    //console.log(process.env.apiKey,process.env.apiUrl)
  console.log(`Server is running on http://localhost:${port}`);
});
