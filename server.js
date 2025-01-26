// server.js

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Store the current servo state
let servoState = "OFF";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to get the servo state
app.get("/servo", (req, res) => {
  res.json({ state: servoState });
});

// Endpoint to update the servo state
app.post("/servo", (req, res) => {
  const { state } = req.body;

  if (state === "ON" || state === "OFF") {
    servoState = state;
    res.json({ success: true, state: servoState });
  } else {
    res.status(400).json({ success: false, message: "Invalid state" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
