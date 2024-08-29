import { Router } from "express";

import registrarAsistencias from "../../controllers/asistencias/registrarAsistencias.js";
import obtenerAsistencias from "../../controllers/asistencias/getAsistencias.js";
let router = Router()

router.post("/registrar-asistencias", registrarAsistencias)
router.get("/obtener-asistencias", obtenerAsistencias)


export default router