import User from "../../models/User.js";


// Obtener todos los usuarios
const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Obtener un usuario por ID
const getEntrenadores = async (req, res) => {
    try {
        const user = await User.findAll({
            where: {
                role: 2
            },
            attributes: { exclude: ['password'] }
        });

        res.status(200).json(user);
    } catch (error) {
        console.error(`Error fetching user with ID ${id}:`, error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


export { getUsers, getEntrenadores };
