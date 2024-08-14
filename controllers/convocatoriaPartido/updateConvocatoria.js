import ConvocatoriaPartido from "../../models/ConvocatoriaPartido.js";

// Actualizar una convocatoria existente
const updateConvocatoria = async (req, res) => {
    const { id } = req.params;
    const { asistio, comentario } = req.body;

    try {
        // Buscar la convocatoria por ID
        const convocatoria = await ConvocatoriaPartido.findByPk(id);
        if (!convocatoria) {
            return res.status(404).json({ error: 'Convocatoria no encontrada' });
        }

        // Actualizar los campos asistio y comentario si se proporcionan
        convocatoria.asistio = asistio !== undefined ? asistio : convocatoria.asistio;
        convocatoria.comentario = comentario !== undefined ? comentario : convocatoria.comentario;

        // Guardar los cambios en la base de datos
        await convocatoria.save();

        res.status(200).json({ convocatoria });
    } catch (error) {
        console.error('Error al actualizar la convocatoria:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export default updateConvocatoria;
