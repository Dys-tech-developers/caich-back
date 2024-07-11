import User from "../../models/User.js";
import bcryptjs from "bcryptjs";

const createUser = async(req,res) =>{
    const data = req.body
    

    if (!data.email || !data.password) {
        return res.status(400).json({ message: 'Correo electrónico y contraseña son obligatorios' });
    }

    try {
        const hashedPassword = bcryptjs.hashSync(data.password, 10);

        const user = new User({
            username : data.username,
            email : data.email,
            password:  hashedPassword,
            nombre: data.nombre,
            role: data.role
        })

        await user.save()

        res.status(201).json({user})
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }

}

export default createUser;