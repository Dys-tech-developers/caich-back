import { Router } from "express";

import createConvocatoria from "../../controllers/convocatoriaPartido/createConvocatoria.js";
import updateConvocatoria from "../../controllers/convocatoriaPartido/updateConvocatoria.js";
import deleteConvocatoria from "../../controllers/convocatoriaPartido/deleteConvocatoria.js";
import getConvocatoriasByPartido from "../../controllers/convocatoriaPartido/getConvocadosPorPartido.js";

const router = Router()

router.post("/create-convocatoria-partido", createConvocatoria)
router.put("/update-convocatoria-partido/:id", updateConvocatoria)
router.delete("/delete-convocatoria-partido/:id", deleteConvocatoria)
router.get("/get-convocados-por-partido/:partido_id", getConvocatoriasByPartido)

export default router