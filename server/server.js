const { createUser } = require("./controller/signUp.ts");
const express = require("express");

const app = express();
const port = 80;
const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

(async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Sequelize connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Blog-For-Turkey." });
});

app.post("/createUser", async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const user = await db.models.User.findOne({
      where: { username: username },
      where: { email: email },
    });
    if (user === null) {
      await createUser({ username, password, email });
      await res.json({ success: "success" });
    } else {
      await res.send("user already exists");
    }
  } catch (error) {
    res.json({ error: error });
  }
});

// set port, listen for requests
app.listen(port, (err) => console.log(err ? err : `listening on port ${port}`));
