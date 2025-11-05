// src/routes/router.js
import { Router } from "express";
import usersRoutes from "./usersRoutes.js";

const router = Router();

router.use("/users", usersRoutes);


router.get("/ping", (req, res) => {
  res.send("Router principal funcionando ✅");
});

export default router;