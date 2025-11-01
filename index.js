import app from "./src/app.js";
import { SERVER_PORT } from "./src/config/config.js";

app.listen(SERVER_PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${SERVER_PORT}`);
});