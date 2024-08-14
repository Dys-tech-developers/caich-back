import { Router } from "express";

import createPartido from "../../controllers/partidos/createPartido.js";
import getPartidos from "../../controllers/partidos/getPartido.js";
import updatePartido from "../../controllers/partidos/updatePartido.js";
import deletePartido from "../../controllers/partidos/deletePartido.js";

const router = Router()

router.post("/create-partido", createPartido)
router.get("/get-partidos", getPartidos)
router.put("/update-partido/:id", updatePartido)
router.delete("/delete-partido/:id", deletePartido)

export default router