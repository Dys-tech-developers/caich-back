import Scouting from "../../models/Scouting.js";

const createScouting = async (req, res) => {
    const { nombre, dni, telefono, telefono_contacto, fecha_nacimiento, puesto, club_origen, localidad, experiencia_afa, observaciones, caracteristicas, estado} = req.body;

    try {
        const scouting = await Scouting.create({
            nombre,
            dni,
            telefono,
            telefono_contacto,
            fecha_nacimiento,
            puesto,
            club_origen,
            localidad,
            experiencia_afa,
            observaciones,
            caracteristicas,
            estado
        });
        res.status(201).json({ scouting });
    } catch (error) {
        console.error('Error creating scouting:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export default createScouting;
