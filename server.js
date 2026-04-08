import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = "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";

app.post("/chat", async (req, res) => {
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4.1-mini",
      input: req.body.message
    })
  });

  const data = await response.json();
  res.json({ reply: data.output[0].content[0].text });
});

app.listen(3000);
