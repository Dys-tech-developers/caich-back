import EntrenadorCategoria from '../../models/EntrenadorCategoria.js';
import Categoria from '../../models/Categoria.js';
import User from '../../models/User.js';

const deleteCategoriaEntrenador = async (req, res) => {
    const { entrenador_id, categoria_id } = req.body;

    try {
        // Verificar que la categoría y el entrenador existan
        const categoria = await Categoria.findByPk(categoria_id);
        const entrenador = await User.findByPk(entrenador_id);

        if (!categoria || !entrenador) {
            return res.status(404).json({ error: 'Categoría o Entrenador no encontrado' });
        }

        // Buscar la asociación en la tabla intermedia
        const association = await EntrenadorCategoria.findOne({
            where: { entrenador_id, categoria_id },
        });

        if (!association) {
            return res.status(404).json({ error: 'Asociación no encontrada' });
        }

        // Eliminar la asociación
        await association.destroy();

        res.status(200).json({
            message: 'Asociación eliminada correctamente',
        });
    } catch (error) {
        console.error('Error al eliminar la asociación:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export default deleteCategoriaEntrenador;
