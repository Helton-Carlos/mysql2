const express = require("express");
const app = express();
const User = require("./models/User");
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Pagina home");
});

app.post("/cadastrar", async (req, res) => {
    await User.create(req.body).then(() => {
      console.log("Enviado com sucesso");
    })
    .catch(() => {
      console.log("Erro!");
    });
  res.send("Recebido");
});

app.listen(3001, () => {
  console.log("Acesso ao Servidor");
});
