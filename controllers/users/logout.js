import User from "../../models/User.js"

const signout = async (req, res, next) => {
const { email } = req.body;
console.log(req.body);
try {
const user = await User.findOne({ where: { email } });


await user.update({ isOnline: false });

return res.status(200).json({ message: "Has cerrado sesión" });
} catch (error) {
next(error);
}
};

export default signout;