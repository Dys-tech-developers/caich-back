import { Router } from 'express'
import createCategoria from '../../controllers/categorias/createCategoria.js';
import updateUserCategory from '../../controllers/users/updateCategoriaEntrenador.js';
import obtenerCategorias from '../../controllers/categorias/obtenerCategorias.js';
import associateCategoriaEntrenador from '../../controllers/categorias/asociarCategoriaEntrenador.js';

const router = Router();

router.post("/crear-categoria", createCategoria)
router.get("/obtener-categorias", obtenerCategorias)
router.put("/update-categoria", updateUserCategory)
router.post("/categoria-entrenador", associateCategoriaEntrenador)

export default router;