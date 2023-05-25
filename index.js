const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api", (req, res) => {
  const message = "Hoje eu consigo essa vaga!";
  const email = "example@example.com";
  const cpf = "123.456.789-00";
  res.json({ message, email, cpf });
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});