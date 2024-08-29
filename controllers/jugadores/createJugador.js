import Jugador from "../../models/Jugador.js";
import QRCode from "qrcode";
const createJugador = async(req, res) => {
    //const data = req.body; 
    const jugadoresData = req.body; // Supone que req.body es un array de objetos
    try {
        // const jugador = new Jugador({
        //     nombre : data.nombre,
        //     dni: data.dni,
        //     telefono: data.telefono,
        //     fecha_nacimiento: data.fecha_nacimiento,
        //     tutor_telefono: data.tutor_telefono,
        //     categoria_id: data.categoria_id,
        //     numero_socio: data.numero_socio,
        //     imagen: data.imagen,
        //     estado: data.estado
        // });

        const nuevosJugadores = await Promise.all(jugadoresData.map(async (data) => {
            const jugador = new Jugador({
                nombre : data.nombre,
                dni: data.dni,
                telefono: data.telefono,
                fecha_nacimiento: data.fecha_nacimiento,
                tutor_telefono: data.tutor_telefono,
                categoria_id: data.categoria_id, 
                numero_socio: data.numero_socio, // Puedes aplicar la lógica de incremento aquí si es necesario
                imagen: data.imagen,
                estado: data.estado
            });
        await jugador.save()

        // Convertir los datos del jugador en un JSON string
        // const qrCodeData = JSON.stringify({
        //     id: jugador.id,
        //     nombre: jugador.nombre,
        //     dni: jugador.dni,
        //     telefono: jugador.telefono,
        //     fecha_nacimiento: jugador.fecha_nacimiento,
        //     tutor_telefono: jugador.tutor_telefono,
        //     categoria_id: jugador.categoria_id,
        //     numero_socio: jugador.numero_socio,
        //     estado: jugador.estado
        // });

        // CAMBIAR LOCAL HOST POR DOMINIO NUESTRO
        const qrCodeData = `http://localhost:3000/api/get-jugador-qr/${jugador.id}`;

        // Generar el QR Code con los datos del jugador
        const qr = await QRCode.toDataURL(qrCodeData); // Genera el QR como Data URL


        // Guardar el QR Code en la base de datos
        jugador.qr = qr;
        await jugador.save();
       
        return jugador;
    }));
        res.status(201).json({jugadores:nuevosJugadores})
    } catch (error) {
        console.error('Error creating jugador:', error);
        res.status(500).status({error: 'internal server error'})
    }
}

export default createJugador;