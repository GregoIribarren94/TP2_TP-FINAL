import express from "express";
import connection from "./db/connection.js";
import router from "./routes/router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

await connection.sync({ force: false });

// 👇 esto define el prefijo /app
app.use("/app", router);

app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente 🚀");
});

export default app;