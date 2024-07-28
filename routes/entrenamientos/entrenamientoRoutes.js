import { Router } from "express";

import createEntrenamiento from "../../controllers/entrenamientos/createEntrenamiento.js";
import updateEntrenamiento from "../../controllers/entrenamientos/updateEntrenamiento.js";
import getEntrenamientos from "../../controllers/entrenamientos/getEntrenamientos.js";
import deleteEntrenamiento from "../../controllers/entrenamientos/deleteEntrenamiento.js";

let router = Router()

router.post("/create-entrenamiento", createEntrenamiento)
router.put("/update-entrenamiento/:id", updateEntrenamiento)
router.get("/get-entrenamientos", getEntrenamientos)
router.delete("/delete-entrenamiento/:id", deleteEntrenamiento)


export default router