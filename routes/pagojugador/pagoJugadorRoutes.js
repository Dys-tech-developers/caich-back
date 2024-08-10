import { Router } from "express";

import createPagoJugador from "../../controllers/pagoJugador/createPagoJugador.js";
import updatePagoJugador from "../../controllers/pagoJugador/updatePagoJugador.js";
import getPagosJugadores from "../../controllers/pagoJugador/getPagoJugador.js";
import deletePagoJugador from "../../controllers/pagoJugador/deletePagoJugador.js";

const router = Router()

router.post("/crear-pago-jugador", createPagoJugador)
router.put("/update-pago-jugador/:id", updatePagoJugador)
router.get("/get-pago-jugador", getPagosJugadores)
router.delete("/delete-pago-jugador/:id", deletePagoJugador)

export default router