const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 3001;
const serverUrl = process.env.CODESANDBOX_HOST.replace("$PORT", PORT);

let balance = 1000; // Simplified balance for demonstration

const app = express();
app.use(bodyParser.json());
app.use(cors());

const authenticate = (next) => {
  // Simplified authenticate for demonstration - user ia already authenticated
  next();
};

app.post("/transfer", [authenticate], (req, res) => {
  const { amount, to } = req.body;
  balance -= amount; // Deduct amount from balance
  console.log(`Transferred ${amount} to ${to}. New balance: ${balance}`);
  res.send("Transfer successful");
});

app.use("/*", (req, res) => {
  console.log("catch all routes", req.url);
  res.send("not is use");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${serverUrl}`);
});
