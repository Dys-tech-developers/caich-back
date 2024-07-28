import Categoria from '../../models/Categoria.js'
import User from '../../models/User.js';

const obtenerCategorias = async (req,res) => {
    try {
        const categorias = await Categoria.findAll({
            include: [{
                model: User,
                through: { attributes: [] }, // Excluir atributos de la tabla intermedia
                attributes: ['nombre'] // Atributos del modelo User que quieres incluir
            }]
        });

        res.status(200).json(categorias);
        
    } catch (error) {
        console.error('Error al obtener Categorías:', error);
        res.status(500).json({ error: 'Error interno en el servidor' });
    }
}

export default obtenerCategorias