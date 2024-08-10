import Entrenamiento from "../../models/Entrenamiento.js";

const updateEntrenamiento = async (req, res) => {
    const { id } = req.params;
    const { dias_semana, hora, categoria_id } = req.body;

    try {
        const entrenamiento = await Entrenamiento.findByPk(id);
        if (!entrenamiento) {
            return res.status(404).json({ error: 'Entrenamiento no encontrado' });
        }

        entrenamiento.dias_semana = dias_semana || entrenamiento.dias_semana;
        entrenamiento.hora = hora || entrenamiento.hora;
        entrenamiento.categoria_id = categoria_id || entrenamiento.categoria_id;

        await entrenamiento.save();

        res.status(200).json({ entrenamiento });
    } catch (error) {
        console.error('Error al actualizar el entrenamiento:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export default updateEntrenamiento;
