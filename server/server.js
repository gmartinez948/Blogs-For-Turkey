const express = require("express");

const app = express();
const port = 3000;
const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

(async () => {
  await db.sequelize.sync;
})();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Blog-For-Turkey." });
});

// set port, listen for requests
app.listen(port, (err) => console.log(err ? err : "listening on port 3000"));
