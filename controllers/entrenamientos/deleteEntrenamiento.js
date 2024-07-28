import Entrenamiento from "../../models/Entrenamiento.js";

const deleteEntrenamiento = async (req, res) => {
    const { id } = req.params;

    try {
        const entrenamiento = await Entrenamiento.findByPk(id);
        if (!entrenamiento) {
            return res.status(404).json({ error: 'Entrenamiento no encontrado' });
        }

        await entrenamiento.destroy();

        res.status(200).json({ message: 'Entrenamiento eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar el entrenamiento:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export default deleteEntrenamiento;
