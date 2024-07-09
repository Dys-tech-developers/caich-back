import { Router } from 'express'
import createCategoria from '../../controllers/categorias/createCategoria.js';
import updateUserCategory from '../../controllers/users/updateCategoriaEntrenador.js';
const router = Router();

router.post("/crear-categoria", createCategoria)
router.put("/update-categoria", updateUserCategory)
export default router;