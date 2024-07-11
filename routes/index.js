import express from 'express';
import usersRouter from './users/usersRoutes.js'
import jugadorRouter from './jugadores/jugadorRoutes.js'
import categoriaRouter from './categorias/categoriaRoutes.js'
import scoutingRouter from './scouting/scoutingRoutes.js'

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Inicio de la aplicacion' });
});

router.use("/", usersRouter)
router.use("/", jugadorRouter)
router.use("/", categoriaRouter)
router.use("/", scoutingRouter)

export default router;