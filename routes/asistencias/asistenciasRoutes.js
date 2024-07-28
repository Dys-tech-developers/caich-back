import { Router } from "express";

import registrarAsistencias from "../../controllers/asistencias/registrarAsistencias.js";

let router = Router()

router.post("/registrar-asistencias", registrarAsistencias)


export default router