import Scouting from "../../models/Scouting.js";

const updateScouting = async (req, res) => {
    const { id } = req.params;
    const { telefono, telefono_contacto, puesto, club_origen, localidad, experiencia_afa, observaciones, caracteristicas, estado } = req.body;

    const validEstados = ['activo', 'en proceso', 'aprobado', 'descartado', 'inactivo', 'pendiente de confirmación'];

    if (estado && !validEstados.includes(estado)) {
        return res.status(400).json({ error: 'Estado no válido' });
    }
    
    try {
        // Encontrar el scouting por ID
        const scouting = await Scouting.findByPk(id);
        if (!scouting) {
            return res.status(404).json({ error: 'Scouting no encontrado' });
        }

        // Actualizar los campos permitidos
        scouting.telefono = telefono || scouting.telefono;
        scouting.telefono_contacto = telefono_contacto || scouting.telefono_contacto;
        scouting.puesto = puesto || scouting.puesto;
        scouting.club_origen = club_origen || scouting.club_origen;
        scouting.localidad = localidad || scouting.localidad;
        scouting.experiencia_afa = experiencia_afa || scouting.experiencia_afa;
        scouting.observaciones = observaciones || scouting.observaciones;
        scouting.caracteristicas = caracteristicas || scouting.caracteristicas;
        scouting.estado = estado || scouting.estado;

        // Guardar los cambios
        await scouting.save();

        res.status(200).json({ scouting });
    } catch (error) {
        console.error('Error al actualizar el scouting:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export default updateScouting;