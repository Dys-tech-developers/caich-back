import EntrenadorCategoria from '../../models/EntrenadorCategoria.js';
import Categoria from '../../models/Categoria.js';
import User from '../../models/User.js';

const associateCategoriaEntrenador = async (req, res) => {
    const { entrenador_id, categoria_id } = req.body;

    try {
        // Verificar que la categoría y el entrenador existan
        const categoria = await Categoria.findByPk(categoria_id);
        const entrenador = await User.findByPk(entrenador_id);

        if (!categoria || !entrenador) {
            return res.status(404).json({ error: 'Categoría o Entrenador no encontrado' });
        }

        // Crear la asociación en la tabla intermedia
        await EntrenadorCategoria.create({ entrenador_id, categoria_id });

        // Devolver una respuesta de éxito
        res.status(201).json({ message: 'Categoría asociada al entrenador correctamente' });
    } catch (error) {
        console.error('Error al asociar la categoría con el entrenador:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export default associateCategoriaEntrenador;
