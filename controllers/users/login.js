import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/User.js"

const signin = async (req, res, next) => {
    try {
    const { email, password } = req.body;

    const user = await User.findOne({where: { email }});

    if (!user) {
    return res.status(404).json({
        message: "Email incorrecto",
    });
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
    return res.status(401).json({
        message: "Contraseña incorrecta",
    });
    }

    await User.update({ isOnline: true }, { where: { email: user.email } });

    const token = jwt.sign({ id: user.id }, process.env.SECRET, {
    expiresIn: 60 * 60 * 24,
    });

    const userSend = {
        id: user.id,
        email: user.email,
        role : user.role,
    };
    
    return res.status(200).json({
    message: `¡Bienvenido ${user.email}!`,
    user: userSend,
    token,
    });
} catch (error) {
    next(error);
}
};

export default signin;