// src/routes/router.js
import { Router } from "express";
import usersRoutes from "./usersRoutes.js";

const router = Router();

// Este define la ruta /app/users
router.use("/users", usersRoutes);

// Test: para ver si el router principal responde
router.get("/ping", (req, res) => {
  res.send("Router principal funcionando ✅");
});

export default router;