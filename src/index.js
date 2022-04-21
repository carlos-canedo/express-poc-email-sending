const express = require("express");
require("dotenv").config();
const env = require("./config/envswitcher");
const mailer = require("./mailer");

const PORT = env.get("PORT");

const app = express();

app.post("/api/v1/mailer", async (req, res) => {
  try {
    const info = await mailer.send();

    res.json({
      id: info.messageId,
      from: info.envelope.from,
      to: info.envelope.to,
    });
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`server runnig on port ${PORT}`);
});
