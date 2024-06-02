import express from 'express';
import usersRouter from './users/users.js'

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Inicio de la aplicacion' });
});

router.use("/", usersRouter)

export default router;

