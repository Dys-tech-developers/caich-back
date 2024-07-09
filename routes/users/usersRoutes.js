import express from 'express'
import createUser from '../../controllers/users/createUser.js';
import { getUsers, getEntrenadores } from '../../controllers/users/getUser.js';
<<<<<<< HEAD:routes/users/users.js
import updateUserCategory from '../../controllers/users/updateCategoriaEntrenador.js';
import createCategoria from '../../controllers/categorias/crearCategoria.js';
import login from "../../controllers/users/login.js"
import logout from "../../controllers/users/logout.js"
=======


>>>>>>> 7f7609b491f8e56f63bf5709de5bd097aa8a9214:routes/users/usersRoutes.js
const router = express.Router();


/* GET users listing. */
router.get('/user', function(req, res, next) {
  res.send('Ruta de usuarios');
});

router.post("/create-user",createUser);
router.get("/get-users", getUsers);
router.get("/get-entrenadores", getEntrenadores)
<<<<<<< HEAD:routes/users/users.js
router.put("/update-categoria", updateUserCategory)
router.post("/auth-login", login)
router.post("/auth-logout", logout)
//categoriaRoutes
router.post("/crear-categoria", createCategoria)
=======



>>>>>>> 7f7609b491f8e56f63bf5709de5bd097aa8a9214:routes/users/usersRoutes.js

export default router

