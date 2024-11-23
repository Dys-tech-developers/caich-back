import { Router } from 'express'
import createCategoria from '../../controllers/categorias/createCategoria.js';
import updateUserCategory from '../../controllers/users/updateCategoriaEntrenador.js';
import obtenerCategorias from '../../controllers/categorias/obtenerCategorias.js';
import associateCategoriaEntrenador from '../../controllers/categorias/asociarCategoriaEntrenador.js';
import deleteCategoriaEntrenador from '../../controllers/categorias/deleteCategoriaEntrenador.js';

const router = Router();

router.post("/crear-categoria", createCategoria)
router.get("/obtener-categorias", obtenerCategorias)
router.put("/update-categoria", updateUserCategory)
router.post("/categoria-entrenador", associateCategoriaEntrenador)
router.delete("/eliminar-categoria-entrenador", deleteCategoriaEntrenador)

export default router;