import Jugador from "../../models/Jugador.js";

const deleteJugador = async(req, res) => {
    const {id} = req.params;
    
    try {
        const jugador = await Jugador.findByPk(id)
        if (!jugador) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        jugador.estado = 'eliminado'

        await jugador.save()

        res.status(200).json({ message: 'Jugador eliminado correctamente' });

    } catch (error) {
        console.error(`Error deleting user with ID ${id}:`, error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export default deleteJugador