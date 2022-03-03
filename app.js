const express = require("express");
const app = express();
const db = require("./models/db");
app.get("/", async (req, res) => {
  res.send("Pagina home");
});
app.post("/cadastrar", async (req, res) => {
    res.send("Pagina cadastrar");
  });
app.listen(3000, () => {
  console.log("Acesso ao Servidor");
});
