import { Router } from 'express'
import createJugador from '../../controllers/jugadores/createJugador.js';
import updateJugador from '../../controllers/jugadores/updateJugador.js';
import getJugadores from '../../controllers/jugadores/getJugadores.js';
import deleteJugador from '../../controllers/jugadores/deleteJugador.js';
import getJugadorById from '../../controllers/jugadores/getJugadorById.js';

const router = Router();

router.post("/create-jugador", createJugador)
router.put("/update-jugador/:id", updateJugador)
router.get("/get-jugadores", getJugadores)
router.put("/delete-jugador/:id", deleteJugador)
router.get("/get-jugador-qr/:id", getJugadorById)

export default router;