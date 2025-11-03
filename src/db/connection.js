import { Sequelize } from "sequelize";
import { DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT } from "../config/config.js";

const connection = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "mysql",
  port: DB_PORT,
});

try {
  await connection.authenticate();
  console.log("✅ Conexión a la base de datos establecida correctamente.");
} catch (error) {
  console.error("❌ Error al conectar a la base de datos:", error);
}

export default connection;