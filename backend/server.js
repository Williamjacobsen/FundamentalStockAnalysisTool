const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send("Success!");
});

app.post("/figi", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.openfigi.com/v2/mapping",
      //[{ idType: "TICKER", idValue: "AAPL" }],
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          //"X-OPENFIGI-APIKEY": "YOUR_API_KEY", // no api key, max 25 requests per minute
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res
      .status(error.response ? error.response.status : 500)
      .send(error.response ? error.response.data : "Error fetching data");
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
