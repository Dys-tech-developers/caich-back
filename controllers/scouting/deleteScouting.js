import Scouting from "../../models/Scouting.js";

const deleteScouting = async (req, res) => {
    const { id } = req.params;

    try {
        const scouting = await Scouting.findByPk(id);

        if (!scouting) {
            return res.status(404).json({ error: 'Scouting no encontrado' });
        }

        scouting.eliminado = true
        
        await scouting.save();

        res.status(200).json({ scouting });
    } catch (error) {
        console.error('Error al eliminar el scouting:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export default deleteScouting;
