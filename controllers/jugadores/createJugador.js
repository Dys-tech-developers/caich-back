import Jugador from "../../models/Jugador.js";

const createJugador = async(req, res) => {
    const data = req.body; 
    console.log(data.tutor_telefono)
   console.log(req.body)
    try {
        const jugador = new Jugador({
            nombre : data.nombre,
            dni: data.dni,
            telefono: data.telefono,
            fecha_nacimiento: data.fecha_nacimiento,
            tutor_telefono: data.tutor_telefono,
            categoria_id: data.categoria_id,
            numero_socio: data.numero_socio,
            qr: data.qr,
            imagen: data.imagen,
            estado: data.estado
        });
        await jugador.save()
        res.status(201).json({jugador})
    } catch (error) {
        console.error('Error creating jugador:', error);
        res.status(500).status({error: 'internal server error'})
    }
}

export default createJugador;