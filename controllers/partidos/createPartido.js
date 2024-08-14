import Partido from "../../models/Partido.js";
import Categoria from "../../models/Categoria.js";

const createPartido = async (req,res) => {
    const {fecha, rival, estadio, tipo_partido,resultado, observaciones, categoria_id } = req.body
    try {
        // Verificar si la categoría existe
        const categoria = await Categoria.findByPk(categoria_id);
        if (!categoria) {
            return res.status(404).json({ error: 'Categoría no encontrada' });
        }
    
        const nuevoPartido = await Partido.create({
            fecha,
            rival,
            estadio,
            tipo_partido,
            resultado,
            observaciones,
            categoria_id
        });

        res.status(201).json({ partido: nuevoPartido });
    } catch (error) {
        console.error('Error al crear el partido:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

export default createPartido;