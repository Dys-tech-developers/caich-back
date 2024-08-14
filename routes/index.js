import express from 'express';
import usersRouter from './users/usersRoutes.js'
import jugadorRouter from './jugadores/jugadorRoutes.js'
import categoriaRouter from './categorias/categoriaRoutes.js'
import scoutingRouter from './scouting/scoutingRoutes.js'
import entrenamientoRouter from './entrenamientos/entrenamientoRoutes.js'
import asistenciaRouter from "./asistencias/asistenciasRoutes.js"
import pagoJugadorRouter from "./pagojugador/pagoJugadorRoutes.js"
import partidoRouter from "./partidos/partidoRoutes.js"
import convocatoriaRouter from "./convocatoriaPartido/convocatoriaPartidoRoutes.js"

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Inicio de la aplicacion' });
});

router.use("/", usersRouter)
router.use("/", jugadorRouter)
router.use("/", categoriaRouter)
router.use("/", scoutingRouter)
router.use("/", entrenamientoRouter)
router.use("/", asistenciaRouter)
router.use("/", pagoJugadorRouter)
router.use("/", partidoRouter)
router.use("/", convocatoriaRouter)

export default router;