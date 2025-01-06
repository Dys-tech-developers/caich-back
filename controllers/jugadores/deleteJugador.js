import Jugador from "../../models/Jugador.js";

const deleteJugador = async(req, res) => {
    const {id} = req.params;
    
    try {
        const jugador = await Jugador.findByPk(id)
        if (!jugador) {
            return res.status(404).json({ message: 'Jugador no encontrado' });
        }

        jugador.eliminado = true;

        await jugador.save();

        res.status(200).json({ message: 'Jugador eliminado correctamente' });

    } catch (error) {
        console.error(`Error al eliminar el jugador con id ${id}:`, error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }   
}

export default deleteJugador