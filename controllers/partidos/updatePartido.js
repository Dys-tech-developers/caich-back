import Partido from "../../models/Partido.js";

const updatePartido = async (req, res) => {
    const { id } = req.params;
    const { fecha, rival, estadio, tipo_partido, resultado, observaciones, categoria_id } = req.body;

    try {
        const [updated] = await Partido.update(
            { fecha, rival, estadio, tipo_partido, resultado, observaciones, categoria_id },
            { where: { id } }
        );

        if (updated) {
            const partidoActualizado = await Partido.findByPk(id);
            res.status(200).json(partidoActualizado);
        } else {
            res.status(404).json({ error: 'Partido no encontrado' });
        }
    } catch (error) {
        console.error('Error al actualizar el partido:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};


export default updatePartido;