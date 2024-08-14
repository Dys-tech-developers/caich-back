import ConvocatoriaPartido from "../../models/ConvocatoriaPartido.js";

const deleteConvocatoria = async (req, res) => {
    const { id } = req.params;

    try {
        // Buscar la convocatoria por ID
        const convocatoria = await ConvocatoriaPartido.findByPk(id);
        if (!convocatoria) {
            return res.status(404).json({ error: 'Convocatoria no encontrada' });
        }

        // Eliminar la convocatoria de la base de datos
        await convocatoria.destroy();

        res.status(200).json({ message: 'Convocatoria eliminada exitosamente' });
    } catch (error) {
        console.error('Error al eliminar la convocatoria:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export default deleteConvocatoria;
