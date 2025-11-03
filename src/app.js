import express from "express";
import connection from "./db/connection.js";

const app = express();


app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente 🚀");
});

export default app;