import Entrenamiento from "../../models/Entrenamiento.js";

const deleteEntrenamiento = async (req, res) => {
    const { ids } = req.body; 
    console.log("ids", ids);

    if (!Array.isArray(ids) || ids.length === 0) {
        return res.status(400).json({ error: 'No se proporcionaron IDs válidos' });
    }

    try {
        const entrenamientos = await Entrenamiento.findAll({
            where: { id: ids }
        });

        if (entrenamientos.length === 0) {
            return res.status(404).json({ error: 'No se encontraron entrenamientos para eliminar' });
        }

        await Entrenamiento.destroy({
            where: { id: ids }
        });

        res.status(200).json({ message: 'Entrenamientos eliminados correctamente' });
    } catch (error) {
        console.error('Error al eliminar los entrenamientos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export default deleteEntrenamiento;

