import express from 'express'
import createUser from '../../controllers/users/createUser.js';
import { getUsers, getEntrenadores } from '../../controllers/users/getUser.js';
import updateUserCategory from '../../controllers/users/updateCategoriaEntrenador.js';
import createCategoria from '../../controllers/categorias/crearCategoria.js';
import login from "../../controllers/users/login.js"
import logout from "../../controllers/users/logout.js"
const router = express.Router();


/* GET users listing. */
router.get('/user', function(req, res, next) {
  res.send('Ruta de usuarios');
});

router.post("/create-user",createUser);
router.get("/get-users", getUsers);
router.get("/get-entrenadores", getEntrenadores)
router.put("/update-categoria", updateUserCategory)
router.post("/auth-login", login)
router.post("/auth-logout", logout)
//categoriaRoutes
router.post("/crear-categoria", createCategoria)

export default router

