// CREAR CATEGORIA Y ASOCIARLA A UN ENTRENADOR
import Categoria from '../../models/Categoria.js';
import User from '../../models/User.js';


const createCategoria = async (req, res) => {
    const { nombre, entrenador_id } = req.body;
    try {
        // Crear la categoría en la base de datos
        const nuevaCategoria = await Categoria.create({
            entrenador_id: entrenador_id,
            nombre: nombre
        });

        // Buscar al usuario (entrenador) por su ID
        const usuario = await User.findByPk(entrenador_id);

        // Asociar la categoría al usuario
        await usuario.addCategoria(nuevaCategoria);

        // Devolver una respuesta con la categoría creada
        res.status(201).json({ categoria: nuevaCategoria });
    } catch (error) {
        console.error('Error al crear la categoría y asociarla:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export default createCategoria;