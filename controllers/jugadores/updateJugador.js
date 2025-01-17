import Jugador from "../../models/Jugador.js";

const updateJugador = async (req, res) => {
    const { id } = req.params;
    const { telefono, tutor_telefono, categoria_id, numero_socio, qr, imagen, estado, nombre, fecha_nacimiento, dni } = req.body;
    try {
        // Buscar el jugador por su ID
        const jugador = await Jugador.findByPk(id);
        
        if (!jugador) {
            return res.status(404).json({ error: 'Jugador no encontrado' });
        }

        // Actualizar los campos permitidos
        
        jugador.nombre = nombre || jugador.nombre;
        jugador.telefono = telefono || jugador.telefono;
        jugador.dni = dni || jugador.dni;
        jugador.tutor_telefono = tutor_telefono || jugador.tutor_telefono;
        jugador.categoria_id = categoria_id || jugador.categoria_id;
        jugador.numero_socio = numero_socio || jugador.numero_socio;
        jugador.qr = qr || jugador.qr;
        jugador.imagen = imagen || jugador.imagen;
        jugador.estado = estado || jugador.estado;
        jugador.fecha_nacimiento = fecha_nacimiento || jugador.fecha_nacimiento
        // Guardar los cambios
        await jugador.save();

        // Responder con el jugador actualizado
        res.status(200).json({ jugador });
    } catch (error) {
        console.error('Error updateando jugador:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

export default updateJugador;
