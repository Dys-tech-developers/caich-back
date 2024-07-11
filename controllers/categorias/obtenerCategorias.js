import Categoria from '../../models/Categoria.js'

const obtenerCategorias = async (req,res) => {
    try {
        const categorias = await Categoria.findAll()
        res.status(200).json(categorias);
        
    } catch (error) {
        console.error('Error al obtener Categorías:', error);
        res.status(500).json({ error: 'Error interno en el servidor' });
    }
}

export default obtenerCategorias