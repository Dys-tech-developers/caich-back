import User from "../../models/User.js";
import bcryptjs from "bcryptjs";

const createUser = async(req,res) =>{
    const {username, email, password, nombre, role} = req.body

    if (!email || !password) {
        return res.status(400).json({ message: 'Correo electrónico y contraseña son obligatorios' });
    }

    try {
        const hashedPassword = bcryptjs.hashSync(password, 10);

        const user = new User({
            username,
            email,
            password: hashedPassword,
            nombre,
            role
        })

        await user.save()

        res.status(201).json({user})
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }

}

export default createUser;