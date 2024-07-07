import User from "../../models/User.js";
import Categoria from "../../models/Categoria.js";

// Actualizar categoría de usuario por ID
const updateUserCategory = async (req, res) => {
    const { userId, nombre } = req.body;

    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const categoria = await Categoria.findOne({ where: { entrenador_id: userId } });
        if (!categoria) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }

        categoria.nombre = nombre; // Actualiza el nombre de la categoría
        await categoria.save();

        res.status(200).json({ message: 'Categoría actualizada correctamente' });
    } catch (error) {
        console.error(`Error updating category name with user ID ${userId}:`, error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export default updateUserCategory;
