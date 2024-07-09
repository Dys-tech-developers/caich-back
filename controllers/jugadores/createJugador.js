import Jugador from "../../models/Jugador.js";

const createJugador = async(req, res) => {
    const {nombre, dni, telefono, fecha_nacimiento, tutor_telefono, categoria_id, numero_socio, qr, imagen, estado} = req.body; 
    try {
        const jugador = new Jugador({
            nombre,
            dni,
            telefono,
            fecha_nacimiento,
            tutor_telefono,
            categoria_id,
            numero_socio,
            qr,
            imagen,
            estado
        });
        await jugador.save()
        res.status(201).json({jugador})
    } catch (error) {
        console.error('Error creating jugador:', error);
        res.status(500).json({error: 'internal server error'})
    }
}

export default createJugador;