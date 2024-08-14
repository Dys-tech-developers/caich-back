import Partido from "../../models/Partido.js";
// Eliminar un partido
const deletePartido = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Partido.destroy({ where: { id } });
        if (deleted) {
            res.status(200).json({ message: 'Partido eliminado' });
        } else {
            res.status(404).json({ error: 'Partido no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar el partido:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export default deletePartido;