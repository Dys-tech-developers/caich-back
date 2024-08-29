import Entrenamiento from "../../models/Entrenamiento.js";

const createEntrenamiento = async (req, res) => {
    
    const { dias_semana, hora, categoria_id } = req.body;
console.log(req.body)
    try {
        // Crear el entrenamiento en la base de datos
        const nuevoEntrenamiento = await Entrenamiento.create({
            dias_semana,
            hora,
            categoria_id
        });

        // Devolver una respuesta con el entrenamiento creado
        res.status(201).json({ entrenamiento: nuevoEntrenamiento });
    } catch (error) {
        console.error('Error al crear el entrenamiento:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export default createEntrenamiento;
