import Jugador from "../../models/Jugador.js";
import Categoria from "../../models/Categoria.js";
import User from "../../models/User.js";
import EntrenadorCategoria from "../../models/EntrenadorCategoria.js";
import { Op } from "sequelize";
import jwt from "jsonwebtoken";

const getJugadores = async (req, res) => {
    try {
      const { nombre, categoria, dni, estado } = req.query;
  
      // Obtener el token de la cabecera de autorización
      const authHeader = req.header('Authorization');
      if (!authHeader) {
        return res.status(401).json({ error: 'Authorization header missing' });
      }
  
      const token = authHeader.replace('Bearer ', '');
      if (!token) {
        return res.status(401).json({ error: 'Token missing' });
      }
  
      // Verifica el token y obtén el userId
      let decoded;
      try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
      } catch (err) {
        return res.status(401).json({ error: 'Invalid token' });
      }
  
      const userId = decoded.id;
  
      // Busca el usuario en la base de datos
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
  
      // Verifica el rol del usuario
      if (user.dataValues.role !== 2 && user.dataValues.role !== 3) {
        return res.status(403).json({ error: 'Acceso denegado' });
      }
  
      let where = {
        [Op.or]: [
          { estado: 'activo' },
          { estado: 'inactivo' },
          {estado: 'cedido'},
          {estado: 'suspendido'},
          {estado: 'lesionado'}
        ]
      };
  
      // Agregar filtro de nombre si se proporciona
      if (nombre) {
        where.nombre = {
          [Op.like]: `%${nombre}%`
        };
      }
      if (dni) {
        where.dni = {
          [Op.like]: `%${dni}%`
        };
      }
  
      // Agregar filtro de categoría si se proporciona
      if (categoria) {
        where.categoria_id = categoria;
      }
  
      // Agregar filtro de estado si se proporciona y no es una cadena vacía
      if (estado !== undefined && estado !== "") {
        where.estado = estado;
      }
  
      // Si el usuario es entrenador, obtener las categorías a su cargo
      if (user.dataValues.role === 2) {
        const categorias = await EntrenadorCategoria.findAll({
          where: { entrenador_id: user.dataValues.id },
          attributes: ['categoria_id']
        });
  
        const categoriasArray = categorias.map(c => c.categoria_id);
  
        where.categoria_id = {
          [Op.in]: categoriasArray
        };
      }
  
      // Obtener los jugadores con los filtros aplicados
      const jugadores = await Jugador.findAll({
        where,
        include: [{
          model: Categoria,
          attributes: ['nombre']
        }]
      });
  
      res.status(200).json({ jugadores });
    } catch (error) {
      console.error('Error al obtener jugadores:', error);
      res.status(500).json({ error: 'Error interno en el servidor' });
    }
  }
  

export default getJugadores;
