const express = require("express");
const app = express();
const hbs = require("hbs");
require('./hbs/helpers');
const port = process.env.PORT || 8080;

// Middleware para hacer publica la carpeta 'public' y mostrarla cuando se cargue el localhost:8080
// Esto a veces puede chocar con el GET de abajo, por eso hay que tener cuidado.
app.use(express.static(__dirname + "/public"));
//Express HBS Engine
hbs.registerPartials(__dirname + "/views/parciales");
app.set("view engine", "hbs");


app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Mart Seghe",
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(port, () => {
  console.log(`escuchando en puerto ${port}`);
});
