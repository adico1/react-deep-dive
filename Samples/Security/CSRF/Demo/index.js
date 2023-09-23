const express = require('express');
const bodyParser = require('body-parser');

const serverUrl = process.env.SANDBOX_URL;

const app = express();
app.use(bodyParser.json());

let balance = 1000;  // Simplified balance for demonstration

app.post('/transfer', (req, res) => {
  const { amount, to } = req.body;
  balance -= amount;  // Deduct amount from balance
  console.log(`Transferred ${amount} to ${to}. New balance: ${balance}`);
  res.send('Transfer successful');
});

app.listen(3001, () => {
  console.log(`Server is running on ${serverUrl}`);
});