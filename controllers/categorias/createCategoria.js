// CREAR CATEGORIA Y ASOCIARLA A UN ENTRENADOR
import Categoria from '../../models/Categoria.js';

const createCategoria = async (req, res) => {
    const { nombre } = req.body; // SACAR DESESTRUTURACION
    try {
        // Crear la categoría en la base de datos
        const nuevaCategoria = await Categoria.create({
            nombre: nombre
        });

        // Devolver una respuesta con la categoría creada
        res.status(201).json({ categoria: nuevaCategoria });
    } catch (error) {
        console.error('Error al crear la categoría:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export default createCategoria;