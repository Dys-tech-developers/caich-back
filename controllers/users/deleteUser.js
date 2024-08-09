import User from "../../models/User.js";

// Cambiar estado de usuario a "eliminado" por ID
const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        user.estado = 'eliminado'; // Cambia el estado del usuario a "eliminado"
        await user.save();

        res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        console.error(`Error deleting user with ID ${id}:`, error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export default deleteUser;
